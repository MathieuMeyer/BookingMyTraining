angular.module('app.controllers', [])

.controller('profilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
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

.controller('profilCtrl', function($scope, $ionicPopup) {

   $scope.showConfirm = function() {

      var confirmPopup = $ionicPopup.confirm({
         title: 'Changer mon mot de passe',
         subTitle :'Un lien vous permettant de modifier votre mot de passe vous sera envoyé par email',
         template: 'Confirmer la modification ?'
      });		
   };
})