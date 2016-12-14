console.log('Friends Factory');
myApp.factory('friendsFactory', ['$http', function($http) {
	var friends = [];
	var friend = {};

	function FriendsFactory(){
		var _this = this;
		this.create = function(newfriend, callback){
			$http.post('/friends', newfriend).then(function(returned_data){
				console.log(returned_data.data);
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}

			});
		};
		
		this.update = function(updateFriend, friend_id, callback){
      console.log("update friend from factory:");
      console.log(updateFriend);
      $http.put('/friends/'+friend_id, updateFriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      })
    };
    this.index = function(callback){
  		//call this method if you want to update or set the friends variable
    	$http.get('/friends').then(function(returned_data){
        console.log(returned_data);
        friends = returned_data.data;
        callback(friends);
    });
	 //Note: this can be shortened to $http.get('/friends').then(callback); 
	 //But only if you only want to run the callback from the controller.
    	};
    	this.delete = function(friend_id, callback){
          $http.delete('/friends/'+friend_id).then(function(returned_data){
          console.log(returned_data.data);
          if (typeof(callback) == 'function'){
            callback(returned_data.data);
          }

        });
    	};
    	this.show = function(friend_id, callback){// what parameters do we need?
        $http.get('/friends/'+friend_id).then(function(returned_data){
          console.log(returned_data.data);
          if (typeof(callback) == 'function'){
            callback(returned_data.data);
          }

        });
    	};
    	// Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    	this.getFriends = function(callback){
      		callback(friends);
    	};
    	this.getFriend = function(callback){
        	callback(friend);
    	};
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();

}]);