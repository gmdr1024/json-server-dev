# json-server-dev
Json-server dev

## Description
- Api mock server dev

## Feature
- Wrap [json-server](https://www.npmjs.com/package/json-server) with `npm-scripts`
- Templating of data json files with [dummy-json](https://www.npmjs.com/package/dummy-json)
- Auto-merge data objects with [json-merger](https://www.npmjs.com/package/json-merger)

## Requirement
- Node.js 14.16.x

## Pre-install
- [Node.js](https://nodejs.org/) 
- [EditorConfig](https://editorconfig.org/)

## Install
1. Download [code](https://github.com/gmdr1024/json-server-dev/archive/main.zip)
2. `npm i`

## Usage

### Start a local server
- `npm start` under `json-server`

### Add data files
- Add `~~.hbs` file to `db`
  - [dummy-json syntax](https://github.com/webroo/dummy-json#built-in-helpers)

### Add routing
- Add routing to `server.js` ([Express.js syntax](https://expressjs.com/en/guide/routing.html))

## Re-use
Copy code in `json-server`

## Author
[gmdr1024](https://github.com/gmdr1024)

## License
[CC0](https://github.com/gmdr1024/json-server-dev/blob/main/LICENSE) 
