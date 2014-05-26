var app = angular.module('ContactsApp', ['popreview']);

app.controller('ContactsCtrl', function($scope) {
  $scope.contacts = [
    {name: 'John Doe', image: 'http://lorempixel.com/50/50/sports'},
    {name: 'Doe Adam', image: 'http://lorempixel.com/50/50/sports'},
    {name: 'Adam Plesky', image: 'http://lorempixel.com/50/50/sports'},
    {name: 'Plesky Shawn', image: 'http://lorempixel.com/50/50/sports'},
    {name: 'Shawn Michael', image: 'http://lorempixel.com/50/50/sports'}
  ];
});