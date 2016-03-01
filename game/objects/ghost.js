var Ghost = function() {
    Character.apply(this, arguments);
    this.points = 0;
};

Ghost.prototype = new Character();

Ghost.prototype.constructor = Ghost;

Ghost.prototype.init = function() {
    Character.prototype.init.apply(this, arguments);
};

Ghost.prototype.killTron = function(tron) {
    this.updatePoints(tron.points);
    // tron.character.emitter.destroy();
    tron.nameText.destroy();
    tron.character.destroy();
};

Ghost.prototype.updatePoints = function(points) {
    this.points = this.points + points;
};
