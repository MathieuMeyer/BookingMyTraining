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
    url: '/profilPage',
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
    url: '/searchPage',
    views: {
      'menu': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('menu.connexion', {
    url: '/connexionPage',
    views: {
      'menu': {
        templateUrl: 'templates/Home/connexion.html',
        controller: 'connexionCtrl'
      }
    }
  })

  .state('menu.choice', {
    url: '/choicePage',
    views: {
      'menu': {
        templateUrl: 'templates/Home/choice.html',
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
    url: '/formCompanyPage',
    views: {
      'menu': {
        templateUrl: 'templates/Home/formCompany.html',
        controller: 'formCompanyCtrl'
      }
    }
  })

  .state('menu.formStudent', {
    url: '/formStudentPage',
    views: {
      'menu': {
        templateUrl: 'templates/Home/formStudent.html',
        controller: 'formStudentCtrl'
      }
    }
  })

  .state('menu.updateStudent', {
    url: '/updateStudentPage',
    views: {
      'menu': {
        templateUrl: 'templates/updateStudent.html',
        controller: 'updateStudentCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/connexionPage')

});