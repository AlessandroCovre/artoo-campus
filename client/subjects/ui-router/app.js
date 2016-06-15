angular.module('artoo', [
  'appbar',
  'ui.router',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'UI Router', url: 'subjects/ui-router'});
  })
  
  .config( ($stateProvider) => {
    $stateProvider
      .state('home', {
        controller: function () {console.info('I am in Home')},
        template: '<h1>Home</h1>',
        url:'/',
      })
      
      .state('items', {
        controller:'ItemsCtrl',
        controllerAs: 'ItemsCtrl',
        templateUrl: 'subjects/ui-router/items/items.html',
        url:'/items',
      })
      
      .state('items-details', {
        controller: 'ItemsDetailsCtrl',
        controllerAs: 'ItemsDetailsCtrl',
        templateUrl: 'subjects/ui-router/items/items-details.html',
        url: '/items/:code',
        /*resolve: {
          item: function ($stateParams, ItemsSrv) {
            return ItemsSrv.getDetails($stateParams.code);
          },
        },
        onEnter: function (item) {
          if(!item) $state.go('items');
        }*/
      })
      
      .state('contacts', {
        //abstract:true,
        controller: 'ContactsCtrl',
        controllerAs: 'ContactsCtrl',
        data: {
          color: 'red',
        },
        resolve: {
          color: function ($rootScope, $timeout) {
            return $timeout(function() {
              return 'blue';
            }, 1500);
          },
        },
        onEnter: function ($state,color) {
          if(color != 'blue') $state.go('home');
        },
        templateUrl: 'subjects/ui-router/contacts/contacts.html',
        url: '/contacts',
      })
      
      .state('contacts.list', {
       templateUrl: 'subjects/ui-router/contacts/list/list.html',
       url: '/list'
      })
      
      .state('contacts.add', {
        template: '<h2>Add</h2>',
        url: '/add',
      })
      
      .state('contacts.query', {
        template: '<h2>Query</h2>',
        url: '/query',
      });
  });