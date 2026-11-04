/*
  Full Name: [Your Full Name]
  Department: [Your Department]
*/

// Initialize AngularJS Module
var app = angular.module('studentApp', []);

// Parent Controller: CollegeController
app.controller('CollegeController', ['$scope', function($scope) {
    $scope.collegeName = "Apex Institute of Technology & Science";
}]);

// Child Controller: StudentController
app.controller('StudentController', ['$scope', function($scope) {
    // Initial array containing at least three sample students
    $scope.students = [
        { name: 'Aarav Sharma', department: 'Computer Science', semester: '4th' },
        { name: 'Priya Patel', department: 'Information Technology', semester: '2nd' },
        { name: 'Rahul Verma', department: 'Electronics', semester: '6th' }
    ];

    // Initial visibility state for show/hide details (hidden by default)
    $scope.showDetails = false;

    // Function to add a student to the list and clear the input fields
    $scope.addStudent = function() {
        if ($scope.inputName && $scope.inputName.trim() !== "") {
            $scope.students.push({
                name: $scope.inputName,
                department: $scope.inputDepartment || 'General',
                semester: $scope.inputSemester || '1st'
            });

            // Clear input fields after adding
            $scope.inputName = "";
            $scope.inputDepartment = "";
            $scope.inputSemester = "";
        }
    };

    // Function to toggle show/hide details view
    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };
}]);