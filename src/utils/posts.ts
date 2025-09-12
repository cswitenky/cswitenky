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

// Create a URL-safe slug from a file base name. This will strip emoji and
// other non-ASCII characters, normalize diacritics, replace whitespace with
// hyphens, and lowercase the result.
function slugify(value: string): string {
  return value
    .normalize('NFKD')                       // separate accents from letters
    .replace(/[\u0300-\u036f]/g, '')       // remove accents/diacritics
    .replace(/[^\w\s-]/g, '')              // remove non-word characters (this removes emoji)
    .trim()
    .replace(/[-\s_]+/g, '-')              // collapse runs of separators into single '-'
    .replace(/^-+|-+$/g, '')                // trim leading/trailing '-'
    .toLowerCase();                         
}

export function getPostIdFromFileName(fileName: string): string {
  const base = fileName.replace(/\.md$/, '');
  return slugify(base);
}
