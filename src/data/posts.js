// code by Daniel Schulz - https://iamschulz.com/from-notion-to-eleventy/
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { marked } from "marked";
import slugify from "slugify";

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

	const posts = db.results.map(result => {
		return {
			id: result.id,
			title: result.properties["Title"].title.pop().plain_text,
			content: "",
			cover: result.cover?.file?.url || result.cover?.external?.url,
			coverAlt:
				result.properties["Cover Alt"]?.rich_text.pop()?.plain_text ||
				"",
			date: result.properties["Date"]?.date.start,
			socialImage:
				result.properties["Social Image"]?.files[0]?.file?.url ||
				result.properties["Social Image"]?.files[0]?.external?.url,
			summary:
				result.properties["Summary"]?.rich_text.pop()?.plain_text || "",
			slug: "",
		};
	});

	for (let i = 0; i < posts.length; i++) {
		const _page = posts[i];
		const _mdContent = await getContent(_page.id);
		_page.content = marked(_mdContent);
		_page.slug = slugify(_page.title, {
			lower: true,
			remove: /[*+~.()'"!:@]/g,
		});
	}

	return posts;
};
