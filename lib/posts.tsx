import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  contentHtml?: string;
  [key: string]: any;
}

export const getSortedPostsData = (): PostData[] => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName: string) => {
      // Check if it's a file and not a directory
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile();
    })
    .map((fileName: string) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      };
  });
  // Sort posts by date
  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAdjacentPosts = (id: any): PostData[] => {
  const sortedPostsData = getSortedPostsData();

  const currentPostIndex = sortedPostsData.findIndex((x) => x.id == id);

  const previousPost = sortedPostsData[currentPostIndex + 1] ?? null;
  const nextPost = sortedPostsData[currentPostIndex - 1] ?? null;

  return [previousPost, nextPost];
};

export const getAllPostIds = (): any => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName: string) => {
      // Check if it's a file and not a directory
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile();
    })
    .map((fileName: any) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
};

export const getPostData = async (id: any): Promise<PostData> => {
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
    contentHtml,
    ...matterResult.data,
  };
};
