var app = angular.module('myApp', []);



app.controller('collegeController', function($scope) {
    $scope.collegename = "ABC college";
});



app.controller(
    "studentcontroller",function($scope) {
        $scope.name = "John";
        $scope.department = "Computer Science";
        
    }
)
