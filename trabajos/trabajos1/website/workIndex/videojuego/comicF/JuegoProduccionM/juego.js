var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example',{ preload: preload,create : create, update : update, render : render});

function preload() {


    game.stage.backgroundColor = '#85b5e1';
    game.load.tilemap('map', 'MAPA.csv', null, Phaser.Tilemap.CSV);
    //game.load.tilemap('map', 'nuevoooooo.csv', null, Phaser.Tilemap.CSV);
    game.load.image('tiles', 'tilemapLinea.png');
    //game.load.image('tiles', 'tilemap2.png');
    
    //game.load.baseURL = 'http://examples.phaser.io/assets/';
    //game.load.crossOrigin = 'anonymous';
    
    game.load.spritesheet('player', 'spritesplayer.png', 62, 56);
    game.load.spritesheet('coin', 'preso.png', 43, 50);
    game.load.spritesheet('gun', 'pistolaa.png', 69, 33);
    game.load.image('ship', 'player.png');
    game.load.image('background', 'Fondo.png');
    game.load.image('backgroundNegro', 'Fnegro.jpg');
    game.load.image('inst', 'inst2.png');

    //game.load.spritesheet('enemy', 'enemy.png',89,90);
    game.load.spritesheet('malos', 'Demon.png',74,112);


    //game.load.spritesheet('fireballl', 'meteoro.png', 192, 192);
    game.load.spritesheet('fireballl', 'meteoro1.png', 27, 52);
    //192, 192
    //game.load.spritesheet('invader', 'meteoro.png', 32, 32);

    

    //Audios a usar
    //game.load.audio('AuShot', 'shot.wav');
    game.load.audio('AuShot', 'pistol.wav');
    game.load.audio('music', 'musicafondo.mp3');
    game.load.audio('muerte', 'muerto.mp3');
    game.load.audio('saltar', 'saltar.wav');
    game.load.audio('monedaR', 'moneda.mp3');  
    game.load.audio('muerte2', 'kill.wav');
    game.load.audio('explosion', 'explode.wav');
    game.load.audio('Victory', 'victory.mp3');
    game.load.audio('gracias', 'gracias.mp3');
  
    }

    var player;
    var facing = 'left';
    var platforms;
    var cursors;
    var jumpButton;
    var bullets;
    var bulletTime = 0;
    var MonedasRecolect;
    var map;
    var layer;
    var fireball;
    var enemigos;
    var scoreString = '';
    var livesString = '';
    var rescatesString = '';
    var livesText;
    var lives;
    var finalString = '';
    var GunRe = '';
    var explosions;
    var score = 7;
    
   
    var bola
    var lava;
    var cue; 
    var bg; 
    var inst;
    var monedaa;
    var musicf;
    var fuegoo;
    var fuegooo;
    var final;
    var t=0;
    var alien;
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }
    var styleTitulo = { font: "bold 44px Arial", fill: "green", boundsAlignH: "center", boundsAlignV: "middle" }
    var styleRescates = { font: "bold 80px Arial", fill: "red", boundsAlignH: "center", boundsAlignV: "middle" }




    function create() {
    
        //FONDO FIJO
        bg = game.add.tileSprite(0, 0, 6080, 800, 'background');


        //bg.fixedToCamera = true;
        AuShott = game.add.audio('AuShot');
        musicf = game.add.audio('music');
        muerteS = game.add.audio('muerte');
        saltarr = game.add.audio('saltar');
        monedaa = game.add.audio('monedaR');
        muerte2 = game.add.audio('muerte2');
        explosion = game.add.audio('explosion');
        victoria = game.add.audio('Victory');
        gracias = game.add.audio('gracias');
        
        musicf.loop=true;
        musicf.volume = 0.1;
        musicf.play();
        
    
        MonedasRecolect = game.add.group();

        MonedasRecolect.create(1100, 150, 'coin');
        MonedasRecolect.create(1195, 497, 'coin');
        MonedasRecolect.create(1692, 498, 'coin');
        MonedasRecolect.create(1468, 50, 'coin');
        MonedasRecolect.create(1818, 114, 'coin');
        MonedasRecolect.create(734, 144, 'coin');
        MonedasRecolect.create(1705, 242, 'coin');
        
        MonedasRecolect.callAll('animations.add', 'animations', 'spinnnn', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
        MonedasRecolect.callAll('animations.play', 'animations', 'spinnnn');
        //aliens.physicsBodyType = Phaser.Physics.ARCADE;


        GunRecolect = game.add.group();

        GunRecolect.create(5610, 535, 'gun');

        /*MonedasRecolect = game.add.sprite(1776, 488, 'coin');
        MonedasRecolect = game.add.sprite(2410, 328, 'coin');
        MonedasRecolect = game.add.sprite(3107, 424, 'coin');
        MonedasRecolect = game.add.sprite(3234, 392, 'coin');
        MonedasRecolect = game.add.sprite(3355, 360, 'coin');
        MonedasRecolect = game.add.sprite(3632, 200, 'coin');
        MonedasRecolect = game.add.sprite(4120, 136, 'coin');
        */
        
       // MonedasRecolect.play('coin')
       
        MonedasRecolect.enableBody = true;
        game.physics.arcade.enable(MonedasRecolect); 

        GunRecolect.enableBody = true;
        game.physics.arcade.enable(GunRecolect); 
        
            ///////////////////////////////////////           { font: '40px Arial', fill: '#fff' }
            
            // How to play
            InsString = 'Saltar ';
            scoreText = game.add.text(44, 280, 'Liberando la Multimedia Histórica', styleTitulo ); 
   
            // Score
            scoreString = 'Rescates Pendientes : ';
            scoreText = game.add.text(20, 120, scoreString + score, style);
            scoreText.fixedToCamera = true 

            //  Lives
            lives = game.add.group();
            livesString = 'Vidas : ';
            livesText = game.add.text(555, 120, livesString, style);
            lives.fixedToCamera = true;
            livesText.fixedToCamera = true;
            //lives.text.fixedToCamera = true
            
            stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
            stateText.anchor.setTo(0.5, 0.5);
            stateText.visible = false;
            stateText.fixedToCamera = true;

            for (var i = 0; i < 3; i++) 
            {
                var ship = lives.create(game.world.width - 115 + (40 * i), 140, 'ship');
                ship.anchor.setTo(0.5, 0.5);
            }
        

            ///////////////////////////////////////
            

            map = game.add.tilemap('map', 32, 32);

            //  Now add in the tileset
            map.addTilesetImage('tiles');
            
            //  Create our layer
            layer = map.createLayer(0);
        
            //  Resize the world
            layer.resizeWorld();
            
            map.setCollisionBetween(0,2);
            map.setCollisionBetween(4,6);
            map.setCollisionBetween(8,12);
            map.setCollisionBetween(14,15);

  

            //player = game.add.sprite(6000, 200, 'player');
            player = game.add.sprite(200, 200, 'player');
           // player = game.add.sprite(1100, 200, 'player');

            inst = game.add.sprite(280, 340, 'inst');

            game.physics.arcade.enable(player);
        
            player.body.collideWorldBounds = true;
            player.body.gravity.y = 1000;      

            player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 9, true);
            player.animations.add('turn', [11], 1, true);
            player.animations.add('right', [ 10, 11, 12, 13, 14, 15, 16, 17], 8, true);

            player.animations.add('jumpp', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 10, true);

            //enemigos.animations.add('siempre', [0, 1, 2, 3, 4], 9, true);

            //player.animations.add('shot', [42,43], 2, true);
            //39,40,

            //fireball.animations.add('BallDown', [ 0, 1], 8, true);
            
            //playershot.animations.add('f', [ 3, 4], 8, true);
            

            cursors = game.input.keyboard.createCursorKeys();
            jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            
        
            game.physics.enable(player, Phaser.Physics.ARCADE);

            cursors = game.input.keyboard.createCursorKeys();
            game.input.keyboard.addKeyCapture([ Phaser.Keyboard.F ]);

        
            game.camera.follow(player);


            enemigos= game.add.physicsGroup();
            //enemigos.enableBody=true;
            enemigos.y=-500;
            map.createFromTiles(15,-1,'malos',layer,enemigos);
            enemigos.callAll('animations.add', 'animations', 'spinnn', [0, 1, 2, 3, 4], 10, true);
            enemigos.callAll('animations.play', 'animations', 'spinnn');

        }

        var Yabajo = 0;
        var Yarriba = 0;

    function createEnemy (mn) 
    { 
        
        var Rx=Math.random();
        var Ry=Math.random()*10;
        var Ry2=Math.random()*10;
        //alert(Rx,Ry);
        //console.log(Ry)
       // enemies.x = 1000;
        //aliens.y = 500;
        
       // enemies.y+=Math.sin(t*0.04)*7;

       // if(aliens.y<=1)
        //{
            //aliens.y = 2;
        //    aliens.y = (Yabajo++);
        //    console.log(aliens.y);
        //}
        /*
        if(aliens.y>=500)
        {
            aliens.y = 500-Yarriba++;
            //console.log(aliens.y)
        }
        if(aliens.y<=100)
        {
            aliens.y = 100-Yabajo--;
            console.log(aliens.y)
        }
        */

        //if(aliens.y>=984)
        //{
           // aliens.y = 1;
            //console.log(aliens.y)
        //}
       

           
    }
      

            //fuegoo = game.add.sprite(player.x , 0, 'fireballl');
            //fuegoo.animations.add('BallDown', [ 0,  ], 10, true);
            //fuegoo.play('BallDown')
            //game.physics.arcade.enable(fuegoo);




    // Alt+shif+F = ORDENAR CODIGO
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    function lluvia(){
        var r=Math.random();
        var rr=Math.random();

//2615
        if(player.x>=2615 & player.x<=5288 ){
            if(r<0.006){

                    fuegoo = game.add.sprite(player.x , 0, 'fireballl');
                    fuegoo.animations.add('BallDown', [ 0,  ], 10, true);
                    fuegoo.play('BallDown')
                    game.physics.arcade.enable(fuegoo);
                    //fuegoo.anchor.setTo(10, 10);
                    //fuegoo.anchor.x = 1;
                    //fuegoo.anchor.y = 1;
                    //fuego.body.collideWorldBounds = true;
                    fuegoo.body.gravity.y = 500;
                    if(fuegoo.y>578)
                    {
                        fuegokill();
                    }
            }
            
                if(r<0.007 & player.x<=5288){
    
                    fuegooo = game.add.sprite(player.x +  (rr*2000), 0, 'fireballl');
                    fuegooo.animations.add('BallDown', [ 0, 1, 2, 3, 4], 10, true);
                    fuegooo.play('BallDown')
                    game.physics.arcade.enable(fuegooo);
                    //fuegooo.anchor.x = 1;
                    //fuegooo.anchor.y = 1;
                    //fuego2.body.collideWorldBounds = true;
                    fuegooo.body.gravity.y = 400;
                    if(fuegooo.y>578)
                    {
                        fuegokill();
                    }
    
                } 
                
            }

            //rescatesString.fixedToCamera = false;
            }

        //function DejarRescatesCheck()
    //{
    //if(player.x>=2477){
    
        //rescatesString.x=-1000
       // alert("si funciona");
        //rescatesString.fixedToCamera = false;
        
   // }

    //} 


    function update () 
    {
        t+=0.5;
        createEnemy();
        lluvia();
        mover();
        game.physics.arcade.collide(player, layer);
        
        //game.physics.arcade.collide(aliens, layer);
        game.physics.arcade.overlap(player, fuegoo, F, null, this);
        game.physics.arcade.overlap(player, fuegooo, F, null, this);
     
        game.physics.arcade.overlap(player, enemigos, F, null, this);

        //game.physics.arcade.overlap(bullets, fuegoo, collisionHandler, null, this);
        //game.physics.arcade.overlap(bullets, fuegooo, collisionHandler2, null, this);
        game.physics.arcade.overlap(player, MonedasRecolect, collectCoin, null, this);
        game.physics.arcade.overlap(player, GunRecolect, collectGun, null, this);

       

        

        //game.physics.arcade.collide(player, fuego);
        //bola.foreach
    
    
        if(player.y>=578){
        F();
        }
        
        
        // player position

        player.body.velocity.x = 0;

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -150;

            if (facing != 'left')
            {
                player.animations.play('left');
                facing = 'left';
                //player.scale.x=-1;
            }
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 150;

            if (facing != 'right')
            {
                player.animations.play('right');
                facing = 'right';
            //player.scale.x=1;
            }
        }
        else
        {
            if (facing != 'idle')
            {
                player.animations.stop();

                if (facing == 'left')
                {
                    player.frame = 8;
                }
                else
                {
                    player.frame = 9;
                }

                facing = 'idle';
            } 
        }

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -250;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 250;
        }
        
        
        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
        {
            player.body.velocity.y = -445;

            player.animations.play('jumpp')
            saltarr.play();

            if(player.onFloor){
                facing = 'idle';
            }
        

        
        //if(jumpButton.isDown){
        //player.animations.play('jumpp')}
       // else{}
        } 

        if (game.input.keyboard.isDown(Phaser.Keyboard.F))
        {
            
          
            RescatesCheck();
            
            
        }


        function collectCoin(jug, mon) 
        {
    
            mon.kill();
            //if(mon.kill()){score -= 1; }
            score -= 1; 
            scoreText.text = scoreString + score;

            gracias.play();
            gracias.volume = 0.2;
        
        }
        
        function collectGun(jug, a) 
        {
            a.kill();
            //if(mon.kill()){score -= 1; }
            //score -= 1; 
            //scoreText.text = scoreString + score;
            monedaa.volume = 0.1;
           
            monedaa.play();
            final = game.add.sprite(player.x-500, 0, 'backgroundNegro');



            GunRe="        ¡FIN!\n¿Lo matarias? \n      SI o NO \n  ";
    
            finalString = game.add.text(300, 200 , GunRe ,style);
            finalString.fixedToCamera = true;
            game.camera.unfollow(player);
            
        
        }

        if(score==0)
        {

            RescatesCheck();
           
        }
   


        function RescatesCheck()
        {
            rescatesString="  RESCATES CUMPLIDOS \n ¡CONTINUA AVANZANDO!";
                        
            scoreText.fixedToCamera = false; 

            rescatesString = game.add.text(1080, 280 , rescatesString ,styleRescates);
            rescatesString.fixedToCamera = false;
            victoria.play();
            enemigos.kill();
        // DejarRescatesCheck();
        }

    
    }



    function mover(){
        //const x = 120* Math.cos(angulo);
        
        enemigos.y+=(Math.sin(t*0.01)*5);
        //console.log(enemigos.y)
        //enemigos.position.set(x,0);
        //enemigos.x+=(Math.cos(t*0.004)*1)
    }



    function fuegokill () 
    {

        fuegoo.kill();
        fuegooo.kill();
    
    }
       
    function render () 
    {
        //game.debug.cameraInfo(game.camera, 32, 32);
        //game.debug.spriteCoords(player, 32, 500);
    }

    function moverse (bola)
    {
        
        bola.y++
    }

    ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

    function collisionHandler (bullet, fuegoo) 
    {
        
        explosion.play();
        bullet.kill();
        fuegoo.kill();
    
        //  Increase the score
        score += 10;
        scoreText.text = scoreString + score;

    }

    function collisionHandler2 (bullet, fuegooo)
    {
       
            explosion.play();
            bullet.kill();
            fuegooo.kill();

        //  Increase the score
        score += 10;
        scoreText.text = scoreString + score;

        //  And create an explosion :)


    }

    

    
    ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

    function F (abc) 
    { 
        
        live = lives.getFirstAlive();
        live.kill();
        //
        
        muerte2.play();
        muerteS.volume = 0.2;
        player.x = 40;
        player.y = 482;

        if (lives.countLiving() < 1)
        {
            player.kill();
            //enemyBullets.callAll('kill');
           
            stateText.text="     Fin del Juego \n Click para reiniciar";
            stateText.visible = true;
            musicf.pause();
            muerteS.play();
            muerteS.volume = 1;
            //the "click to restart" handler
            
            game.input.onTap.addOnce(restart,this);

        }
            
            
    }

    function F2(player)
    { 
        player.x = 40;
        player.y = 482;

        live = lives.getFirstAlive();
        if(live<=3)
        {
            live.kill();
        }
        if(lives.countLiving()<1)
        {
            player.kill();
            game.input.onTap.addOnce(restart,this);
        }
    }


    function gg()
    {
        //Ganar
           musicf.stop();
           victory.play();            
           scoreText.text = scoreString + score;
           stateText.text = " You Won \n  Score: "+ score;
           
           stateText.visible = true;
           game.input.onTap.addOnce(restart,this);

          // victoria.play();
   }
    ////////////////////////////////////////////////////////////////////////////////
    //map.setCollisionBetween(0,2);



    function restart () 
    {

        //  A new level starts
        
        //resets the life count
        lives.callAll('revive');
        //  And brings the aliens back from the dead :)
     
    
        //revives the player
        player.revive();
        //hides the text
        stateText.visible = false;
    
    }
 