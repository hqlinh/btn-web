import { Blog } from "@/types";
import { Client } from "@notionhq/client";

const NOTION_DATA_SOURCE_ID = process.env
  .NEXT_PUBLIC_NOTION_DATA_SOURCE_ID as string;

class BlogService {
  private readonly notionClient: Client;

  constructor() {
    this.notionClient = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY,
    });
  }

  async getPublishedBlog(cursor?: string) {
    const dataSource = await this.notionClient.dataSources.query({
      data_source_id: NOTION_DATA_SOURCE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
      page_size: 10,
      start_cursor: cursor,
    });

    return this.transformBlog(dataSource.results);
  }

  private transformBlog(blogs: any[]): Blog[] {
    return blogs.map((blog: any) => {
      const title = blog.properties.Name.title[0].plain_text;
      const description = blog.properties.Description.rich_text[0].plain_text;
      const createdAt = blog.created_time;
      const tags = blog.properties.Tags.multi_select.map(
        (tag: any) => tag.name
      );
      const slug = blog.properties.Slug.formula.string;

      let cover = "";
      switch (blog.cover.type) {
        case "file":
          cover = blog.cover.file.url;
          break;
        case "external":
          cover = blog.cover.external.url;
          break;
      }

      return {
        id: blog.id,
        title,
        description,
        cover,
        tags,
        slug,
        createdAt,
      };
    });
  }
}

export const blogService = new BlogService();
