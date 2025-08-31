import { IPostData } from '../lib/posts';

export function sortPostsByDate(posts: IPostData[]): IPostData[] {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isMarkdownFile(fileName: string): boolean {
  return fileName.endsWith('.md');
}

export function getPostIdFromFileName(fileName: string): string {
  return fileName.replace(/\.md$/, '');
}
