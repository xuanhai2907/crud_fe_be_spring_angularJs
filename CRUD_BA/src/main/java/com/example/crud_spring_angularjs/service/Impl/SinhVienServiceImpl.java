package com.example.crud_spring_angularjs.service.Impl;

import com.example.crud_spring_angularjs.entity.SinhVien;
import com.example.crud_spring_angularjs.repository.SinhVienRepository;
import com.example.crud_spring_angularjs.service.SinhVienService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SinhVienServiceImpl implements SinhVienService {

    @Autowired
    private SinhVienRepository sinhVienRepository;

    @Override
    public List<SinhVien> getAllSinhVien() {
        return sinhVienRepository.findAll();
    }

    @Override
    public void addSinhVien(SinhVien sv) {

    }

    @Transactional
    @Modifying
    @Override
    public void suaSinhVien(Long id, SinhVien sv) {
        sinhVienRepository
    }

    @Override
    public void deleteSinhVien(Long id) {
        sinhVienRepository.deleteById(id);
    }


}
