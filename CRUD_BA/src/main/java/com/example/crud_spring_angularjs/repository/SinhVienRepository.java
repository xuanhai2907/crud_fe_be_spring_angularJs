package com.example.crud_spring_angularjs.repository;

import com.example.crud_spring_angularjs.entity.SinhVien;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SinhVienRepository extends JpaRepository<SinhVien, Long> {

    @Query(value = "SELECT sv.id, sv.ten, sv.maSV, sv.chuyen_nganh_id, sv.gioi_tinh, sv.email " +
                   "FROM sinh_vien sv", nativeQuery = true)
    List<SinhVien> findAll();

    @Transactional
    @Modifying
    @Query("UPDATE SinhVien  sv SET sv.maSV = ?1, sv.ten = ?2, sv.email = ?3, sv.gioiTinh = ?4, sv.chuyenNganhId = ?5 WHERE sv.id = ?6")
    void updateSinhVien(String chuyenNganh, Boolean gioiTinh, String ten, Integer tuoi, Long id);

}
