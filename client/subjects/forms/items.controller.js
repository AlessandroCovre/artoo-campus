angular.module('artoo').controller('ItemsCtrl', function ($scope, ItemsSrv) {
  $scope.ItemsSrv = ItemsSrv;

  var master;
  
  $scope.selectItem = (code) => {
      $scope.item = angular.copy(ItemsSrv.find(code));
      master = angular.copy($scope.item);
  }
  
  $scope.selectedItem = ItemsSrv.get()[0].code;
  $scope.selectItem($scope.selectedItem);
  
  /*$scope.item = {
      name: 'Ascia bipenne',
       code: 'it01',
       description: 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico.',
       image: 'http://khazalidgrungron.altervista.org/axes/05.png',
  }*/
  
  $scope.insert = function (items, form){
      ItemsSrv.add(items);
      $scope.item = {};
      //console.info('Send message: '+ text);
      //$scope.justAnInput = '';
      form.$setPristine();
  };
  
  $scope.resetForm = (form) => {
      $scope.item = angular.copy(master);
      //form.$setPristine();
  };
  
  $scope.update = (item, form) => {
      ItemsSrv.update(item);
      master = angular.copy(item);
  };
  
});