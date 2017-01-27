# Utils
[![npm version](https://badge.fury.io/js/Utils.svg)](https://github.com/CrazySquirrel/Utils)
[![Github All Releases](https://img.shields.io/github/downloads/CrazySquirrel/Utils/total.svg)](https://github.com/CrazySquirrel/Utils)
[![Travis branch](https://img.shields.io/travis/CrazySquirrel/Utils/master.svg)](https://github.com/CrazySquirrel/Utils)
[![license](https://img.shields.io/github/license/CrazySquirrel/Utils.svg)](https://github.com/CrazySquirrel/Utils)
[![npm version](https://img.shields.io/badge/donate-%E2%99%A5-red.svg)](http://crazysquirrel.ru/support/)

Utils for working with DOM, Window, Screen and etc.

## Build
The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder.
* npm install
* npm run production

or

* npm run development

The build required NodeJs version 6 or higher.

## Usage

```TypeScript
import Utils from "Utils.ts";

Utils.Document.getHeight();
```

or

```JavaScript
let Utils = required("Utils.js");

Utils.Document.getHeight();
```