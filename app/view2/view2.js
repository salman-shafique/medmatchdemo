'use strict';


app.controller('View2Ctrl', ['$scope',function($scope) {
	$scope.mylabel = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
	$scope.mydata = [300, 500, 100];
	console.log('sd');
  $scope.dataa = [{path:'https://www.medmatchjobs.com/assets/new/talent/images/app-screenshots/app-screenshot1alt-talent.jpg'},
  {path:'https://www.medmatchjobs.com/assets/new/talent/images/app-screenshots/app-screenshot2alt-talent.jpg'},
  {path:'https://www.medmatchjobs.com/assets/new/talent/images/app-screenshots/app-screenshot3alt-talent.jpg'}
    ];

  $scope.slickConfig2 = {
     enabled: true,
     infinite:false,
    autoplay: true,
    draggable: true,
    prevArrow:'',
    nextArrow:'',
    autoplaySpeed: 1000,
    method:{}        
    }



  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
























}]);