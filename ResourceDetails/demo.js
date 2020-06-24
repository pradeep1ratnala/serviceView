/// <reference path="scripts/angular.js" />

// JavaScript source code

var myApp = angular.module("myApp", ['ngRoute', 'ResourceService']);

myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when("/Home", {
                templateUrl: 'Views/home.html',
                controller: 'homeController'
            })
            .when("/View", {
                templateUrl: 'Views/view.html',
                controller: 'viewController'
            })
            .when("/Add", {
                templateUrl: 'Views/add.html',
                controller: 'addController'
            })
            .when("/Edit", {
                templateUrl: 'Views/edit.html',
                controller: 'editController'
            })
            .otherwise({
                redirectTo: "/Home"
            });
    }]);

myApp.controller("homeController", function ($scope) {
    $scope.message = "Main Page";
});

myApp.controller("viewController", function ($scope, ServiceApi) {
    getResources();
    function getResources() {
        ServiceApi.getResources().then(function (response) {
            $scope.resources = response.data;
            console.log("resources", $scope.resources);
        }, function () {
            alert('Failed');
        });
    }
});

myApp.controller("addController", function ($scope) {
    $scope.message = "Add page";
});

myApp.controller("editController", function ($scope) {
    $scope.message = "Edit page";
});