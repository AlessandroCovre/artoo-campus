angular.module('artoo').controller('ContactsCtrl', function ($state, color) {
    this.color = $state.current.data.color; // 
    this.resolveColor = color;
});