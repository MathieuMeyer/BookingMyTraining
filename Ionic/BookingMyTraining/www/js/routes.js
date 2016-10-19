angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.profil', {
    url: '/page1',
    views: {
      'menu': {
        templateUrl: 'templates/profil.html',
        controller: 'profilCtrl'
      }
    }
  })

  .state('menu.cv', {
    url: '/page2',
    views: {
      'menu': {
        templateUrl: 'templates/cv.html',
        controller: 'cvCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/page3',
    views: {
      'menu': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })


  .state('menu.search', {
    url: '/page4',
    views: {
      'menu': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('menu.connection', {
    url: '/connectionPage',
    views: {
      'menu': {
        templateUrl: 'templates/connection.html',
        controller: 'connectionCtrl'
      }
    }
  })

  .state('menu.choice', {
    url: '/choicePage',
    views: {
      'menu': {
        templateUrl: 'templates/choice.html',
        controller: 'choiceCtrl'
      }
    }
  })

  .state('menu.candidature', {
    url: '/candidaturePage',
    views: {
      'menu': {
        templateUrl: 'templates/candidature.html',
        controller: 'candidatureCtrl'
      }
    }
  })

  .state('menu.formCompany', {
    url: '/formCompany',
    views: {
      'menu': {
        templateUrl: 'templates/formCompany.html',
        controller: 'formCompanyCtrl'
      }
    }
  })

  .state('menu.formStudent', {
    url: '/formStudent',
    views: {
      'menu': {
        templateUrl: 'templates/formStudent.html',
        controller: 'formStudentCtrl'
      }
    }
  })



$urlRouterProvider.otherwise('/menu/page1')

});