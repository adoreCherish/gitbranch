const appStaticPage = {
    appRender(app,co,dirName,render,path) {
        console.log('======'+dirName);
        app.context.render = co.wrap(render({
            root: path.join(dirName, 'views'),
            autoescape: true,
            cache: 'memory',
            ext: 'html',
            writeBody: false
        }));
    },
    appStatic(app,serve,dirName,path){
        app.use(serve(path.join(dirName)));
    }
}
export default appStaticPage;