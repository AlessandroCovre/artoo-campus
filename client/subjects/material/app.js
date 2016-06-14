angular.module('artoo', [
  'appbar',
  'ngMaterial',
  'ngMessages',
  'ngAria',
  'ngAnimate',
])

 
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Angular Material', url: 'subjects/material'});
  })
  
  .config(($mdThemingProvider) => {
    
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('light-green')
      .warnPalette('deep-orange')
      .backgroundPalette('teal');
  
  
});