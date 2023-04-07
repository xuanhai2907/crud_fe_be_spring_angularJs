window.hienThiNhanVienCtrl = function ($scope, $http, $location, $routeParams) {
  var api = "http://localhost:8080/nhan-vien";
  $scope.listNhanVien = [];
  //   hiển thị danh sách nhân viên từ database ra màn hình
  $http.get(api + "/hien-thi").then(function (response) {
    $scope.listNhanVien = response.data.data;
    console.log($scope.listNhanVien);
  });
  $scope.delete = function (event, id) {
    $http.delete(api + "/delete/" + id).then(function (response) {
      $location.path("/hien-thi");
      alert("Xóa thành công");
    });
  };
};
