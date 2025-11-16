export type Blog = {
  id: string;
  title: string;
  description: string;
  cover: string;
  tags: string[];
  slug: string;
  createdAt: string;
};

export type BlogWithContent = Blog & {
  content: string;
};
