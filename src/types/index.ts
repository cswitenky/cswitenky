// Common types shared across the application
// Specific types are defined in their respective modules:
// - IPostData, IPostMetadata: src/lib/posts.tsx
// - ISiteConfig: src/config/site.config.ts

export interface IDateTimeFormat {
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day: 'numeric' | '2-digit';
}

export interface ITheme {
  Light: 'light';
  Dark: 'dark';
  Auto: 'system';
}
