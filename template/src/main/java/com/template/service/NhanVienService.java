package com.template.service;

import com.template.entity.NhanVien;

import java.util.List;
import java.util.UUID;

public interface NhanVienService {
    List<NhanVien> getAllNhanVien();
    NhanVien addNhanVien(NhanVien nv);
    NhanVien updateNhanVien(UUID id, NhanVien nv);
    void deleteNhanVien(UUID id);

    NhanVien getOneNhanVien(UUID id);
}
