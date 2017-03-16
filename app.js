angular.module('myCollection', ['ui.router', 'firebase'])
.config(function($stateProvider, $urlRouterProvider){


      
$stateProvider

      .state('home', {
      url: '/',
})
      .state('photography', {
      url: '/photography',
      templateUrl: "./templates/photography.html",
      

})
        .state('design', {
        url: '/design',
        templateUrl: "./templates/design.html",
  
})
        .state('fun', {
        url: '/dev',
        templateUrl: "./templates/fun.html",
       
});
    
$urlRouterProvider.otherwise('/');

})

.controller('myCtrl',function($scope, $firebaseObject){
  var ref = new Firebase("https://sammiller.firebaseapp.com/");
   // download the data into a local object
//   $scope.data = $firebaseObject(ref);

}); 
