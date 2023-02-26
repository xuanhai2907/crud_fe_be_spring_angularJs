package com.example.crud_spring_angularjs.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sinh_vien")
public class SinhVien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "maSV")
    private String maSV;

    @Column(name = "ten")
    private String ten;

    @Column(name = "email")
    private String email;

    @Column(name = "gioi_tinh")
    private boolean gioiTinh;

    @Column(name = "chuyen_nganh_id")
    private Long chuyenNganhId;

}
