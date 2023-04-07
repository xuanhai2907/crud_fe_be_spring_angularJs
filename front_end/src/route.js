var app = angular.module("myModule", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/nhan-vien/hien-thi", {
      templateUrl: "pages/hien-thi.html",
      controller: hienThiNhanVienCtrl,
    })
    .when("/nhan-vien/view-add", {
      templateUrl: "pages/view-add.html",
      controller: addNhanVienCtrl,
    })
    .when("/nhan-vien/detail/:id", {
      templateUrl: "pages/detail.html",
      controller: detailNhanVienCtrl,
    })
    .otherwise({
      redirectTo: "/nhan-vien/hien-thi",
    });
});

