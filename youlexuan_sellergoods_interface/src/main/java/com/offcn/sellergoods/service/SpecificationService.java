package com.offcn.sellergoods.service;

import com.offcn.entity.PageResult;
import com.offcn.group.Specification;
import com.offcn.pojo.TbSpecification;

public interface SpecificationService {

    public PageResult seach(TbSpecification specification,int pageNum,int pageSize);

    /**
     * 增加
     */
    public void add(Specification specification);
}
