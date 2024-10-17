angular.module('dashboardApp', [])
  .controller('dashboardController', ['$scope', function($scope) {
    $scope.data = [];
    $scope.inputData = '';
    $scope.updateData = function() {
      if ($scope.inputData.trim() !== '') {
        // Check if input data contains numbers with strings
        if (/^\d+(\.\d+)?(,\s*\d+(\.\d+)?)*$/.test($scope.inputData.trim())) {
          var newData = $scope.inputData.trim().split(',');
          $scope.data = $scope.data.concat(newData);
          $scope.inputData = '';
          updateCharts();
        } else {
          alert('Please enter  only numbers.');
        }
      }
    };
    function updateCharts() {
      updatePieChart();
      updateBarChart();
      updateLineChart();
      updateRadarChart();
    }
    function updatePieChart() {
      var numericalData = $scope.data.filter(function(data) {
        return !isNaN(parseFloat(data));
      }).map(Number);
      var labels = $scope.data.map(function(data, index) { return 'Data ' + (index + 1); });
      var ctx = document.getElementById('pieChart').getContext('2d');
      var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data',
            data: numericalData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Pie Chart'
            }
          }
        }
      });
    }
    function updateBarChart() {
      var numericalData = $scope.data.filter(function(data) {
        return !isNaN(parseFloat(data));
      }).map(Number);
      var labels = $scope.data.map(function(data, index) { return 'Data ' + (index + 1); });
      var ctx = document.getElementById('barChart').getContext('2d');
      var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data',
            data: numericalData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Bar Chart'
            }
          }
        }
      });
    }
    function updateLineChart() {
      var numericalData = $scope.data.filter(function(data) {
        return !isNaN(parseFloat(data));
      }).map(Number);
      var labels = $scope.data.map(function(data, index) { return 'Data ' + (index + 1); });
      var ctx = document.getElementById('lineChart').getContext('2d');
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data',
            data: numericalData,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Line Chart'
            }
          }
        }
      });
    }
    function updateRadarChart() {
      var numericalData = $scope.data.filter(function(data) {
        return !isNaN(parseFloat(data));
      }).map(Number);
      var labels = $scope.data.map(function(data, index) { return 'Data ' + (index + 1); });
      var ctx = document.getElementById('radarChart').getContext('2d');
      var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data',
            data: numericalData,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Radar Chart'
            }
          }
        }
      });
    }
  }]);
