import gitController from './gitController';
const initController = {
    init(app,router){
        app.use(router(_ => {
          _.get('/index', gitController.index())
          _.get('/addGitBranch',gitController.addBranch())
        }))
    }
    
}
export default initController;