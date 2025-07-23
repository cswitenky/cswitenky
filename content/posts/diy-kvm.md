---
title: '👐 DIY KVM'
date: '2024-01-28'
---

I tried one of those KVM switches that lets you use one keyboard and mouse for two computers, but it didn't work well for me because often they don't really meet HDMI standards. You tend to lose the ability to use [DDC/CI](https://en.wikipedia.org/wiki/Display_Data_Channel#DDC/CI), access to high refresh rates, some flickering, and other display issues. So I decided to build my own automated KVM switch using ESP8266, a Lutron Caseta switch. I wanted to share my experience in case anyone else is interested in doing something similar.

I used the following components:
- Lutron Caseta 5-Button Pico (requires a Lutron Caseta hub)
- ESP8266, I used a Wemos D1 Mini
- USB 3.0 Switch
- Monitor with DDC/CI & USB Hub capabilities (I used a Dell S2721DGF)

# USB Switch Hack

I used a USB 3.0 switch that I had lying around. It was a simple 2-port switch that I could control with a button. I opened it up and connected the button and LED status indicator to the ESP8266. The ESP8266 would send a signal to the USB switch to toggle between the two computers while measuring the current draw of the LED status indicator. This way, I could use the LED status indicator to show which USB port was currently active.

I then flashed the ESP8266 with ESPHome with the following configuration:

```yaml
esphome:
  name: usb-switcher
  friendly_name: usb-switcher

esp8266:
  board: d1_mini

api:
  encryption:
    key: !secret api_password
ota:
  - platform: esphome
    password: !secret ota_password

# Define the analog input for measuring the status light voltage (A0)
sensor:
  - platform: adc
    pin: A0
    name: "Status Voltage"
    id: switchState
    update_interval: 0.5s

# Define the output for the button press simulation on D5
output:
  - platform: gpio
    pin: D5
    id: button_press
    inverted: false

# Define a simple switch that triggers the button press action
switch:
  - platform: template
    name: "USB Switch"
    lambda: |-
      if (id(switchState).state > 0.9) {
        return true;
      } else {
        return false;
      }
    turn_on_action:
      - output.turn_on: button_press
      - delay: 100ms
      - output.turn_off: button_press
    turn_off_action:
      - output.turn_on: button_press
      - delay: 100ms
      - output.turn_off: button_press

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
```