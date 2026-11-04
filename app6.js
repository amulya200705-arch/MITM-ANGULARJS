
var app = angular.module('myApp', []);

// Parent Controller
app.controller('CollegeController', function($scope) {

    $scope.collegeName = "ABC College";

});

// Child Controller
app.controller('StudentController', function($scope) {

    // Student Details
    $scope.name = "John";
    $scope.age = 19;
    $scope.department = "Computer Science";
    $scope.semester = 3;

    // Four Student Names
    $scope.students = [
        "AMULYA E",
        "AKSHAY U SHET",
        "AMRUTHA H S",
        "AYUSH KUMAR K S"
    ];

});

