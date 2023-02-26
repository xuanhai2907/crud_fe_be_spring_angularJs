package com.example.crud_spring_angularjs.controller;

import com.example.crud_spring_angularjs.entity.SinhVien;
import com.example.crud_spring_angularjs.service.SinhVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sinh-vien")
public class SinhVienController {

    @Autowired
    private SinhVienService sinhVienService;

    @GetMapping("")
    public List<SinhVien> getAllSinhVien(){
        return sinhVienService.getAllSinhVien();
    }



}
