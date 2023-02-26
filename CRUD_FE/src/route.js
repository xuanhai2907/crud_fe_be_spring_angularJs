var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      templateUrl: "./pages/home.html",
    })
    .when("/sinh-vien", {
      templateUrl: "./pages/sinh-vien.html",
      controller: "crudCtrl",
    })
    .when("/lop", {
      templateUrl: "./pages/lop.html",
      controller: "crudCtrl",
    })
    .when("/about", {
      templateUrl: "./pages/about.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});
app.controller("crudCtrl", function ($scope, $http) {
  var apiURL = "http://localhost:8081";
  var sinhVienAPI = apiURL + "/sinh-vien";
  var chuyenNganhAPI = apiURL + "/chuyen-nganh";
  var lopAPI = apiURL + "/lop";

  $scope.sinhViens = [];
  $scope.gioiTinh = true;
  $scope.errors = [];

  $scope.tenChuyenNganh = "1";
  $scope.tenLop = "1";

  // Lấy dữ liệu ra form
  $http.get(sinhVienAPI).then(function (response) {
    $scope.sinhViens = response.data;
  });

  $http.get(chuyenNganhAPI).then(function (response) {
    $scope.chuyenNganhs = response.data;
  });

  $http.get(lopAPI).then(function (response) {
    $scope.lops = response.data;
  });
  // Detail sinh viên ra form
  $scope.detailSinhVien = function (event, id) {
    event.preventDefault();
    var data = $scope.sinhViens.filter((item) => item.id === id)[0];

    $scope.maSV = data.maSV;
    $scope.tenSV = data.tenSV;
    $scope.gioiTinh = data.gioiTinh;
    $scope.email = data.email;
    $scope.tenChuyenNganh = data.idChuyenNganh;
    $scope.tenLop = data.idLop;
    $scope.idChuyenNganh = data.idChuyenNganh;
    $scope.idLop = data.idLop;
    $scope.id = data.id;
  };
  $scope.errorMessage = null;
  // Thêm sinh viên
  $scope.themSinhVien = function (event) {
    event.preventDefault();
    var data = {
      maSV: $scope.maSV,
      tenSV: $scope.tenSV,
      gioiTinh: $scope.gioiTinh,
      email: $scope.email,
      idChuyenNganh: $scope.tenChuyenNganh,
      idLop: $scope.tenLop,
    };
    $http.post(sinhVienAPI, data).then(
      function (response) {
        alert("Thêm ok");
      },
      function (errors) {
        if (errors.status === 409) {
          $scope.errorMessage = "Trùng mã, vui lòng nhập mã khác";
        }
        $scope.errors = errors.data;
        console.log($scope.errors);
      }
    );
  };
  // Sửa sinh viên
  $scope.suaSinhVien = function (event, id) {
    event.preventDefault();
    var data = {
      maSV: $scope.maSV,
      tenSV: $scope.tenSV,
      gioiTinh: $scope.gioiTinh,
      email: $scope.email,
      idChuyenNganh: $scope.tenChuyenNganh,
      idLop: $scope.tenLop,
    };
    console.log(data);
    $http.put(sinhVienAPI + "/" + id, data).then(
      function (response) {
        alert("Sửa ok");
      },
      function (errors) {
        $scope.errors = errors.data;
      }
    );
  };
  // Xóa sinh viên
  $scope.deleteSinhVien = function (event, id) {
    event.preventDefault();
    $http.delete(sinhVienAPI + "/" + id).then(function (response) {
      alert("Xóa thành công");
    });
  };

  function loadData() {
    $http.get(lopAPI).then(function (response) {
      $scope.lops = response.data;
    });
    $scope.maLop = "";
    $scope.tenLop = "";
    $scope.soLuongSv = "";
    $scope.errors = "";
  }

  // Detail lớp học ra form
  $scope.detailLop = function (event, id) {
    event.preventDefault();
    var data = $scope.lops.filter((item) => item.id == id)[0];
    $scope.maLop = data.maLop;
    $scope.tenLop = data.tenLop;
    $scope.soLuongSv = data.soLuongSv;
    $scope.id = data.id;
  };
  // Thêm lớp học

  $scope.themLopHoc = function (event) {
    $http
      .post(lopAPI, {
        maLop: $scope.maLop,
        tenLop: $scope.tenLop,
        soLuongSv: $scope.soLuongSv,
      })
      .then(
        function (response) {
          loadData();
          alert("Thêm thành công");
        },
        function (errors) {
          $scope.errors = errors.data;
          // console.log($scope.errors);
        }
      );
  };

  // Sửa lớp học
  $scope.suaLopHoc = function (event, id) {
    event.preventDefault();
    $http
      .put(lopAPI + "/" + id, {
        maLop: $scope.maLop,
        tenLop: $scope.tenLop,
        soLuongSv: $scope.soLuongSv,
      })
      .then(
        function (response) {
          loadData();
          alert("Sửa thành công");
        },
        function (errors) {
          $scope.errors = errors.data;
          console.log($scope.errors);
        }
      );
  };

  // Xóa lớp học
  $scope.xoaLopHoc = function (event, id) {
    event.preventDefault();
    $http.delete(lopAPI + "/" + id).then(function (response) {
      loadData();
      alert("Xóa thành công");
    });
  };
});
