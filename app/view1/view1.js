'use strict';



app.controller('View1Ctrl', ['$scope','$document',function($scope,$document) {
	$scope.scrollPositions=12;
	

$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
$scope.data1 = [300, 500, 100];
  $scope.data = [{path:'https://www.medmatchjobs.com/assets/new/talent/images/app-screenshots/app-screenshot1alt-talent.jpg'},
  {path:'https://www.medmatchjobs.com/assets/new/talent/images/app-screenshots/app-screenshot2alt-talent.jpg'},
  {path:'https://www.medmatchjobs.com/assets/new/talent/images/app-screenshots/app-screenshot3alt-talent.jpg'}
    ];

  $scope.slickConfig = {
     enabled: true,
     infinite:false,
    autoplay: true,
    draggable: true,
    prevArrow:'',
    nextArrow:'',
    autoplaySpeed: 1000,
    method:{}        
    }
	// setTimeout(function(){ console.log('asd');  $scope.pre_loader=false; }, 3000);

  $scope.$on('$viewContentLoaded', function(){



  });





}]);