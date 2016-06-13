angular.module('artoo').controller('ItemsCtrl', function (ItemsSrv){
   /*console.info('comment ' + this.comment); 
   this.color = 'red';*/
   this.ItemsSrv = ItemsSrv;
   this.typology = 'weapons';
});