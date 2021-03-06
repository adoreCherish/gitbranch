const koa = require('koa');
const app = new koa();
const router = require('koa-simple-router');
const serve = require('koa-static');
const render = require('koa-swig');
const co = require('co');
const path = require('path');
const dirName = __dirname;
import babel_co from 'babel-core';
import babel_polyfill from 'babel-polyfill';
import initController from './controller/initController';
import appStaticPage from './config/appStaticPage';
initController.init(app,router);
appStaticPage.appRender(app,co,dirName,render,path);
appStaticPage.appStatic(app,serve,dirName,path);
app.listen(3000);