# hive-pusher-js
A code pusher for hive written in Javascript

[![npm package](https://nodei.co/npm/hive-pusher.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hive-pusher/)

[![Dependency Status](https://img.shields.io/david/JerryLiao26/hive-pusher-js.svg)](https://david-dm.org/JerryLiao26/hive-pusher-js)
[![codebeat badge](https://codebeat.co/badges/9fe1587d-c43d-4a2d-8d37-c19273313287)](https://codebeat.co/projects/github-com-jerryliao26-hive-pusher-js-master)
[![License](https://img.shields.io/github/license/JerryLiao26/hive-pusher-js.svg)](https://opensource.org/licenses/MIT)

## Usage
First, install the package
```
npm install hive-pusher --save-dev
```
Then, in your code, initialize it, and send your message to **hive**
```
let Pusher = require('hive-pusher')
let pusher = new Pusher('your hive address', 'your token')
pusher.send('Hello from Node.js')
```
For more settings
```
pusher.setPath('your new hive path')
pusher.setToken('your another token')
```
