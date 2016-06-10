angular.module('artoo').directive('log', function($timeout,playerSrv){
    return {
      restrict: 'A',
      scope: {
        log: '@',  
      },
      link: function(scope, elem, attrs){
          elem.on('click', function($e){
              //console.info('new log: ' + scope.log);
              $timeout(() => {
                  playerSrv.log(scope.log);
              });
          });
      }
    };
});