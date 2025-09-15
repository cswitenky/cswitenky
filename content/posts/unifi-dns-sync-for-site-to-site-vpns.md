---
title: 📡 UniFi DNS Sync for Site-to-Site VPNs
date: 2025-09-14
draft: true
---
UniFi has [Site Magic](https://help.ui.com/hc/en-us/articles/16750417515159-UniFi-Gateway-Setting-Up-SD-WAN-with-UniFi-Site-Magic), but it's not so magic sometimes - because DNS records aren't synchronized across sites.

To solve this, I wrote the core code for a small Python tool and used AI to help refine the structure and packaging. The result is [unifi-dns-sync](https://pypi.org/project/unifi-dns-sync/), a simple CLI utility for keeping DNS A records in sync across UniFi controllers.

You can install it directly from PyPI with:

```python
pip install unifi-dns-sync
```
Source code is available on [GitHub](https://github.com/cswitenky/unifi-dns-sync).

## Usage
First, create a `dns-records.json` file with the DNS A records you want managed by your UniFi controller:
```json
[
  { "duck.switenky.com": "10.0.10.11" },
  "horse.switenky.com",
  { "cat.switenky.com": "10.0.30.14" },
  { "dog.switenky.com": "10.0.40.15" }
]
```

Then run:
```
python -m unifi_dns_sync dns-records.json \
  --controller https://10.0.0.1 \
  --username admin \
  --password your-password \
  --target-ip 10.0.0.123
```

**Note:** any hostname without an explicit IP (like `horse.switenky.com`) will use the fallback specified by `--target-ip`.



## Conclusion

It’s lightweight and flexible enough to integrate into a cron job, Ansible playbook, CI/CD pipeline, or even a Kubernetes job.

It solved a real headache in my homelab and multi-site UniFi setup -- and hopefully it helps you too.

## ✨ Features

* Takes in a list of records
* Adds new records and removes unused 
* Supports a 'diff'-like CLI output and dry-runs via CLI args
* Easy to automate (Kubernetes, Ansible, CI/CD, etc.)
