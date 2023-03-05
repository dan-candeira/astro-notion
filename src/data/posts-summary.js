// code by Daniel Schulz - https://iamschulz.com/from-notion-to-eleventy/
import { Client } from "@notionhq/client";
import slugify from "slugify";

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
		title: result.properties["Title"].title.pop().plain_text,
		cover: result.cover?.file?.url || result.cover?.external?.url,
		coverAlt:
			result.properties["Cover Alt"]?.rich_text.pop()?.plain_text || "",
		date: result.properties["Date"]?.date.start,
		summary:
			result.properties["summary"]?.rich_text.pop()?.plain_text || "",
		slug: "",
	}));

	for (let i = 0; i < posts.length; i++) {
		const _page = posts[i];
		_page.slug = slugify(_page.title, {
			lower: true,
			remove: /[*+~.()'"!:@]/g,
		});
	}

	return posts;
};
