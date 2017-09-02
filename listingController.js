angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = 'Click on a entry name for more info';
    $scope.showInfo = false; 
    $scope.newItem = "";
    $scope.newItemCode = "";
    $scope.searchTerm = "";

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      console.log("in add");
      if ($scope.newItem !== ""){

        $scope.listings.push({"name" : $scope.newItem, "code" : $scope.newItemCode})
      }
    };
    $scope.deleteListing = function(index) {
        console.log("in delete");
        $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
      $scope.showInfo = true;
    };
  }
]);