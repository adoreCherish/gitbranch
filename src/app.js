'use strict';

var _babelCore = require('babel-core');

var _babelCore2 = _interopRequireDefault(_babelCore);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

var _appStaticPage = require('./config/appStaticPage');

var _appStaticPage2 = _interopRequireDefault(_appStaticPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var koa = require('koa');
var app = new koa();
var router = require('koa-simple-router');
var serve = require('koa-static');
var render = require('koa-swig');
var co = require('co');
var path = require('path');
var dirName = __dirname;

_initController2.default.init(app, router);
_appStaticPage2.default.appRender(app, co, dirName, render, path);
_appStaticPage2.default.appStatic(app, serve, dirName, path);
app.listen(3000);