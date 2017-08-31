angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = 'Click on a entry name for more info';
    $scope.showInfo = false; 

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {

    };
    $scope.deleteListing = function(index) {

    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
      $scope.showInfo = true;
    };
  }
]);