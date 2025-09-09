---
title: 📡 UniFi DNS Sync for Site-to-Site VPNs
date: 2025-09-08T00:00:00.000-07:00
draft: true
---
UniFi has [Site Magic](https://help.ui.com/hc/en-us/articles/16750417515159-UniFi-Gateway-Setting-Up-SD-WAN-with-UniFi-Site-Magic), but it's not so magic sometimes - because DNS records aren't synchronized.

This small Python script helps synchronize DNS records between UniFi sites. It’s simple enough to drop into a cron job, Ansible playbook, CI/CD pipeline, or even Kubernetes job if needed.

It solved a real headache in my homelab and multi-site UniFi setup -- and hopefully it helps you too.

## ✨ Features
- Takes in a list of records
- Adds new records and removes unused 
- Produces a 'diff'-like CLI output
- Easy to automate (Kubernetes, Ansible, CI/CD, etc.)
