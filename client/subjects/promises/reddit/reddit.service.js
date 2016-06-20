angular.module('artoo').service('RedditSrv', ($resource) => {
   var Reddit = $resource('https://www.reddit.com/search.json?q&sort', {},{
       query: {
        method: 'GET',
        isArray: false,
       }
   });

   this.query= (params) => {
       return Reddit.query(params).$promise;
   };
});