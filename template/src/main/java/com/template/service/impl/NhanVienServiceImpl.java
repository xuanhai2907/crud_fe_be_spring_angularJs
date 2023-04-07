package com.template.service.impl;

import com.template.entity.NhanVien;
import com.template.repository.NhanVienRepository;
import com.template.service.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class NhanVienServiceImpl implements NhanVienService {

    @Autowired
    private NhanVienRepository nhanVienRepository;

    @Override
    public List<NhanVien> getAllNhanVien() {
        return nhanVienRepository.getAllNhanVien();
    }

    @Override
    public NhanVien addNhanVien(NhanVien nv) {
        NhanVien saveNhanVien = new NhanVien().builder().id(UUID.randomUUID()).ma(nv.getMa()).ten(nv.getTen())
                .gioiTinh(nv.getGioiTinh()).diaChi(nv.getDiaChi()).build();
        nhanVienRepository.save(saveNhanVien);
        return saveNhanVien;
    }

    @Override
    public NhanVien updateNhanVien(UUID id, NhanVien nv) {
        Optional<NhanVien> nhanVienOptional = nhanVienRepository.findById(id);
        if(nhanVienOptional.isPresent()){
            nhanVienOptional.get().setMa(nv.getMa());
            nhanVienOptional.get().setTen(nv.getTen());
            nhanVienOptional.get().setGioiTinh(nv.getGioiTinh());
            nhanVienOptional.get().setDiaChi(nv.getDiaChi());
            nhanVienRepository.save(nhanVienOptional.get());
        }
        return nhanVienOptional.get();
    }

    @Override
    public void deleteNhanVien(UUID id) {
        Optional<NhanVien> nhanVienOptional = nhanVienRepository.findById(id);
        nhanVienRepository.delete(nhanVienOptional.get());
    }

    @Override
    public NhanVien getOneNhanVien(UUID id) {
        Optional<NhanVien> nhanVienOptional = nhanVienRepository.findById(id);
        return nhanVienOptional.get();
    }
}
