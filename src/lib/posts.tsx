import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { sortPostsByDate, isMarkdownFile, getPostIdFromFileName } from '../utils/posts';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface IPostData {
  id: string;
  title: string;
  date: string;
  contentHtml?: string;
  [key: string]: any;
}

export interface IPostMetadata {
  title: string;
  date: string;
  [key: string]: any;
}

export const getSortedPostsData = (): IPostData[] => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName: string) => {
      // Check if it's a file and not a directory
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile() && isMarkdownFile(fileName);
    })
    .map((fileName: string) => {
      // Remove ".md" from file name to get id
      const id = getPostIdFromFileName(fileName);

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        ...matterResult.data,
      } as IPostData;
  });
  // Sort posts by date
  return sortPostsByDate(allPostsData);
};

export const getAdjacentPosts = (id: string): (IPostData | null)[] => {
  const sortedPostsData = getSortedPostsData();

  const currentPostIndex = sortedPostsData.findIndex((x) => x.id === id);

  const previousPost = sortedPostsData[currentPostIndex + 1] ?? null;
  const nextPost = sortedPostsData[currentPostIndex - 1] ?? null;

  return [previousPost, nextPost];
};

export const getAllPostIds = (): { params: { id: string } }[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName: string) => {
      // Check if it's a file and not a directory
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile() && isMarkdownFile(fileName);
    })
    .map((fileName: string) => {
      return {
        params: {
          id: getPostIdFromFileName(fileName),
        },
      };
    });
};

export const getPostData = async (id: string): Promise<IPostData> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    title: matterResult.data.title || '',
    date: matterResult.data.date || '',
    contentHtml,
    ...matterResult.data,
  };
};
