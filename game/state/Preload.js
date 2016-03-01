Hackatron.Preload = function(game) {
    this.asset = null;
    this.ready = false;
};

Hackatron.Preload.prototype= {
    preload: function() {
        this.load.image('preloader', 'assets/preloader.gif');
        this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
        this.asset.anchor.setTo(0.5, 0.5);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.asset);

        // Main Menu
        this.load.image('menu_background', 'assets/mainmenu.png');
        this.load.spritesheet('start_button', 'assets/startbutton_spritesheet.png', 155, 80);
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        // Game
        this.load.tilemap('map', 'assets/tiles1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/part2_tileset.png');
        this.load.spritesheet('tron', 'assets/tron.png', 32, 32, 12);
        this.load.spritesheet('ghost', 'assets/ghost.png', 32, 32, 12);

        this.load.json('JSONobj', 'assets/tiles1.json');
        this.load.image('pellet', 'assets/pellet.png');
         // this.load.image('poop', 'assets/poop.png');
    },

    create: function() {
        this.asset.cropEnabled = false;
    },

    update: function() {
        if(!!this.ready) {
            this.game.state.start('MainMenu');
        }
    },

    onLoadComplete: function() {
        this.ready = true;
    }
};
