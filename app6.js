
var app = angular.module("myApp", []);

app.controller("StudentController", function($scope) {

    $scope.name = "John";
    $scope.age = 19;
    $scope.department = "Computer Science";
    $scope.semester = 3;

    $scope.students = [
        "AMULYA E",
        "AKSHAY U SHET",
        "AMRUTHA H S",
        "AYUSH KUMAR K S"
    ];
     $scope.addStudent = function() {
        $scope.students.push($scope.name);
        if($scope.name.trim() !==""){
            $scope.students.push($scope.name);
        $scope.name = "";
        }
        else{
            alert("please enter a student name");
        }
     };
}

);

