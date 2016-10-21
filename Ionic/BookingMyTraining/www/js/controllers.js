angular.module('app.controllers', [])

.controller('profilCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('myCtrl', ['$scope',function ($scope) {
  $scope.count = 1;
  $scope.user = {name: '', last: ''};
  if ($scope.user.name == $scope.user.last) {
    $scope.count = { value : '0'};
  };
}])


.controller('cvCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('settingsCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('menuCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('searchCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
}])

.controller('connexionCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('choiceCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('candidatureCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('formCompanyCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('formStudentCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('updateStudentCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('internshipPropositionCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
}])

.controller('profilCtrl', function($scope, $ionicPopup) { $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
         title: 'Changer mon mot de passe',
         subTitle :'Un lien vous permettant de modifier votre mot de passe vous sera envoyé par email',
         template: 'Confirmer la modification ?'
      });
   };
})
.controller('Hello', function($scope, $http) {
    $http.get('http://demo6542155.mockable.io/connection').
        then(function(response) {
            $scope.connection = response.data;
        });
    $http.get('http://demo6542155.mockable.io/intershipProposition').
    then(function(response) {
        $scope.intershipProposition = response.data;
    });
});
