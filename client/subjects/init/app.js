// define app module
   var app = angular
        .module('artooInit',[])
        .run(function(){
            console.info('I run in the setter');
        });
    
    angular
        .module('artooInit')
        .config(angular.noop)
         //.run(function(){
        //    
        //})
        .run(()=>{
            console.info('I run in the getter');
         });
    
// define a run function
app.run(function(){
   console.info('In run from the module in the var') 
});