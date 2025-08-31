import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface IPageData {
  title: string;
  description: string;
  contentHtml: string;
  [key: string]: any;
}

export const getHomePageData = async (): Promise<IPageData> => {
  const fullPath = path.join(contentDirectory, 'pages/home.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the page metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with contentHtml
  return {
    title: matterResult.data.title || '',
    description: matterResult.data.description || '',
    contentHtml,
    ...matterResult.data,
  };
};
