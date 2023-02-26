package com.example.crud_spring_angularjs.service;

import com.example.crud_spring_angularjs.entity.SinhVien;

import java.util.List;

public interface SinhVienService {
    public List<SinhVien> getAllSinhVien();
    public void addSinhVien(SinhVien sv);
    public void suaSinhVien(Long id, SinhVien sv);
    public void deleteSinhVien(Long id);
}
