---
title: "⚡Raspberry Pi 5 Build: PoE-Powered with NVMe SSD"
date: 2025-09-09
draft: false
---
I was gifted a Raspberry Pi 5 not too long ago, and it sat idle for a bit, I finally decided to put it to use.

One of the coolest things about the Pi 5 is its support for [HATs](https://en.wikipedia.org/wiki/Raspberry_Pi#Add-on_boards_(HATs)) (Hardware Attached on Top). There are tons to choose from, but one caught my eye: a HAT that combines [PoE](https://en.wikipedia.org/wiki/Power_over_Ethernet) and [NVMe SSD](https://en.wikipedia.org/wiki/NVM_Express) storage. Since I've had microSD cards fail on me in the past, upgrading to NVMe feels like a solid move for reliability and speed. And with PoE, I can power the Pi and provide internet through a single Ethernet cable - keeping the setup clean and simple.

![](/images/raspberrypi5.jpg)

*A [GeeekPi P33 HAT](https://pipci.jeffgeerling.com/hats/geeekpi-p33-m2-nvme-poe-hat.html) on my Raspberry Pi 5, powered by an Ethernet cable.*

I recently snagged [a used 8-port 150w Ubiquiti PoE switch](https://store.ui.com/us/en/products/us-8-150w). It's a bit older, but perfect for powering a few of my PoE devices including this.

Next up: I'm planning to connect the Pi to an RTL-SDR antenna to track planes flying overhead using ADS-B signals. Being in Seattle, I get plenty of SeaTac airport traffic right above me, so there's always something interesting to monitor. I'll also run a few lightweight Docker containers alongside for experimenting.

Eventually, as I continue my Kubernetes journey - this Pi will eventually join the cluster as a node. I'm excited for all tinkering to come with this device!
