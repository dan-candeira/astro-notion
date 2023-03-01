// code by Daniel Schulz - https://iamschulz.com/from-notion-to-eleventy/
import { Client } from "@notionhq/client";

export const getPostsSummary = async () => {
	// connects to notion API
	const notion = new Client({ auth: import.meta.env.NOTION_KEY });

	const databaseId = import.meta.env.NOTION_BLOG_ID;
	const db = await notion.databases.query({
		database_id: databaseId,
		filter: {
			property: "Draft",
			checkbox: { equals: false },
		},
		sorts: [
			{
				property: "Date",
				direction: "descending",
			},
		],
	});

	const posts = db.results.map(result => ({
		id: result.id,
		title: (result as any).properties["Title"].title.pop().plain_text,
		cover:
			(result as any).cover?.file?.url ||
			(result as any).cover?.external?.url,
		coverAlt:
			(result as any).properties["Cover Alt"]?.rich_text.pop()
				?.plain_text || "",
		date: (result as any).properties["Date"]?.date.start,
		summary: (result as any).properties["Date"]?.date.start,
	}));

	return posts;
};
