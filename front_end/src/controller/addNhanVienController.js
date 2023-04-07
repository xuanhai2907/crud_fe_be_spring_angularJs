window.addNhanVienCtrl = function ($scope, $http, $location, $routeParams) {
  var api = "http://localhost:8080/nhan-vien";
  $scope.gioiTinh = "Nam";
  $scope.diaChi = "Hai Duong";
  // thêm
  $scope.add = function (event) {
    $http
      .post(api + "/add", {
        ma: $scope.ma,
        ten: $scope.ten,
        gioiTinh: $scope.gioiTinh,
        diaChi: $scope.diaChi,
      })
      .then(function (response) {
        alert("Thêm thành công");
        $location.path("/hien-thi");
      });
  };
};
