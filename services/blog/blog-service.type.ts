import { Blog } from "@/types";

export type GetPublishedBlogParams = {
  database_id: string;
};

export type GetPublishedBlogResponse = {
  results: Blog[];
};
