const shell = require('shelljs');
const gitController = {
    index(){
        return async (ctx, next) => {
            ctx.body = await ctx.render('index');
          }
    },
    addBranch(){
        return async (ctx, next) => {
            console.log(ctx.request.query);
            if (!shell.which('git')) {
              shell.echo('Sorry, this script requires git');
              shell.exit(1);
            }
            else{
                shell.exec("git branch "+ctx.request.query.branchName);
                //shell.echo('hello world');
            }
            ctx.body = ctx.request.query.branchName;
          }
    }
}
export default gitController;