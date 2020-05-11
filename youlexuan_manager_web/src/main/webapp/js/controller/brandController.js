//定义控制器
app.controller('brandController',function ($scope,$controller, brandService) {
    //继承baseController
    $controller('baseController',{$scope:$scope});

    //读取列表数据
    $scope.findAll=function () {
        brandService.findAll().success(function (response) {
            $scope.list=response;
        })
    };
    /*//读取分页数据
    $scope.findPage=function (page,rows) {
        brandService.findPage(page,rows).success(function (response) {
            $scope.list=response.rows; //列表变量赋值
            $scope.pageinationConf.totalItems=response.total; //更新总记录数
        })
    };*/
    //增加品牌
    $scope.save=function () {
        if ($scope.entity.id != null) { //如果有id
            brandService.update($scope.entity).success(function (response) {
                if (response.success) {
                    $scope.reloadList();
                }else{
                    alert(response.message);
                }
            })
        }else{
            brandService.add($scope.entity).success(function (response) {
                if (response.success) {
                    $scope.reloadList();//重新加载
                }else{
                    alert(response.message);
                }
            });
        }
    };
    //回显
    $scope.findOne=function (id) {
        brandService.findOne(id).success(function (response) {
            $scope.entity=response;
        })
    };
    //删除
    $scope.selectIds=[]; //存选中的id
    //复选框更新
    $scope.updateSelection=function ($event, id) {
        if($event.target.checked){ //如果是被选中，加入到数组中
            $scope.selectIds.push(id);
        }else{
            var idx=$scope.selectIds.indexOf(id);
            $scope.selectIds.splice(idx,1); //删除
        }
    };
     //开始批量删除
    $scope.dele=function () {
        brandService.delete($scope.selectIds).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            }else{
                alert(response.message);
            }
        })
    };

    $scope.searchEntity={};//定义搜索对象
    //条件查询
    $scope.seach=function (page, rows) {
        brandService.seach(page,rows,$scope.searchEntity).success(function (response) {
            $scope.pageinationConf.totalItems=response.total; //总记录数
            $scope.list=response.rows; //给列表变量赋值
        })
    }
});