angular.module('artoo').controller('ItemsDetailsCtrl', function ($stateParams, ItemsSrv){
    this.loading = true;
    ItemsSrv.getDetails($stateParams.code, (item) => {
        this.loading = false;
        this.item = item;
        console.log(item);
    });
});