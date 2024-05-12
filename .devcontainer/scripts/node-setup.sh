#!/bin/bash
export NVM_DIR="/home/codespace/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 18.17.1
npm install