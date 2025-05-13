"use server"

import Parser from "rss-parser"

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
    const parser = new Parser()
    const feed = await parser.parseURL(`${substackUrl}/feed`)

    return feed.items.slice(0, 3).map((item) => {
      // Extract a clean excerpt
      const content = item.content || ""
      const div = document.createElement("div")
      div.innerHTML = content
      const textContent = div.textContent || ""
      const excerpt = textContent.substring(0, 150) + (textContent.length > 150 ? "..." : "")

      // Estimate read time
      const wordCount = textContent.split(/\s+/).length
      const readTime = Math.max(1, Math.ceil(wordCount / 200))

      // Format date
      const date = new Date(item.pubDate || "")
      const formattedDate = date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })

      return {
        id: item.guid || item.link || "",
        title: item.title || "",
        excerpt,
        date: formattedDate,
        readTime: `${readTime} min`,
        url: item.link || "",
      }
    })
  } catch (error) {
    console.error("Error fetching Substack posts:", error)
    return []
  }
}
