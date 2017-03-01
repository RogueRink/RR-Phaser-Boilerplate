# THE RR-Phaser-Boilerplate

This Boilerplate is a starting template that we use for all of our projects here at RogueRink.
The assets used in this boilerplate are acknowldged at the bottom of the page.
Its more complext than your usual boilerplate, but should be a strong starting point. 

This is a boiler plate to create Html5 games using [Phaser](http://phaser.io/) Framework. Useful tool for those new to the world of Phaser.

"An easy to install set of skeleton classes to speed-up development start time." - Richard Darvey [@photonstorm](https://twitter.com/photonstorm)

## How this works

All of your files in src directory are compiled and copied over to a production directory on the server. You build your porject in the src dirctory and deploy in the production directory.

A landing page with accomonied JS and CSS files are included.
- index.js is the landing page
- landing directory holds css and js

The Phaser game is 
- game.html is the html file where the game is held
- main.js is the logic for the game
- states directory holds the game states detailed bellow
- assets hold the asset files such as art, music and fonts

The main game engine is Phaser and we have 5 states ->
- Splash - Loading of files - Think boot
- Game Menu - bare bones start menu
- Options - bare bones options menu
- Game - the main game (simple click to exit)
- Game Over - simple game over screen that lets you restart the game or go to the main menu

Lib and vendor
- hold various files to make development easier

gulp 
- manages the build system to Production

## How to use

- clone the repo
- npm install all plugins
- gulp should install the production directory for you

### Advice

On your web sever point the directory to the production directory so the index.html file is read as your initial file. Also this protects the js files as this is the only directory where it is uglified.

Also don't touch the NPM Modules folder or Production build folder these sould all be managed by npm and gulp functions respectively.


## Included files

NOTE: Not all plugins and projects are used or intigrated into the boiler plate. There are part of the projects we do. You can simpily remove them if you don't need them.

ALSO: Be sure to update these files as updates come along.

Open source projects:

- Bootstrap
- Jquery
- Phaser
- Underscore JS
- webfontloader JS
- Stats JS

Phaser Plugins:
- Phaser Debug
- Phaser Inspector


Gulp Files:
- Gulp Clean
- Gulp Uglify
- Gulp Stylus
- Gulp Typographic
- Nib
- Gulp Plumber

### Known Issues

  - Loading maybe slow
  - The GULP file works, but may need to be used several times in order to load all files


### Acknowledgements
The menu system for the Phaser game and associated images are from
the git hub repo https://github.com/MattMcFarland/phaser-menu-system
- The images and assets were commented in code where found (comments were kept)


based on the following tutorial...

http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/

The images and assets were commented in code where found

