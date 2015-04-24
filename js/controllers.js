/**
 * Created by schekanov on 22.01.15.
 */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('js/json.json').success(function(data) {
            $scope.phones = data;
        });
        $scope.for_table = [{"name_td":"age"},
            {"name_td":"id"},
            {"name_td":"imageUrl"},
            {"name_td":"name"},
            {"name_td":"snippet"}];
        $scope.orderProp = 'name';




}]);