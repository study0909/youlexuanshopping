package com.offcn.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.offcn.entity.PageResult;
import com.offcn.group.Specification;
import com.offcn.mapper.TbSpecificationMapper;
import com.offcn.mapper.TbSpecificationOptionMapper;
import com.offcn.pojo.TbSpecification;
import com.offcn.pojo.TbSpecificationExample;
import com.offcn.pojo.TbSpecificationOption;
import com.offcn.sellergoods.service.SpecificationService;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class SpecificationServiceImpl implements SpecificationService {

    @Autowired
    private TbSpecificationMapper specificationMapper;
    @Autowired
    private TbSpecificationOptionMapper specificationOptionMapper;

    @Override
    public PageResult seach(TbSpecification specification, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum,pageSize);
        TbSpecificationExample example=new TbSpecificationExample();
        TbSpecificationExample.Criteria cc = example.createCriteria();
        if (specification!=null){
            if (specification.getSpecName()!=null && specification.getSpecName().length()>0){
                cc.andSpecNameLike("%"+specification.getSpecName()+"%");
            }
        }
        Page<TbSpecification> page=(Page<TbSpecification>) specificationMapper.selectByExample(example);
        return new PageResult(page.getTotal(),page.getResult());
    }

    @Override
    public void add(Specification specification) {
        specificationMapper.insert(specification.getSpecification()); //插入规格
        //循环插入规格选项
        for (TbSpecificationOption specificationOption : specification.getSpecificationOptionList()) {
            specificationOption.setSpecId(specification.getSpecification().getId());//设置规格id
            specificationOptionMapper.insert(specificationOption);
        }
    }
}
