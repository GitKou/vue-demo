const path = require('path')
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.conf');
const webpackDevMidWare = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const openurl = require('openurl');

var port = 8090;
var app = express();
var complier = webpack(webpackConfig); //启动webpack进行编译
// 启动 webpack-dev-middleware，将编译后的文件暂存到内存中
var devMiddleware = webpackDevMidWare(complier, {
  stats: {
    chunck: false,
    colors: true
  }
})
var hotMiddleware = webpackHotMiddleware(complier);
// 将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
app.use(devMiddleware);
// 将 Hot-reload 挂在到 express 服务上
app.use(hotMiddleware);

app.use('/xhr/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../src/test/mock/xhr/.', req.path), {
      headers: {
        'Content-Type': 'application/json'
      }
    }, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
         next();
      }

    });

});
// express 服务监听 port 的请求
app.listen(port, '', function () {
  console.log('Listening at ' + port + '\n');
  openurl.open('http://127.0.0.1:' + port + '/index.html');
});
