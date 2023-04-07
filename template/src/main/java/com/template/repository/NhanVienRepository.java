package com.template.repository;

import com.template.entity.NhanVien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface NhanVienRepository extends JpaRepository<NhanVien, UUID> {
    @Query(value = """
                SELECT a.id, a.ma, a.ten, a.gioitinh, a.diachi FROM nhanvien a
            """, nativeQuery = true)
    List<NhanVien> getAllNhanVien();
}
