'use strict';

var test = {
    init: function init() {
        var self = this;
        self.bind();
        self.render();
        self.submitAction();
    },
    bind: function bind() {
        var self = this;
        self.branchName = $('#branchName');
        self.submit = $('.submit');
        self.highcharts = $('#highchartsContainer');
    },
    render: function render() {
        var self = this;
        self.submit.click($.proxy(self.submitAction, self));
    },
    submitAction: function submitAction() {
        var self = this;
        console.log('self.branchName.val:' + self.branchName.val());
        $.ajax({
            url: '/addGitBranch',
            type: 'GET',
            data: {
                branchName: self.branchName.val()
            },
            beforeSend: function beforeSend() {
                $('#loading').show();
            }
        }).then(function (data) {
            $('#loading').hide();
            console.log('success:' + JSON.stringify(data));
            //self.branchNamem.val('');
            self.drawBranchAction(data);
        }, function (data) {
            console.log('err:' + data);
        });
    },
    drawBranchAction: function drawBranchAction(data) {
        var self = this;
        $.ajax({
            url: '/showGitBranch',
            type: 'GET',
            beforeSend: function beforeSend() {
                $('#loading').show();
            }
        }).then(function (data) {
            $('#loading').hide();
            console.log('需要添加的branch名:' + data);
            self.branchName.val('');
            var branchers = data.split('Remote branches:\n')[1];
            branchers = branchers.split('Local branch')[0];
            console.log('branchers:' + branchers);
            var branch_list = [];
            var p = [];
            branch_list = branchers.split('tracked');
            console.log('branch_list:' + branch_list);
            for (var i = 0; i < branch_list.length; i++) {

                p.push(branch_list[i].trim());
            }
            p.pop();
            console.log(p);
            var datas = [];
            p.map(function (value) {
                datas.push([value, 45.0]);
            });
            var series = [{
                type: 'pie',
                name: 'gitBranch项目分支使用情况',
                data: datas
            }];
            var options = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'gitBranch项目分支使用情况'
                },
                tooltip: {
                    headerFormat: '{series.name}<br>',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: Highcharts.theme && Highcharts.theme.contrastTextColor || 'black'
                            }
                        }
                    }
                },
                series: series
            };
            $('#highchartsContainer').highcharts(options);
        }, function (data) {
            console.log('err:' + data);
        });
    }
};
$(function () {
    test.init();
});