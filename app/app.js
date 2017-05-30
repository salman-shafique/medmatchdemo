'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'duScroll',
  'chart.js',
  'angular-scroll-animate',
  'slickCarousel',
  'video-background'

]).
config(['$locationProvider', '$routeProvider','ChartJsProvider', function($locationProvider, $routeProvider,ChartJsProvider) {
  $locationProvider.hashPrefix('!');
    $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  }).otherwise({redirectTo: '/view1'});





(function (ChartJsProvider) {
  ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
}); 





}]);

app.run(['$rootScope','$document',function($rootScope,$document) {
	$rootScope.scrollPosition=0;
	$rootScope.pre_loader=true;
    $document.on('scroll', function() {
    	$rootScope.scrollPosition=$document.scrollTop();
    	$rootScope.$apply();
    });

/*  $rootScope.$on('$viewContentLoaded', function(){
  console.log('locationProvider')
  });*/

setTimeout(function(){  $rootScope.pre_loader=false; $rootScope.$apply();}, 4000);

}]);

/*app.directive('setmute', function () {
    return {
        restrict: 'AC',
        link: function (scope, element, attrs) {          
          
         console.log(element);               
                            
        }
    }
})*/