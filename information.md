Hello! 👋

This is my personal website and blog built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/). This website is deployed using Github Actions workflow and hosted on [Github Pages](https://pages.github.com/). I then have my [Azure Static Page](https://azure.microsoft.com/en-us/products/static-web-apps/) pointing to this repository. The website is available at [switenky.com](https://switenky.com).

# Running Locally

To run this project locally, you will need to have [Node.js](https://nodejs.org/) installed on your machine. I use [nvm](https://github.com/nvm-sh/nvm) to manage my Node.js versions. You can install your copy of `node` however you prefer.

Once you have Node.js installed, you can clone this repository. Then you can run the following commands to install the dependencies and start the local dev server:

```
npm install

npm run dev
```

# Writing Blog Posts

Blog posts can be found in the `posts` directory, any new posts should be added there. They will be automatically generated and added to the blog page via `remark-html` for converting the markdown to HTML. The metadata is parsed using `gray-matter`. Images and other files can be added to the `public` directory and can be referenced in the blog posts.