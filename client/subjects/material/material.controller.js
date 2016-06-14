angular.module('artoo').controller('MaterialCtrl', function ($scope){
    $scope.minDate = new Date(2016, 5, 17);
    
    $scope.onlyWeekendsPredicate = function (date){
        var day = date.getDay();
        return day % 2 === 1;
        return day === 0 | day === 6;
    }
});