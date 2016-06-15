angular.module('artoo').controller('PageLoaderCtrl', function ($scope) {
    $scope.$on('$stateChangeStart', function () {
        $scope.loading = true;
        console.info($scope.loading);
    });
    
    $scope.$on('$stateChangeSuccess', function (){
        $scope.loading = false;
        console.info($scope.loading);
    });
});