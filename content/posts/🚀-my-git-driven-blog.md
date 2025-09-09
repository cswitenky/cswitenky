---
title: 🚀 My Git-Driven Blog
date: 2025-09-08T17:45:00.000-07:00
draft: true
---
I manage my blog with GitHub, which gives me version control and easy rollbacks. The posts are written in Markdown, and the entire site is hosted directly on GitHub Pages.

This setup helps me consolidate my tech stack and keep my workflow simple and efficient.

To make content editing even easier, I use Decap CMS—so I don’t have to clone my GitHub repo every time. Instead, I can manage everything right from the web interface.

Lately, I’ve been exploring how some people use Git as the single source of truth for everything—including their Obsidian notes, budgeting, Kubernetes management, and Ansible playbooks. The GitOps-style workflow is a pretty neat concept.

Along the way, I ran into an authentication challenge: Decap CMS requires an OAuth proxy. To solve this, I built [an Azure-powered proxy](https://github.com/cswitenky/decap-azure-proxy).
