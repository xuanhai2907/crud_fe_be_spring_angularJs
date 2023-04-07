window.detailNhanVienCtrl = function ($scope, $http, $location, $routeParams) {
  var api = "http://localhost:8080/nhan-vien";

  // detail
  $http.get(api + "/detail/" + $routeParams.id).then(function (response) {
    $scope.detailNhanVien = response.data.data;
  });
  // update
  $scope.update = function (id) {
    $scope.updateNhanVien = {
      ma: $scope.detailNhanVien.ma,
      ten: $scope.detailNhanVien.ten,
      gioiTinh: $scope.detailNhanVien.gioiTinh,
      diaChi: $scope.detailNhanVien.diaChi,
    };
    $http
      .put(api + "/update/" + id, $scope.updateNhanVien)
      .then(function (response) {
        alert("Update thành công");
        $location.path("/hien-thi");
      });
  };
};
