import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function getArticles() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text || "",
      description: page.properties.Description.rich_text[0]?.plain_text || "",
      date: page.properties.Date.date?.start || "",
      category: page.properties.Category.select?.name || "",
      image: page.properties.Image.files[0]?.file?.url || "",
      slug: page.properties.Slug.rich_text[0]?.plain_text || "",
    }))
  } catch (error) {
    console.error("Error fetching Notion articles:", error)
    return []
  }
} 