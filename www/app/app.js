// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular
    .module('goalSetter', ['ionic', 'ngCordova', 'azure-mobile-service.module'])
    .constant('AzureMobileServiceClient',{ API_URL: "[APIURL]", API_KEY: '[APIKEY]'})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "app/views/tabs.html"
    })
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'app/views/tab-dash.html',
          controller: 'Dashboard as vm'
        }
      }
    })
    .state('tab.goals', {
      abstract: true,
      url: '/goals',
      views: {
        'tab-goals': {
          template: '<ion-nav-view></ion-nav-view>'
        }
      }
    })
    .state('tab.goals.index', {
      url: '',
      templateUrl: 'app/views/tab-goals.html',
      controller: 'Goals as vm'
    })
    .state('tab.goals.create', {
      url: '/create',
      templateUrl: 'app/views/create-goal.html',
      controller: 'GoalCreator as vm'
    })
    .state('tab.statistics', {
      url: '/statistics',
      views: {
        'tab-statistics': {
          templateUrl: 'app/views/tab-statistics.html',
          controller: 'Statistics as vm'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab/dash');

});

