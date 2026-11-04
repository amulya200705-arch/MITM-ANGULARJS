var app = angular.module('myApp', []);


app.controller('CollegeController', function($scope) {
    $scope.collegeName = "abc college";
});

app.controller(
    "StudentController", function($scope) {
        $scope.name = "john";
        $scope.department = "Computer Science";
        $scope.semester = 3;

        $scope.students =[
            "AMULYA E",
            "AKSHAY U SHET",
            "AMRUTHA H S",
            "AYUSH KUMAR K S",
        ];
    }
);
