angular.module('artoo').controller('ItemsCtrl',($scope, ItemsSrv) => {
    console.log(ItemsSrv.get() );
    
    $scope.items = ItemsSrv.get();
    
    $scope.getItems = ItemsSrv.get;
    
    $scope.ItemsSrv = ItemsSrv;
    
    // il metodo consigliato è l'ultimo se ho più funzioni da passare
});