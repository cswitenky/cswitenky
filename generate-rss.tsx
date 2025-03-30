import fs from 'fs';
import path from 'path';
import RSS from 'rss';
import { parseISO } from 'date-fns';
import { getSortedPostsData } from './lib/posts'; // Adjust based on your actual posts utility
import config from './config';

function generateRssFeed() {
  console.log('Starting RSS generation...');

  // Create feed with site-wide options
  const feed = new RSS({
    title: config.MY_FULL_NAME,
    description: `${config.MY_FULL_NAME}\'s personal website`,
    site_url: config.BASE_URL,
    feed_url: `${config.BASE_URL}/rss.xml`,
    language: 'en',
    pubDate: new Date(),
    copyright: `© ${new Date().getFullYear()} ${config.MY_FULL_NAME}`,
  });

  // Get all blog posts
  console.log('Fetching blog posts...');
  const allPosts = getSortedPostsData();
  console.log(`Found ${allPosts.length} posts`);

  // Add each post to the feed
  allPosts.forEach((post: any) => {
    const url = `${config.BASE_URL}/posts/${post.id || post.slug}`;
    
    feed.item({
      title: post.title,
      description: post.excerpt || post.description || '',
      url: url,
      guid: url,
      date: post.date ? parseISO(post.date) : new Date(),
      author: post.author ? post.author.name : config.MY_FULL_NAME,
    });
  });

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the RSS feed to a file
  const rssPath = path.join(publicDir, 'rss.xml');
  fs.writeFileSync(rssPath, feed.xml({ indent: true }));
  
  console.log(`RSS feed successfully generated at ${rssPath}`);
}

// Run the function immediately
try {
  generateRssFeed();
} catch (error) {
  console.error('Error generating RSS feed:', error);
  process.exit(1);
}