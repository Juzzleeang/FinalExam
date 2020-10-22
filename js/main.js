var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO,'');

game.state.add('Boot', AprilSpace.Boot);
game.state.add('Preloader', AprilSpace.Preload);
game.state.add('MainMenu', AprilSpace.MainMenu);
game.state.add('Game', AprilSpace.Game);

game.state.start('Boot');