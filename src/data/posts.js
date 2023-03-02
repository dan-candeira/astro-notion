import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { marked } from "marked";

export const getPosts = async () => {
	// connects to notion API
	const notion = new Client({ auth: import.meta.env.NOTION_KEY });
	const n2m = new NotionToMarkdown({ notionClient: notion });

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

	const getContent = async id => {
		const mdblocks = await n2m.pageToMarkdown(id);
		return n2m.toMarkdownString(mdblocks);
	};

	const posts = db.results.map(result => ({
		id: result.id,
		title: result.properties["Title"].title.pop().plain_text,
		content: "",
		cover: result.cover?.file?.url || result.cover?.external?.url,
		coverAlt:
			result.properties["Cover Alt"]?.rich_text.pop()?.plain_text || "",
		date: result.properties["Date"]?.date.start,
	}));

	for (let i = 0; i < posts.length; i++) {
		const _mdContent = await getContent(posts[i].id);
		posts[i].content = marked(_mdContent);
	}

	return posts;
};
