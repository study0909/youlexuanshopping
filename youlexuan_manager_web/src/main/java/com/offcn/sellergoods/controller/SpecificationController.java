package com.offcn.sellergoods.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.offcn.entity.PageResult;
import com.offcn.entity.Result;
import com.offcn.group.Specification;
import com.offcn.pojo.TbSpecification;
import com.offcn.sellergoods.service.SpecificationService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/specification")
public class SpecificationController {

    @Reference
    private SpecificationService specificationService;

    @RequestMapping("/seach")
    public PageResult seach(@RequestBody TbSpecification specification, int page, int rows){
        return specificationService.seach(specification,page,rows);
    }

    /**
     * 增加
     */
    @RequestMapping("/add")
    public Result add(@RequestBody Specification specification){
        try {
            specificationService.add(specification);
            return new Result(true,"添加成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"添加失败");
        }
    }
}
