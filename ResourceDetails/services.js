/// <reference path="scripts/angular.js" />

var ResourceService = angular.module('ResourceService', []);

ResourceService.factory('ServiceApi', function ($http) {

    var urlBase = "http://webapiservices.gearhostpreview.com/api";
    var ServiceApi = {};
    ServiceApi.getResources = function () {
        return $http.get(urlBase + '/Resources');
    };
    return ServiceApi;
});

