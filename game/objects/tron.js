var Tron = function() {
    Character.call(this);
    this.isAlive = true;
    this.points = 0;
    this.name = "";
};

Tron.prototype = new Character();

Tron.prototype.constructor = Tron;

Tron.prototype.init = function() {
    Character.prototype.init.apply(this, arguments);
};

Tron.prototype.kill = function() {
    this.isAlive = false; 
    this.points = 0;     
};

Tron.prototype.updatePoints = function(points) {
    this.points = this.points + points;
    if(this.points < 0) {
        this.points = 0;
    }
};

Tron.prototype.eatPellet = function(pellet) {
    this.updatePoints(pellet.getPoints());
    pellet.eaten();
};

Tron.prototype.setName = function(game, name) {
    var style = { 
        font: "15px Arial", 
        fill: "#ffffff", 
        align: "center",
        backgroundColor: "#000000" 
    };
    this.name = name;
    var text = game.add.text(game.world.centerX, game.world.centerY, name, style);  //some reason this doesn't fellow thie spirte
    this.nameText = text;
    text.y = this.y;
    text.x = this.x;
    text.anchor.set(0.5);
}
