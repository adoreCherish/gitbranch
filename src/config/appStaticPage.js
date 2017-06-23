'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var appStaticPage = {
    appRender: function appRender(app, co, dirName, render, path) {
        console.log('======' + dirName);
        app.context.render = co.wrap(render({
            root: path.join(dirName, 'views'),
            autoescape: true,
            cache: 'memory',
            ext: 'html',
            writeBody: false
        }));
    },
    appStatic: function appStatic(app, serve, dirName, path) {
        app.use(serve(path.join(dirName)));
    }
};
exports.default = appStaticPage;