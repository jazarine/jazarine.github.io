var PMGame = (function () {
    function PMGame() {
        this.bgData = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAFFJREFUWIXtzjERACAQBDFgMPOKzr8ScADFFlBsFKRX1WqfStLG68SNQcogZZAySBmkDFIGKYOUQcogZZAySBmkDFIGKYOUQcog9X1wJnl9ONrTcwPWLGFOywAAAABJRU5ErkJggg==";
        this.starfield = null;
        this.sky = null;
        this.clouds = null;
        this.me = null;
        this.score = 0;
        this.scoreBuffer = 0;
        this.result = null;
        this.boardHeight = 0;
        this.boardWidth = 0;
        this.leftBuffer = 0;
        this.topBuffer = 0;
        this.matrixTileWidth = 154;
        this.matrixTileHeight = 70;
        this.draggedItemInitX = 0;
        this.draggedItemInitY = 0;
        //matrixDataGrid = [
        //    [null, null, null, null, null, null],
        //    [null, null, null, null, null, null],
        //    [null, null, null, null, null, null],
        //    [null, null, null, null, null, null],
        //    [null, null, null, null, null, null],
        //    [null, null, null, null, null, null]
        //];
        this.matrixDataGrid = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ];
        this.tileTexts = [
            'Developing a Project Charter', 'Developing the project management plan', '', '', 'Releasing project team members',
            '', 'Gathering customer needs', '', 'Ensuring project\'s deliverables for customer acceptance', '',
            '', 'Developing Project Schedule', '', 'Comparing planned duration against actual duration to estimate forecasts', '',
            '', 'Determine funding requirements', '', 'Estimating variations in terms of budget and forecasting', '',
            '', 'Developing quality metrics', 'Ensuring quality systems are in place', 'Performing inspections to ensure product correctness', '',
            '', 'Developing a Quality Management Plan', 'Recruiting project team members', '', '',
            '', 'Developing a Communication Management Plan', 'Creating and distributing project information', 'Evaluating entire project communication', '',
            '', 'Developing a Risk Register', '', 'Evaluating risk process effectiveness', '',
            '', 'Developing procurement documents', 'Selecting Sellers', 'Making changes to contracts if appropriate', 'Completing contract related activities',
            'Recording details of key individuals or groups associated with the project', 'Developing appropriate stakeholder management strategies', 'Communicating and working with stakeholders', 'Evaluating overall stakeholder relationships', ''
        ];
        this.correctCoords = [];
        //tileTexts = [
        //    'Developing a\nProject Charter', 'Developing\nthe project\nmanagement plan', 'Releasing project team members'
        //    , 'Gathering customer needs', 'Ensuring project\'s deliverables\nfor customer acceptance'
        //    , 'Developing\nProject Schedule', '', 'Comparing planned duration\nagainst actual duration\nto estimate forecasts'
        //    , 'Determine funding requirements', 'Estimating variations in terms of budget and forecasting'
        //]
        //tileTexts = [
        //    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        //    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        //    'w', 'x', 'y', 'z'
        //];
        this.tileColors = [
            '#000000'
        ];
        this.tileHeaderColors = [
            '#ffffff'
        ];
        this.headerTiles = null;
        this.tiles = null;
        this.random = null;
        this.rowHeadings = ['Initiation', 'Planning', 'Executing', 'Monitoring & Controlling', 'Closing'];
        this.colHeadings = ['Integration Management', 'Scope Management', 'Time Management', 'Cost Management',
            'Quality Management', 'Humans Resource Management', 'Communication Management', 'Risk Management', 'Procurement Management',
            'Stakeholder Management'];
    }
    return PMGame;
})();
var pmGame = new PMGame();
var SimpleGame = (function () {
    function SimpleGame() {
        var _this = this;
        setTimeout(function () {
            _this.game = new Phaser.Game(950, 800, Phaser.AUTO, 'content', { preload: _this.preload, create: _this.create, update: _this.update, render: _this.render });
        }, 1000);
        //debugger;
        //var WebFontConfig = pmGame.WebFontConfig;
    }
    SimpleGame.prototype.preload = function () {
        //this.game.load.image('logo', 'phaser-Logo-Small.png');
        //this.game.load.image('atari1', 'assets/sprites/atari130xe.png');
        //this.game.load.image('atari2', 'assets/sprites/atari800xl.png');
        //this.game.load.image('atari4', 'assets/sprites/atari800.png');
        //this.game.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
        //this.game.load.image('duck', 'assets/sprites/darkwing_crazy.png');
        //this.game.load.image('firstaid', 'assets/sprites/firstaid.png');
        //this.game.load.image('diamond', 'assets/sprites/diamond.png');
        //this.game.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.game.load.bitmapFont('gem', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
        //this.game.load.image('starfield', 'assets/games/invaders/starfield.png');
        //this.game.load.image('sky', 'assets/pmproj/sky.jpg');
        //this.game.load.image('starfield', 'assets/pmproj/wood.jpg');
        //this.game.load.image('starfield', 'assets/pmproj/wood_light.png');
        //this.game.load.image('starfield', 'assets/pmproj/grass.jpg');
        this.game.load.image('clouds', 'assets/pmproj/clouds.png');
        //this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        //var iBg = new Image();
        //iBg.src = pmGame.bgData;
        //this.game.cache.addImage('bg', pmGame.bgData, iBg);
    };
    SimpleGame.prototype.create = function () {
        //debugger;
        //+ Commented out Jaz
        //var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);
        //logo.scale.setTo(0.2, 0.2);
        //this.game.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
        //- Jaz
        //+ Commented out Jaz
        //var images = this.game.cache.getKeys(Phaser.Cache.IMAGE);
        //var test = this.game.add.group();
        ////  Now let's create some random sprites and enable them all for drag and 'bring to top'
        //for (var i = 0; i < 10; i++) {
        //    var tempSprite = test.create(this.game.world.randomX, this.game.world.randomY, this.game.rnd.pick(images));
        //    tempSprite.inputEnabled = true;
        //    tempSprite.input.enableDrag(false, true);
        //    tempSprite.events.onDragStart.add(onDragStart, this);
        //    tempSprite.events.onDragStop.add(onDragStop, this);
        //}
        //var bmpText1 = this.game.add.bitmapText(32, 32, 'gem', 'Make changes to contracts if appropriate', 16);
        //bmpText1.maxWidth = 400;
        //bmpText1.inputEnabled = true;
        //bmpText1.input.enableDrag(false, true);
        //bmpText1.events.onDragStart.add(onDragStart, this);
        //bmpText1.events.onDragStop.add(onDragStop, this);
        //var bmpText2 = this.game.add.bitmapText(32, 32, 'gem', 'Developing a communications management plan', 16);
        //bmpText2.maxWidth = 400;
        //bmpText2.inputEnabled = true;
        //bmpText2.input.enableDrag(false, true);
        //bmpText2.events.onDragStart.add(onDragStart, this);
        //bmpText2.events.onDragStop.add(onDragStop, this);
        //var bmpText3 = this.game.add.bitmapText(32, 32, 'gem', 'Developing a project charter', 16);
        //bmpText3.maxWidth = 400;
        //bmpText3.inputEnabled = true;
        //bmpText3.input.enableDrag(false, true);
        //bmpText3.events.onDragStart.add(onDragStart, this);
        //bmpText3.events.onDragStop.add(onDragStop, this);
        //var bmpText4 = this.game.add.bitmapText(32, 32, 'gem', 'Selecting Sellers', 16);
        //bmpText4.maxWidth = 400;
        //bmpText4.inputEnabled = true;
        //bmpText4.input.enableDrag(false, true);
        //bmpText4.events.onDragStart.add(onDragStart, this);
        //bmpText4.events.onDragStop.add(onDragStop, this);
        //- Jaz
        //debugger;
        //this.game.world.setBounds(0, 0, 780, 580);
        //Set the width and height for the tiles
        //this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg');
        pmGame.me = this;
        //  The scrolling starfield background
        //pmGame.starfield = this.game.add.tileSprite(0, 0, 950, 800, 'starfield');
        //pmGame.sky = this.game.add.tileSprite(0, 0, 950, 800, 'sky');
        pmGame.clouds = this.game.add.tileSprite(0, 0, 950, 800, 'clouds');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = "34495f";
        pmGame.headerTiles = this.game.add.group();
        pmGame.tiles = pmGame.me.add.group();
        pmGame.tiles.enableBody = true;
        //Keep a reference to the total grid width and height
        pmGame.boardHeight = pmGame.matrixDataGrid.length * pmGame.matrixTileHeight;
        pmGame.boardWidth = pmGame.matrixDataGrid[0].length * pmGame.matrixTileWidth;
        //We want to keep a buffer on the left and top so that the grid
        //can be centered
        //pmGame.leftBuffer = (this.game.width - pmGame.boardWidth) / 2;
        //pmGame.topBuffer = (this.game.height - pmGame.boardHeight) / 2;
        //Create a random data generator to use later
        var seed = Date.now();
        pmGame.random = new Phaser.RandomDataGenerator([seed]);
        //  Text
        pmGame.result = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '34px Paprika', align: 'center', fill: '#a90329' });
        pmGame.result.anchor.setTo(0.5, 0.5);
        pmGame.result.visible = false;
        pmGame.result.bringToTop();
        //Set up some initial tiles and the score label
        initTiles(this);
        //var test = this.game.add.group();
        //for (var rowCnt = 0; rowCnt < 4; rowCnt++) {
        //    for (var colCnt = 0; colCnt < 5; colCnt++) {
        //        //var tempSprite = test.create(this.game.world.randomX, this.game.world.randomY, this.game.rnd.pick(matrixData));
        //        var bmpText = this.game.add.bitmapText(this.game.world.randomX, this.game.world.randomY, 'gem', pmGame.matrixDataGrid[rowCnt][colCnt], 16);
        //        bmpText.inputEnabled = true;
        //        bmpText.input.enableDrag(false, true);
        //        bmpText.events.onDragStart.add(onDragStart, this);
        //        bmpText.events.onDragStop.add(onDragStop, this);
        //var tile = this.game.add.bitmapData(pmGame.matrixTileWidth, pmGame.matrixTileHeight);
        //tile.ctx.rect(5, 5, pmGame.matrixTileWidth - 5, pmGame.matrixTileHeight - 5);
        //tile.ctx.fill();
        ////tile.ctx.miterLimit = "5"
        //tile.ctx.font = '15px Arial';
        //tile.ctx.textAlign = 'center';
        //tile.ctx.textBaseline = 'middle';
        //tile.ctx.fillStyle = '#fff';
        //tile.ctx.lineWidth = 20;
        //tile.ctx.fillText('a', pmGame.matrixTileWidth / 2, pmGame.matrixTileHeight / 2);
        //var grd = tile.context.createLinearGradient(0, 0, 0, 32);
        //grd.addColorStop(0, '#e6f0a3');
        //    }
        //}
    };
    SimpleGame.prototype.render = function () {
        //this.game.debug.inputInfo(32, 32);
        //this.game.debug.text(result, 10, 20);
    };
    SimpleGame.prototype.update = function () {
        //alert('aha!');
        //  Scroll the background
        //pmGame.starfield.tilePosition.y -= 1;
        //pmGame.sky.tilePosition.y -= 1;
        pmGame.clouds.tilePosition.y -= 1;
        //pmGame.starfield.tilePosition.x += 1;
        //debugger;
        //pmGame.me.physics.arcade.collide(pmGame.tileGroup.children[0], pmGame.tileGroup.children[1], collisionHandler, null, this);
        //pmGame.me.physics.arcade.overlap(pmGame.tileGroup.children[0], pmGame.tileGroup.children[1], overlapHandler,null,this)
    };
    return SimpleGame;
})();
//function onDragStart(sprite, pointer) {
//    //debugger;
//    pmGame.result = "Dragging " + sprite.key;
//}
//function onDragStop(sprite, pointer) {
//    pmGame.result = sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y;
//}
function collisionHandler(obj1, obj2) {
    //debugger;
}
function dragStart(draggedItem, pointer) {
    pmGame.draggedItemInitX = draggedItem.position.x;
    pmGame.draggedItemInitY = draggedItem.position.y;
    //copySprite.alpha = 1;
    //debugger;
    //alert("ahaDragStart!");
    draggedItem.tint = 0xff00ff;
}
function dragUpdate(sprite, pointer, dragX, dragY, snapPoint) {
    //  As we drag the ship around inc the angle
    //angle += 0.01;
    ////  This just circles the copySprite around the sprite being dragged
    //copySprite.x = dragSprite.x + 220 * Math.cos(angle);
    //copySprite.y = dragSprite.y + 220 * Math.sin(angle);
    ////  And this points the copySprite at the current pointer
    //copySprite.rotation = game.physics.arcade.angleToPointer(copySprite);
}
function dragStop(draggedItem, pointer) {
    //copySprite.alpha = 0.5;
    debugger;
    draggedItem.tint = 16777215;
    var isOverlapped = null;
    var overlappedSprite = null;
    for (var i = 0; i < pmGame.tiles.children.length; i++) {
        if (draggedItem != pmGame.tiles.children[i]) {
            //isOverlapped = pmGame.me.physics.arcade.overlap(draggedItem, pmGame.tiles.children[i])
            isOverlapped = checkOverlap(draggedItem, pmGame.tiles.children[i]);
            if (isOverlapped) {
                overlappedSprite = pmGame.tiles.children[i];
                break;
            }
        }
    }
    if (isOverlapped && overlappedSprite.isInCorrectPosition == false) {
        //Swap tiles - only if incorrect...
        var overlappedSpritePreviousX = Math.round(overlappedSprite.position.x);
        var overlappedSpritePreviousY = Math.round(overlappedSprite.position.y);
        pmGame.me.game.add.tween(draggedItem).to({ x: overlappedSprite.position.x, y: overlappedSprite.position.y }, 500, Phaser.Easing.Quartic.Out, true);
        pmGame.me.game.add.tween(overlappedSprite).to({ x: pmGame.draggedItemInitX, y: pmGame.draggedItemInitY }, 500, Phaser.Easing.Quartic.Out, true);
        pmGame.draggedItemInitX = 0;
        pmGame.draggedItemInitY = 0;
        //see if draggedItem is dropped at the right place!
        if ((overlappedSpritePreviousX == draggedItem.correctX) && (overlappedSpritePreviousY == draggedItem.correctY)) {
            draggedItem.inputEnabled = false;
            draggedItem.isInCorrectPosition = true;
            pmGame.score++;
            draggedItem.tint = 0xff00ff;
        }
        if (pmGame.score == 27) {
            var winningTime = Math.round(pmGame.me.game.time.totalElapsedSeconds());
            if ((winningTime / 60) % 60 < 1) {
                pmGame.result.text = "You Win!!!\n\nYou took " + winningTime + " seconds to complete this game!";
            }
            else {
                pmGame.result.text = "You Win!!!\n\nYou took \n" + Math.round(winningTime / 60) + " minutes " + winningTime % 60 + " seconds\nto complete this game!";
            }
            pmGame.result.visible = true;
            for (var i = 0; i < pmGame.tiles.children.length; i++) {
                pmGame.tiles.children[i].kill();
            }
            for (var i = 0; i < pmGame.headerTiles.children.length; i++) {
                pmGame.headerTiles.children[i].kill();
            }
            pmGame.result.bringToTop();
        }
    }
    else if (overlappedSprite.isInCorrectPosition) {
        pmGame.me.game.add.tween(draggedItem).to({ x: pmGame.draggedItemInitX, y: pmGame.draggedItemInitY }, 500, Phaser.Easing.Quartic.Out, true);
    }
    //debugger;
    //alert("ahaDragStop!");
    //if (checkOverlap(sprite1, sprite2)) {
    //    alert('Overlapping: true');
    //}
    //else {
    //    alert('Overlapping: false');
    //}
}
function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    //debugger;
    var initialOverlapCheckResult = Phaser.Rectangle.intersects(boundsA, boundsB);
    if (initialOverlapCheckResult) {
        return Phaser.Rectangle.intersectsRaw(spriteA, spriteB.left, spriteB.right, spriteB.top, spriteB.bottom, -15);
    }
    else {
        return initialOverlapCheckResult;
    }
}
function overlapHandler(bullet, veg) {
    //debugger;
    if (bullet != veg) {
    }
}
function initTiles(me) {
    //debugger;
    //var me = this;
    initHeaderTiles(pmGame.me);
    //+ Commented out Jaz
    //for (var y = 100; y <= 550; y = y + 50) {
    //    for (var x = 150; x <= 550; x = x + 100) {
    //        pmGame.correctCoords.push({ x: x, y: y });
    //    }
    //}
    //- Commented out Jaz
    //for (var y = 100; y <= 550; y = y + 50) {
    //    for (var x = pmGame.matrixTileWidth * 1.5; x <= pmGame.matrixTileWidth * 1.5 + (4 * pmGame.matrixTileWidth); x = x + pmGame.matrixTileWidth) {
    //        pmGame.correctCoords.push({ x: x, y: y });
    //    }
    //}
    for (var y = pmGame.matrixTileHeight * 1.5; y <= pmGame.matrixTileHeight * 1.5 + (9 * pmGame.matrixTileWidth); y = y + pmGame.matrixTileHeight) {
        for (var x = pmGame.matrixTileWidth * 1.5; x <= pmGame.matrixTileWidth * 1.5 + (4 * pmGame.matrixTileWidth); x = x + pmGame.matrixTileWidth) {
            pmGame.correctCoords.push({ x: x, y: y });
        }
    }
    //debugger;
    var shuffledTileTexts = pmGame.tileTexts.slice();
    Phaser.ArrayUtils.shuffle(shuffledTileTexts);
    var shuffledTileIndex = 0;
    //Draw bounding rectangle..
    var boundingRectX = 0;
    var boundingRectY = 0;
    var boundingRectWidth;
    var boundingRectHeight;
    //if first tile.
    //boundingRectX = tile.position.x;
    //boundingRectY = tile.position.y;
    var bounds = new Phaser.Rectangle(pmGame.matrixTileWidth, pmGame.matrixTileHeight + pmGame.topBuffer, pmGame.matrixTileWidth * 5, pmGame.matrixTileHeight * 10);
    //var graphics = pmGame.me.game.add.graphics(bounds.x, bounds.y);
    //graphics.beginFill(0x000077);
    //graphics.drawRect(0, 0, bounds.width, bounds.height);
    //Loop through each column in the grid
    for (var i = 1; i < pmGame.matrixDataGrid.length; i++) {
        //Loop through each position in a specific column, starting from the top
        //debugger;
        for (var j = 1; j < pmGame.matrixDataGrid[i].length; j++) {
            //Add the tile to the game at this grid position
            var tile = addTile(pmGame.me, j, i, shuffledTileTexts, shuffledTileIndex++);
            pmGame.tiles.add(tile); //Jaz
            //pmGame.me.physics.arcade.enable(pmGame.tileGroup, Phaser.Physics.ARCADE);
            pmGame.me.game.physics.enable([tile], Phaser.Physics.ARCADE);
            tile.body.setSize(pmGame.matrixTileWidth, pmGame.matrixTileHeight, pmGame.matrixTileWidth / 2, pmGame.matrixTileHeight / 2);
            tile.body.immovable = true;
            //Keep a track of the tiles position in our tileGrid
            pmGame.matrixDataGrid[j][i] = tile;
            tile.input.boundsRect = bounds;
        }
    }
}
function initHeaderTiles(me) {
    //Loop through headers
    for (var i = 1; i < pmGame.rowHeadings.length + 1; i++) {
        //Loop through each position in a specific column, starting from the top
        //Add the tile to the game at this grid position
        //var tile = addHeaderTile(me, j, i);
        //var me = this;
        var tileLetter = pmGame.rowHeadings[i - 1];
        var tileColor = pmGame.tileHeaderColors[pmGame.tileHeaderColors.length - 1];
        var tileToAdd = createTile(pmGame.me, tileLetter, tileColor, 1);
        //Add the tile at the correct x position, but add it to the top of the game (so we can slide it in)
        var tile = pmGame.headerTiles.create(pmGame.leftBuffer + (i * pmGame.matrixTileWidth) + pmGame.matrixTileWidth / 2, 0, tileToAdd);
        //tile.inputEnabled = true;
        //tile.input.enableDrag(false, true);
        //tile.onDragStart.add(onDragStart, me);
        //tile.onDragStop.add(onDragStop, me);
        //Animate the tile into the correct vertical position
        pmGame.me.game.add.tween(tile).to({ y: pmGame.topBuffer + (0 * pmGame.matrixTileHeight + (pmGame.matrixTileHeight / 2)) }, 500, Phaser.Easing.Quadratic.InOut, true);
        //Set the tiles anchor point to the center
        tile.anchor.setTo(0.5, 0.5);
        //Keep track of the type of tile that was added
        tile.tileLetter = tileLetter;
        //return tile;
        //Keep a track of the tiles position in our tileGrid
        pmGame.matrixDataGrid[0][i] = tile;
    }
    for (var j = 1; j < pmGame.colHeadings.length + 1; j++) {
        //Loop through each position in a specific column, starting from the top
        //Add the tile to the game at this grid position
        //var tile = addHeaderTile(me, j, i);
        //var me = this;
        //if (j == 0) continue;
        var tileLetter = pmGame.colHeadings[j - 1];
        var tileColor = pmGame.tileHeaderColors[pmGame.tileHeaderColors.length - 1];
        var tileToAdd = createTile(pmGame.me, tileLetter, tileColor, 2);
        //Add the tile at the correct x position, but add it to the top of the game (so we can slide it in)
        var tile = pmGame.headerTiles.create(pmGame.leftBuffer + (0 * pmGame.matrixTileWidth) + pmGame.matrixTileWidth / 2, 0, tileToAdd);
        //tile.inputEnabled = true;
        //tile.input.enableDrag(false, true);
        //tile.onDragStart.add(onDragStart, me);
        //tile.onDragStop.add(onDragStop, me);
        //Animate the tile into the correct vertical position
        pmGame.me.game.add.tween(tile).to({ y: pmGame.topBuffer + (j * pmGame.matrixTileHeight + (pmGame.matrixTileHeight / 2)) }, 500, Phaser.Easing.Bounce.Out, true);
        //Set the tiles anchor point to the center
        tile.anchor.setTo(0.5, 0.5);
        //Keep track of the type of tile that was added
        tile.tileLetter = tileLetter;
        //return tile;
        //Keep a track of the tiles position in our tileGrid
        pmGame.matrixDataGrid[j][0] = tile;
    }
}
function addHeaderTile(me, x, y) {
}
function addTile(me, x, y, shuffledTileTexts, shuffledTileIndex) {
    //var me = this;
    //Choose a random tile to add
    //+ Commented out Jaz
    //var randomInteger = pmGame.random.integerInRange(0, pmGame.tileTexts.length - 1);
    //var tileLetter = pmGame.tileTexts[randomInteger];
    //- Jaz
    //+ Jaz
    var tileLetter = shuffledTileTexts[shuffledTileIndex];
    //- Jaz
    var tileColor = pmGame.tileColors[0];
    var tileToAdd = createTile(pmGame.me, tileLetter, tileColor, 0);
    //Add the tile at the correct x position, but add it to the top of the game (so we can slide it in)
    var tile = pmGame.tiles.create(pmGame.leftBuffer + (x * pmGame.matrixTileWidth) + pmGame.matrixTileWidth / 2, 0, tileToAdd);
    //+ Commented out Jaz
    //tile.correctX = pmGame.correctCoords[randomInteger].x;
    //tile.correctY = pmGame.correctCoords[randomInteger].y;
    //- Jaz
    //+ Jaz
    tile.correctX = pmGame.correctCoords[pmGame.tileTexts.indexOf(tileLetter)].x;
    tile.correctY = pmGame.correctCoords[pmGame.tileTexts.indexOf(tileLetter)].y;
    //- Jaz
    tile.isInCorrectPosition = false;
    tile.inputEnabled = true;
    //tile.input.enableSnap(10, 10, false, true);
    tile.input.enableDrag();
    tile.events.onDragStart.add(dragStart);
    tile.events.onDragUpdate.add(dragUpdate);
    tile.events.onDragStop.add(dragStop);
    //Animate the tile into the correct vertical position
    pmGame.me.game.add.tween(tile).to({ y: pmGame.topBuffer + (y * pmGame.matrixTileHeight + (pmGame.matrixTileHeight / 2)) }, 500, Phaser.Easing.Quadratic.Out, true);
    //Set the tiles anchor point to the center
    tile.anchor.setTo(0.5, 0.5);
    //Keep track of the type of tile that was added
    tile.tileLetter = tileLetter;
    return tile;
}
//
//tileType: 0=gameTiles(draggable), 1=rowHeader, 2=colHeader
//
function createTile(me, letter, color, tileType) {
    //var me = this;
    //debugger;
    var tile = pmGame.me.game.add.bitmapData(pmGame.matrixTileWidth, pmGame.matrixTileHeight);
    var grd = tile.context.createLinearGradient(0, 0, 0, 32);
    //debugger;
    if (tileType == 0) {
        grd.addColorStop(0, '#a90329');
        grd.addColorStop(1, '#6d0019');
        tile.ctx.rect(5, 5, pmGame.matrixTileWidth - 5, pmGame.matrixTileHeight - 5);
        tile.ctx.fillStyle = grd;
        tile.ctx.fill();
        tile.ctx.font = '10px Paprika';
        tile.ctx.fillStyle = '#fff';
        tile.ctx.textAlign = 'center';
        tile.ctx.textBaseline = 'middle';
        wrapText(tile.ctx, letter, pmGame.matrixTileWidth / 2, 15, pmGame.matrixTileWidth - 5, 18);
    }
    else if (tileType == 1) {
        grd.addColorStop(0, '#f9c667');
        grd.addColorStop(1, '#f79621');
        tile.ctx.rect(5, 5, pmGame.matrixTileWidth - 5, pmGame.matrixTileHeight - 5);
        tile.ctx.fillStyle = grd;
        tile.ctx.fill();
        tile.ctx.font = '10px Paprika';
        tile.ctx.fillStyle = '#fff';
        tile.ctx.textAlign = 'center';
        tile.ctx.textBaseline = 'middle';
        wrapText(tile.ctx, letter, pmGame.matrixTileWidth / 2, pmGame.matrixTileHeight / 2, pmGame.matrixTileWidth - 5, 18);
    }
    else {
        grd.addColorStop(0, '#627d4d');
        grd.addColorStop(1, '#1f3b08');
        tile.ctx.rect(5, 5, pmGame.matrixTileWidth - 5, pmGame.matrixTileHeight - 5);
        tile.ctx.fillStyle = grd;
        tile.ctx.fill();
        tile.ctx.font = '10px Paprika';
        tile.ctx.fillStyle = '#fff';
        tile.ctx.textAlign = 'center';
        tile.ctx.textBaseline = 'middle';
        wrapText(tile.ctx, letter, pmGame.matrixTileWidth / 2, pmGame.matrixTileHeight / 2, pmGame.matrixTileWidth - 5, 18);
    }
    //grd.addColorStop(2, '#c3d825');
    //grd.addColorStop(3, '#dbf043');
    //tile.ctx.lineWidth = 20;
    //tile.ctx.fillStyle = '#fff';
    //if (color == '#ffffff') {
    //    tile.ctx.fillStyle = '#000000';
    //}
    //tile.ctx.fillText(letter, 0, pmGame.matrixTileHeight / 2, pmGame.matrixTileWidth);
    //tile.ctx.strokeText("Hello World", 0, pmGame.matrixTileHeight / 2);
    return tile;
}
// http: //www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var cars = text.split("\n");
    for (var ii = 0; ii < cars.length; ii++) {
        var line = "";
        var words = cars[ii].split(" ");
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + " ";
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth) {
                context.fillText(line, x, y);
                line = words[n] + " ";
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
        y += lineHeight;
    }
}
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map