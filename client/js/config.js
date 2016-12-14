 //  inject the ngRoute dependency in the module.
var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/list.html',
        controller: 'FriendsController'
    })
    .when('/new',{
        templateUrl: 'partials/new.html',
        controller: 'NewFriendController'
    })
    .when('/edit/:id',{
        templateUrl: 'partials/edit.html',
        controller: 'EditFriendController'
    })
    .when('/show/:id',{
        templateUrl: 'partials/show.html',
        controller: 'ShowFriendController'
    })
    .otherwise({
      redirectTo: '/'
    });
});