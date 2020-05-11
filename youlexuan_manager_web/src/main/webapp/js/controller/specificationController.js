app.controller('specificationController',function ($scope, $controller, specificationService) {

    $controller('baseController',{$scope:$scope});

   $scope.seachEntity={}; //定义搜索对象
   $scope.seach=function (page, rows) {
       specificationService.seach(page,rows,$scope.seachEntity).success(function (response) {
           $scope.pageinationConf.totalItems=response.total; //总记录数
           $scope.list=response.rows;
       })
   };

   //定义一个变量存放规格选项行
    $scope.entity={specificationOptionList:[]};
    //新增规格选项行
    $scope.addTableRow=function () {
        $scope.entity.specificationOptionList.push({});
    };
    //删除规格选项行
    $scope.deleteTableRow=function (index) {
        $scope.entity.specificationOptionList.splice(index,1);//删除
    };

    //增加
    $scope.save=function () {
        specificationService.save($scope.entity).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            }else
                alert(response.message);
        })
    }
});