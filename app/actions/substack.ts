"use server"

interface SubstackPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  url: string
}

export async function fetchSubstackPosts(substackUrl: string): Promise<SubstackPost[]> {
  try {
    // Fetch the RSS feed from Substack
    const response = await fetch(`${substackUrl}/feed`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch Substack feed: ${response.status}`)
    }

    const text = await response.text()

    // Parse the XML feed
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(text, "text/xml")

    // Extract the posts
    const items = xmlDoc.querySelectorAll("item")
    const posts: SubstackPost[] = []

    items.forEach((item, index) => {
      if (index < 3) {
        // Only get the 3 most recent posts
        const title = item.querySelector("title")?.textContent || ""
        const link = item.querySelector("link")?.textContent || ""
        const pubDate = item.querySelector("pubDate")?.textContent || ""
        const description = item.querySelector("description")?.textContent || ""

        // Format the date
        const date = new Date(pubDate)
        const formattedDate = date.toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })

        // Estimate read time (roughly 200 words per minute)
        const wordCount = description.split(/\s+/).length
        const readTime = Math.max(1, Math.ceil(wordCount / 200))

        // Extract a clean excerpt
        const tempDiv = document.createElement("div")
        tempDiv.innerHTML = description
        const textContent = tempDiv.textContent || ""
        const excerpt = textContent.substring(0, 150) + (textContent.length > 150 ? "..." : "")

        posts.push({
          id: link,
          title,
          excerpt,
          date: formattedDate,
          readTime: `${readTime} min`,
          url: link,
        })
      }
    })

    return posts
  } catch (error) {
    console.error("Error fetching Substack posts:", error)
    return []
  }
}
