angular.module('artoo').service('UsersSrv', function ($resource)  {
    var User = $resource('http://jsonplaceholder.typicode.com/users/:id', {}, {});
    
    this.query = function () {
        return User.query().$promise;
    };
    
    this.create = () => {
        return new User();
    };
    
    this.get = (params) => {
        return User.get(params).$promise;
    };
});