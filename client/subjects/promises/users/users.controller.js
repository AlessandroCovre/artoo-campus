angular.module('artoo').controller('UsersCtrl', function ($scope, UsersSrv) {
    console.log('Ctrl is running!')
   UsersSrv.query().then((data) => {
       console.log(data);
       $scope.users = data;
   }).catch((err) => {
       console.error(err);
   }); //then promessa mantenuta catch promessa non mantenuta
   console.log('Ctrl is after the promise was made');
   
   $scope.getDetails = (id) => {
       $scope.loading = true;
       UsersSrv.get({id: id}).then((data) => {
           $scope.loading = false;
        $scope.userDetails = data;
        $scope.user = data;
       });
   }
   
   $scope.user = UsersSrv.create();
   
   $scope.remove = (user) => {
       $scope.loading = true;
       user.$remove({id: user.id}).then((data) => {
           $scope.loading = false;
           console.info('Removed: ' + data);
       }).catch();
   };
   
   $scope.save = (user, form) => {
       $scope.loading = true;
       user.createAt = new Date();
       user.$save().then((data) => {
            $scope.loading = false;
            $scope.user = UsersSrv.create();
            form.$setPristine();
            console.info(data);
            }).catch();
        };
});

