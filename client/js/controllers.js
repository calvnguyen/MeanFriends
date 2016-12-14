

myApp.controller('FriendsController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location) {
/* Private Methods */
  $scope.friends = [];

  var friendsIndex = function() {
      friendsFactory.index(function (data) {
        $scope.friends = data;
        console.log("friends controller data:");
        console.log(data);
      }); 
    } 


  $scope.deleteFriend = function(friend_id){
    console.log("Friends Controller: I'm deleting friend...");
    console.log(friend_id);
    friendsFactory.delete(friend_id, function (data){
    })
    $location.url('#!/');
  }
  console.log("loading the Friends controller");

  friendsIndex();
  }]);

myApp.controller('EditFriendController', ['$scope', 'friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams){
    console.log("Inside Edit Friend Controller...");
    $scope.friend = {};
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    console.log("current location:");
    console.log($location);

    $scope.getFriend = function(){
      friendsFactory.show($routeParams.id, function(data){
        $scope.friend = data;
      })
    }

    $scope.updateFriend = function(){
      console.log("I'm inside updateFriend")
      console.log($scope.update_friend)
      friendsFactory.update($scope.update_friend, $routeParams.id, function(data) {
        $scope.friend = data;
      })
      $location.url('/');
    }

    $scope.getFriend();

}]);



myApp.controller('NewFriendController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location){

  $scope.friend = {};
  $scope.sortType = 'name';
  $scope.sortReverse = false;


  var index = function(){
                  friendsFactory.index(function(returnedData){
                    $scope.friends = returnedData;
                    console.log($scope.friends);
                  });
  };
  
  index();

  $scope.addFriend = function(){
    console.log($scope.newFriend);
    friendsFactory.create($scope.newFriend, function(data){
      console.log("back from factory in adding friend..")
      $scope.friend = data;
      $scope.newFriend = {};
      console.log("add - back from factory")
      console.log(data._id);
      $location.url('/show/' + data._id);
    })

  }

   this.controlValue = "Added user successfully";


}]);

myApp.controller('ShowFriendController', ['$scope', 'friendsFactory', '$location','$routeParams', function($scope, friendsFactory, $location, $routeParams) {
/* Private Methods */
  $scope.friend = {};

  $scope.getFriend = function(){
      friendsFactory.show($routeParams.id, function(data){
        $scope.friend = data;
      })
  }

  $scope.getFriend();

  
}]);