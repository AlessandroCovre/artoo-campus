angular.module('artoo').service('PlayerSrv', function(){
    var player = {
        name: 'Legolas',
        hp: 100,
        exp: 17,
        level: 2,
        race: 'elf',
    };
    
    // Die
    this.die = () => {
        player.hp = 0;
    };
    
    // get hp
    this.get = () => {
        return player;
    };
    
    // is Dead
    this.isDead = () => {
        return !(!!player.hp);
    };
    
    // take hit
    this.takeHit = (damage) => {
        var hp = player.hp - damage;
        player.hp = (hp > 0) ? hp : 0;
    };
    
    // Drink Potion
    this.drinkPotion = () => {
        if(!this.isDead) return;
        var newHp = player.hp + 50;
        player.hp = (newHp > 100) ? 100 : newHp;
    };
    
    // Gain Exp
    this.gainExp = () => {};
    

    // Level Up
    this.levelUp = () =>{
        player.level += 1;
    };
    
    // Respam
    this.respawn = () => {
        if(!this.isDead()) return;
        player.hp = 10;
    };
    
    
});
