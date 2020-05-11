app.service('specificationService',function ($http) {
    //列表 搜索功能
    this.seach=function (page, rows, SeachEntity) {
        return $http.post('../specification/seach.do?page='+page+'&rows='+rows,SeachEntity);
    }
    //增加
    this.save=function (entity) {
        return $http.post('../specification/add.do',entity);
    }
});