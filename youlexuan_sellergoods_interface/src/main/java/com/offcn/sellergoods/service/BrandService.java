package com.offcn.sellergoods.service;

import com.offcn.entity.PageResult;
import com.offcn.pojo.TbBrand;

import java.util.List;

/**
 * 品牌服务层接口
 */
public interface BrandService {

    /**
     * 返回全部列表
     */
    public List<TbBrand> findAll();

    /**
     * 返回分页列表
     */
    public PageResult findPage(TbBrand brand,int pageNum,int pageSize);

    /**
     * 添加品牌
     */
    public void add(TbBrand brand);

    /**
     * 根据id获取信息
     */
    public TbBrand findOne(Long id);
    /**
     * 修改品牌
     */
    public void update(TbBrand brand);

    /**
     * 删除
     */
    public void delete(Long[] ids);
}
