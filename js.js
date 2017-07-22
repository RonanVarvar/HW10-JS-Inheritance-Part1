var Gladiator = function (name) {
    this.name = name;
    this.attack = '';
    this.hitpoints = '';
};

Gladiator.prototype.getAttack = function () {
    this.attack = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
};

Gladiator.prototype.setHitpoints = function () {
    this.hitpoints = Math.floor(Math.random() * (100 - 80 + 1)) + 80;

    console.log(this.name + ' hitpoints - ' + this.hitpoints);
};

Gladiator.prototype.updateSkills = function () {
    this.getAttack();
    this.setHitpoints();
};

Gladiator.prototype.fight = function (contestant) {
    this.contestant = contestant;
    this.losshitpoints = 0;

    if (contestant.hitpoints > this.losshitpoints && gameOver === false && this.hitpoints > this.losshitpoints) {
        this.getAttack();
        contestant.hitpoints -= this.attack;
        this.fightLog();
    } else {
        this.winResult();
    }
};

Gladiator.prototype.fightLog = function () {
    if (this.contestant.hitpoints > this.losshitpoints) {
        console.log(this.name + ' attacked ' + this.contestant.name +
            ' for ' + this.attack + ' damage. ' + this.contestant.name +
            ' hitpoints are ' + this.contestant.hitpoints);
    } else {
        console.log(this.name + ' attacked ' + this.contestant.name +
            ' for ' + this.attack + ' damage. ' + this.contestant.name +
            ' lose! ');
    }
};

Gladiator.prototype.winResult = function () {
    if (this.contestant.hitpoints <= this.losshitpoints) {
        gameOver = true;
        console.log(this.name + ' won!');
    }
};

var Champion = function (name) {
    Gladiator.call(this, name);
};

Champion.prototype = Object.create(Gladiator.prototype);
Champion.prototype.constructor = Champion;

var Monster = function (name) {
    Gladiator.call(this, name);
};

Monster.prototype = Object.create(Gladiator.prototype);
Monster.prototype.constructor = Monster;

var Superman = new Champion('Superman');

var Doomsday = new Monster('Doomsday');

function startNewGame() {
    gameOver = false;
    Superman.updateSkills();
    Doomsday.updateSkills();

    while (gameOver === false) {
        Superman.fight(Doomsday);
        Doomsday.fight(Superman);
    }
}

startNewGame();