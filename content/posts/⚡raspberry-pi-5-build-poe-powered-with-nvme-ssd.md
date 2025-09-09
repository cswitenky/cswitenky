---
title: "⚡Raspberry Pi 5 Build: PoE-Powered with NVMe SSD"
date: 2025-09-08T17:31:00.000-07:00
draft: true
---
I was gifted a Raspberry Pi 5 not too long ago, and it sat idle for a bit-until I recently snagged [an older, used 8-port 150w Ubiquiti PoE switch](https://store.ui.com/us/en/products/us-8-150w).

One of the coolest things about the Pi 5 is its support for [HATs](https://en.wikipedia.org/wiki/Raspberry_Pi#Add-on_boards_(HATs)) (Hardware Attached on Top). There are tons to choose from, but one caught my eye: a HAT that combines [PoE](https://en.wikipedia.org/wiki/Power_over_Ethernet) and [NVMe SSD](https://en.wikipedia.org/wiki/NVM_Express) storage. Having had microSD cards fail on me in the past, upgrading to NVMe feels like a solid move for reliability and speed. Plus, with power and internet both delivered over a single Ethernet cable, the setup stays clean and simple.

I’m planning to connect it to an RTL-SDR antenna to track planes flying overhead using [ADS-B signals](https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance%E2%80%93Broadcast). Living in Seattle, I get plenty of SeaTac airport traffic right above me, so there’s always something interesting to monitor. I’ll also run a few lightweight Docker containers alongside.

As I continue my Kubernetes journey, I’ll eventually add this setup to my cluster as a node.
