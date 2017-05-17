
"use strict";

// 加载自带类库
var http = require('http')
, url = require('url')
, fs = require('fs')
, querystring = require('querystring');

// 加载第三方类库
// var mysql = require('mysql');

// 加载任务模块
var test = require("./tasks/test.js");

/**
 * 主进程
 *
 * @param  void
 * @return void
 */
var main = function() {
    var hostname = config.server.host;
    var port     = config.server.port;
    var server   = http.createServer((req, res) => {
        let pathname = url.parse(req.url).pathname;
        let arg      = url.parse(req.url).query; 
        console.log(req.url);
        let response_content = 'Hello World\n';
        test.testDemo('hello biangbiang!');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(response_content);
    });

    server.listen(port, hostname, () => {
        console.log(`服务器运行在 http://${hostname}:${port}/`);
    });
}

module.exports.main = main;
