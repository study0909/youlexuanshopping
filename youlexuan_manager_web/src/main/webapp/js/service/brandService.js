//定义service层
app.service('brandService',function ($http) {
    //读取列表数据
    this.findAll=function () {
        return $http.get('../brand/findAll.do');
    };
   /* //获取分页数据
    this.findPage=function (page,rows) {
        return $http.get('../brand/findPage.do?page='+page+'&rows='+rows);
    };*/
    //增加品牌
    this.add=function (entity) {
        return $http.post('../brand/add.do',entity);
    };
    //回显
    this.findOne=function (id) {
        return $http.get('../brand/findOne.do?id='+id);
    };
    //修改
    this.update=function (entity) {
        return $http.post('../brand/update.do',entity);
    };
    //删除
    this.delete=function (ids) {
        return $http.get('../brand/delete.do?ids='+ids);
    };
    //获取列表数据 搜索功能
    this.seach=function (page, rows, searchEntity) {
        return $http.post('../brand/findPage.do?page='+page+'&rows='+rows,searchEntity);
    }
});