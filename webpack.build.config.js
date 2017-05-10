"use strict";

const NODE_ENV = process.env.NODE_ENV || "development";

const MODE = NODE_ENV.split(":")[0];

const MODE_2 = NODE_ENV.split(":")[1];

const StringReplacePlugin = require("string-replace-webpack-plugin");

const WebpackNotifierPlugin = require("webpack-notifier");

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const CleanWebpackPlugin = require("clean-webpack-plugin");

const path = require("path");

const webpack = require("webpack");

const fs = require("fs");

const crypto = require("crypto");

const compress = require("compression");

const packagenpm = require("./package.json");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BundleAnalyzerPlugin = require(
    "webpack-bundle-analyzer"
).BundleAnalyzerPlugin;

let extractHTML = new ExtractTextPlugin("[name].html");

let objBuildList = {};

/**
 * Templates
 */
objBuildList = Object.assign(
    objBuildList,
    {
      "./lib/Utils": ["./lib/Utils.ts"],
      "./lib/UtilsAnimation": ["./lib/UtilsAnimation.ts"],
      "./lib/UtilsAnimationEasing": ["./lib/UtilsAnimationEasing.ts"],
      "./lib/UtilsBrowser": ["./lib/UtilsBrowser.ts"],
      "./lib/UtilsCookie": ["./lib/UtilsCookie.ts"],
      "./lib/UtilsDocument": ["./lib/UtilsDocument.ts"],
      "./lib/UtilsDOM": ["./lib/UtilsDOM.ts"],
      "./lib/UtilsMain": ["./lib/UtilsMain.ts"],
      "./lib/UtilsMouse": ["./lib/UtilsMouse.ts"],
      "./lib/UtilsScreen": ["./lib/UtilsScreen.ts"],
      "./lib/UtilsSystem": ["./lib/UtilsSystem.ts"],
      "./lib/UtilsUser": ["./lib/UtilsUser.ts"],
      "./lib/UtilsWindow": ["./lib/UtilsWindow.ts"]
    }
);

if (MODE_2 !== "stat") {
  objBuildList = Object.assign(
      objBuildList,
      {
        "./dist/simple-typescript-example/index": ["./src/simple-typescript-example/index.ts"],
        "./dist/simple-javascript-example/index": ["./src/simple-javascript-example/index.ts"],
        "./dist/test-scope/index": ["./src/test-scope/index.ts"]
      }
  );
}

/**
 * Plugins list
 */
let arrPlugins = [
  new WebpackNotifierPlugin(),
  new StringReplacePlugin(),
  extractHTML
];
/**
 * Add BrowserSync for development mode
 */
if (MODE_2 === "stat") {
  arrPlugins.push(
      new BundleAnalyzerPlugin()
  );
}
/**
 * Add BrowserSync for development mode
 */
if (MODE_2 === "watch") {
  arrPlugins.push(
      new BrowserSyncPlugin({
        host: "localhost",
        port: 8080,
        server: {
          baseDir: ["./"],
          middleware: function (req, res, next) {
            var gzip = compress();
            gzip(req, res, next);
          }
        }
      })
  );
}
/**
 * Add uglifyer for production mode
 */
if (MODE === "production" || MODE === "testing") {
  arrPlugins.push(
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compressor: {
          warnings: false
        }
      })
  );
}
/**
 * Add additional plugins
 */
arrPlugins.push(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(MODE)
    })
);

arrPlugins.push(
    new CleanWebpackPlugin([
      "./dist"
    ])
);

let replacements = StringReplacePlugin.replace({
  replacements: [
    {
      pattern: /#HASH#/gi,
      replacement: () => {
        return crypto.createHash("md5").update(
            (new Date()).getTime().toString()).digest("hex");
      }
    },
    {
      pattern: /#PACKAGE_NAME#/gi,
      replacement: () => {
        return packagenpm.name;
      }
    },
    {
      pattern: /#PACKAGE_VERSION#/gi,
      replacement: () => {
        return packagenpm.version;
      }
    }
  ]
});

module.exports = {
  entry: objBuildList,
  output: {
    filename: MODE === "production" ? "[name].js" : "[name].js",
    library: "Utils",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    "Utils": "Utils"
  },
  devtool: (
      MODE === "development" ? "inline-source-map" : (
          MODE === "testing" ? "inline-source-map" : ""
      )
  ),
  plugins: arrPlugins,
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  resolveLoader: {
    extensions: [".js", ".ts", ".jsx", ".tsx"]
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: replacements
          },
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.html/i,
        use: extractHTML.extract(["html-loader"])
      },
      {
        test: /\.json$/,
        use: "json-loader"
      }
    ]
  }
};