var app = angular.module('taskApp', []);

app.controller('PlannerController', function($scope, $interval) {

    // Navigation state
    $scope.currentTab = 'tasks';
    $scope.switchTab = function(tabName) {
        $scope.currentTab = tabName;
    };

    // Load data from LocalStorage
    var savedData = JSON.parse(localStorage.getItem('bloom_ultimate_data')) || {};
    
    $scope.tasks = savedData.tasks || [
        { id: 1, title: 'Complete AngularJS Project Documentation', description: 'Write architecture breakdown & test REST endpoints', priority: 'High', category: 'Academics', recurrence: 'None', completed: false, dueDate: '2026-11-12' },
        { id: 2, title: 'Grocery shopping for the week', description: 'Milk, vegetables, fruits, and bakery items', priority: 'Medium', category: 'Shopping', recurrence: 'Weekly', completed: false, dueDate: '' },
        { id: 3, title: '30-minute cardio workout', description: 'Evening run and stretching', priority: 'Low', category: 'Fitness', recurrence: 'Daily', completed: true, dueDate: '' }
    ];

    $scope.habits = savedData.habits || [
        { id: 1, name: 'Drink 2L water daily' },
        { id: 2, name: 'Code for 1 hour' }
    ];

    $scope.quickNotes = savedData.quickNotes || 'Remember to review pending tasks every evening!';
    $scope.taskHistory = savedData.taskHistory || ['Initialized Bloom Ultimate Planner'];

    // Smart Suggestions Rotation
    $scope.smartSuggestion = "Break large tasks into smaller subtasks to maintain momentum!";

    // Form Initializer
    $scope.isEditing = false;
    $scope.editId = null;
    $scope.taskForm = {
        title: '',
        description: '',
        priority: 'Medium',
        category: 'Personal',
        recurrence: 'None',
        dueDate: null
    };

    // Filter & Search State
    $scope.selectedCategory = 'All';
    $scope.searchQuery = '';

    $scope.setCategory = function(cat) {
        $scope.selectedCategory = cat;
    };

    $scope.categoryFilter = function(task) {
        if ($scope.selectedCategory === 'All') return true;
        return task.category === $scope.selectedCategory;
    };

    // Save Task (Create or Update)
    $scope.saveTask = function() {
        if (!$scope.taskForm.title) return;

        if ($scope.isEditing) {
            var task = $scope.tasks.find(t => t.id === $scope.editId);
            if (task) {
                task.title = $scope.taskForm.title;
                task.description = $scope.taskForm.description;
                task.priority = $scope.taskForm.priority;
                task.category = $scope.taskForm.category;
                task.recurrence = $scope.taskForm.recurrence;
                task.dueDate = $scope.taskForm.dueDate;
                $scope.taskHistory.unshift('Updated task: ' + task.title);
            }
            $scope.isEditing = false;
            $scope.editId = null;
        } else {
            var newTask = {
                id: Date.now(),
                title: $scope.taskForm.title,
                description: $scope.taskForm.description,
                priority: $scope.taskForm.priority,
                category: $scope.taskForm.category,
                recurrence: $scope.taskForm.recurrence,
                completed: false,
                dueDate: $scope.taskForm.dueDate || ''
            };
            $scope.tasks.push(newTask);
            $scope.taskHistory.unshift('Created task: ' + newTask.title);
        }

        $scope.taskForm = { title: '', description: '', priority: 'Medium', category: 'Personal', recurrence: 'None', dueDate: null };
        $scope.saveData();
    };

    // Edit Task Trigger
    $scope.editTask = function(task) {
        $scope.isEditing = true;
        $scope.editId = task.id;
        $scope.taskForm = {
            title: task.title,
            description: task.description,
            priority: task.priority,
            category: task.category,
            recurrence: task.recurrence,
            dueDate: task.dueDate ? new Date(task.dueDate) : null
        };
        $scope.switchTab('tasks');
    };

    // Delete Confirmation Modal Logic
    $scope.showDeleteModal = false;
    $scope.pendingDeleteId = null;

    $scope.confirmDelete = function(id) {
        $scope.pendingDeleteId = id;
        $scope.showDeleteModal = true;
    };

    $scope.executeDelete = function() {
        $scope.tasks = $scope.tasks.filter(t => t.id !== $scope.pendingDeleteId);
        $scope.taskHistory.unshift('Deleted task');
        $scope.showDeleteModal = false;
        $scope.pendingDeleteId = null;
        $scope.saveData();
    };

    $scope.cancelDelete = function() {
        $scope.showDeleteModal = false;
        $scope.pendingDeleteId = null;
    };

    // Batch Actions
    $scope.markAllDone = function() {
        angular.forEach($scope.tasks, function(t) { t.completed = true; });
        $scope.taskHistory.unshift('Marked all tasks as completed');
        $scope.saveData();
    };

    $scope.clearCompleted = function() {
        $scope.tasks = $scope.tasks.filter(t => !t.completed);
        $scope.taskHistory.unshift('Cleared completed tasks');
        $scope.saveData();
    };

    // Overdue Check
    $scope.isOverdue = function(dateStr) {
        if (!dateStr) return false;
        var today = new Date();
        var due = new Date(dateStr);
        return due < today && !dateStr.completed;
    };

    // Habit Handlers
    $scope.addHabit = function() {
        if (!$scope.newHabitName) return;
        $scope.habits.push({ id: Date.now(), name: $scope.newHabitName });
        $scope.newHabitName = '';
        $scope.saveData();
    };

    $scope.deleteHabit = function(id) {
        $scope.habits = $scope.habits.filter(h => h.id !== id);
        $scope.saveData();
    };

    // Pomodoro Timer Logic
    $scope.timerSeconds = 25 * 60;
    $scope.timerRunning = false;
    var timerPromise = null;

    $scope.formatTime = function(sec) {
        var m = Math.floor(sec / 60);
        var s = sec % 60;
        return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    };

    $scope.startTimer = function() {
        if (!$scope.timerRunning) {
            $scope.timerRunning = true;
            timerPromise = $interval(function() {
                if ($scope.timerSeconds > 0) {
                    $scope.timerSeconds--;
                } else {
                    $scope.pauseTimer();
                    alert('Focus session completed! Great job 🎉');
                }
            }, 1000);
        }
    };

    $scope.pauseTimer = function() {
        $scope.timerRunning = false;
        if (timerPromise) $interval.cancel(timerPromise);
    };

    $scope.resetTimer = function() {
        $scope.pauseTimer();
        $scope.timerSeconds = 25 * 60;
    };

    // Calendar Days Generator (Nov 2026)
    $scope.calendarDays = [];
    for(var i = 1; i <= 30; i++) { $scope.calendarDays.push(i); }

    // Metrics
    $scope.getPendingCount = function() {
        return $scope.tasks.filter(t => !t.completed).length;
    };

    $scope.getCompletedCount = function() {
        return $scope.tasks.filter(t => t.completed).length;
    };

    $scope.getProgressPercent = function() {
        if ($scope.tasks.length === 0) return 0;
        return Math.round(($scope.getCompletedCount() / $scope.tasks.length) * 100);
    };

    // Export to CSV
    $scope.exportToCSV = function() {
        var csvContent = "data:text/csv;charset=utf-8,Title,Category,Priority,Status,Due Date\n";
        $scope.tasks.forEach(function(t) {
            csvContent += `"${t.title}","${t.category}","${t.priority}","${t.completed ? 'Completed' : 'Pending'}","${t.dueDate}"\n`;
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "bloom_tasks_report.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // JSON Backup
    $scope.backupData = function() {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localStorage));
        var downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "bloom_backup.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    };

    // Save state to LocalStorage
    $scope.saveData = function() {
        var dataToSave = {
            tasks: $scope.tasks,
            habits: $scope.habits,
            quickNotes: $scope.quickNotes,
            taskHistory: $scope.taskHistory
        };
        localStorage.setItem('bloom_ultimate_data', JSON.stringify(dataToSave));
    };
});