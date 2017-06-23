const test = {
    init(){
        var self = this;
        self.bind();
        self.render();
    },
    bind(){
        var self = this;
        self.branchName = $('#branchName');
        self.submit = $('.submit');
    },
    render(){
        var self = this;
        self.submit.click($.proxy(self.submitAction,self));
    },
    submitAction(){
        var self = this;
        console.log('self.branchName.val:'+self.branchName.val());
        $.ajax({
            url:'/addGitBranch',
            type:'GET',
            data:{
                branchName:self.branchName.val()
            }
        }).then(function(data){
            console.log('success:'+JSON.stringify(data));
        },function(data){
            console.log('err:'+data);
        })
    }
}
$(function() {
    test.init();
})
