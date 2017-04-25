
# Utils

[![npm version](https://badge.fury.io/js/Utils.svg)](https://github.com/CrazySquirrel/Utils)
[![Code Climate](https://codeclimate.com/github/CrazySquirrel/Utils/badges/gpa.svg)](https://codeclimate.com/github/CrazySquirrel/Utils)
[![Test Coverage](https://codeclimate.com/github/CrazySquirrel/Utils/badges/coverage.svg)](https://codeclimate.com/github/CrazySquirrel/Utils/coverage)
[![Issue Count](https://codeclimate.com/github/CrazySquirrel/Utils/badges/issue_count.svg)](https://codeclimate.com/github/CrazySquirrel/Utils)
[![Donate](https://img.shields.io/badge/donate-%E2%99%A5-red.svg)](http://crazysquirrel.ru/support/)

Utils for working with DOM, Window, Screen and etc.

## Build

The repository contains pre-compiled files, but if you want to add your
files and compile, then run the following commands in the repository folder.

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