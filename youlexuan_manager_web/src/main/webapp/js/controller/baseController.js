//基本控制层
app.controller('baseController',function ($scope) {

    //重新加载列表数据
    $scope.reloadList=function(){
        //切换页码
        $scope.seach($scope.pageinationConf.currentPage,$scope.pageinationConf.itemsPerPage);
    };

    //分页控件配置
    $scope.pageinationConf={
        currentPage: 1, //起始页
        totalItems: 10, //总记录数
        itemsPerPage: 10, //每页显示记录数
        perPageOptions: [5,10,15,20,25,30],
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    };

});