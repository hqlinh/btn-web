import { Blog, BlogWithContent } from "@/types";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const NOTION_DATA_SOURCE_ID = process.env
  .NEXT_PUBLIC_NOTION_DATA_SOURCE_ID as string;

const NOTION_BLOG_DATABASE_ID = process.env
  .NEXT_PUBLIC_NOTION_DB_ID as string;

class BlogService {
  private readonly notionClient: Client;
  private readonly n2m: NotionToMarkdown;

  constructor() {
    this.notionClient = new Client({
      auth: process.env.NOTION_SECRET_KEY,
    });
    this.n2m = new NotionToMarkdown({
      notionClient: this.notionClient,
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
      page_size: 12,
      start_cursor: cursor,
    });

    return {
      blogs: this.transformBlog(dataSource.results),
      hasMore: dataSource.has_more,
      nextCursor: dataSource.next_cursor || null,
    };
  }

  async getBlogBySlug(slug: string): Promise<BlogWithContent | null> {
    const dataSource = await this.notionClient.dataSources.query({
      data_source_id: NOTION_DATA_SOURCE_ID,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            formula: {
              string: {
                equals: slug,
              },
            },
          },
        ],
      },
      page_size: 1,
    });
    
    const page = dataSource.results[0];
    if (!page) {
      return null;
    }
    const mdBlocks = await this.n2m.pageToMarkdown(page.id);
    const markdown = this.n2m.toMarkdownString(mdBlocks);
    const post = this.transformBlogWithContent(page);
    return {
      ...post,
      markdown: markdown.parent as unknown as string,
    };
  }

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  private transformBlog(blogs: any[]): Blog[] {
    return blogs.map((blog: any) => {
      const title = blog.properties.Name.title[0].plain_text;
      const description = blog.properties.Description.rich_text[0].plain_text;
      const createdAt = blog.created_time;
      const tags = blog.properties.Tags.multi_select.map(
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  private transformBlogWithContent(blog: any): Blog {
    const title = blog.properties.Name.title[0].plain_text;
    const description = blog.properties.Description.rich_text[0].plain_text;
    const createdAt = blog.created_time;
    const tags = blog.properties.Tags.multi_select.map(
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      (tag: any) => tag.name
    );
    const slug = blog.properties.Slug.formula.string;

    // Lấy nội dung từ property Content (hoặc property khác tùy vào schema Notion của bạn)
    let content = "";
    if (blog.properties.Content && blog.properties.Content.rich_text) {
      content = blog.properties.Content.rich_text
        .map((text: any) => text.plain_text)
        .join("");
    } else if (blog.properties.Body && blog.properties.Body.rich_text) {
      content = blog.properties.Body.rich_text
        .map((text: any) => text.plain_text)
        .join("");
    } else if (blog.properties.Article && blog.properties.Article.rich_text) {
      content = blog.properties.Article.rich_text
        .map((text: any) => text.plain_text)
        .join("");
    }

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
  }
}

export const blogService = new BlogService();
