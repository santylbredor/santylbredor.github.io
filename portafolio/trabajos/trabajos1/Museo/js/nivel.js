function Nivel(pox,path){
//this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
this.contenedor=new THREE.Object3D();
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const geometry1= new THREE.SphereGeometry();
this.bola1= new THREE.Mesh(geometry1,material);

const loader = new THREE.TextureLoader();
this.cube = new THREE.Mesh( geometry, material );
this.cube.position.x=pox;
var vyball=0;
var vzball=0;
 var ayball=-0.0009;
 var azball=0.009;
scene.add( this.cube, this.bola1 );
this.bola1.position.y=6;


this.light2 = new THREE.SpotLight( 0xffffff, 0.5); 
scene.add( this.light2);
this.light2.position.set(0,20,0);
this.light3 = new THREE.PointLight( 0xffffff, 0.05); 
scene.add( this.light3);
//var spotLightHelper = new THREE.SpotLightHelper( this.light3 );
//scene.add( spotLightHelper );

this.light3.position.set(0,5,-55.349);
this.light4 = new THREE.PointLight( 0xffffff, 0.5); 
scene.add( this.light4);
//var spotLightHelpe2 = new THREE.SpotLightHelper( this.light4 );
//scene.add( spotLightHelpe2 );
this.light4.position.set(50.155,15,0);
this.light5 = new THREE.PointLight( 0xffffff, 0.5); 
scene.add( this.light5);
this.light5.position.set(-48.061,12,0);
this.light6 = new THREE.PointLight( 0xffffff, 0.5); 
scene.add( this.light6);
this.light5.position.set(0,9,48.761);
var mixer;

const loaderM = new THREE.FBXLoader();
const texture= new THREE.TextureLoader().load('js/textures/nave.jpg');
loaderM.load( 'js/models/'+path, function ( object ) {

   mixer = new THREE.AnimationMixer( object );

    const action = mixer.clipAction( object.animations[ 0 ] );
    action.play();
    console.log(mixer);

    object.traverse( function ( child ) {

        if ( child.isMesh ) { 

            child.castShadow = true;
            child.receiveShadow = true;
            console.log(child.name)
            
            if(child.name=="TanqueBack"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/paisajes/tanque/posz.jpg')
                        
                                               
                    });
            }if(child.name=="TanqueRT"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/paisajes/tanque/posx.jpg')
                        
                                               
                    });
            }if(child.name=="TanqueTop"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/paisajes/tanque/posy.jpg')
                        
                                               
                    });
            }if(child.name=="TanqueLT"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/paisajes/tanque/negx.jpg')
                        
                                               
                    });
            }if(child.name=="TanqueBottom"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/paisajes/tanque/negy.jpg')
                        
                                               
                    });
                    //__________________________________________________________

                }if(child.name=="PersonajesBack"){
                        child.material=new THREE.MeshLambertMaterial(
                            {map:loader.load('js/paisajes/piolin/posz.jpg')
                                
                                                       
                            });
                    }if(child.name=="PersonajesRT"){
                        child.material=new THREE.MeshLambertMaterial(
                            {map:loader.load('js/paisajes/piolin/posx.jpg')
                                
                                                       
                            });
                    }if(child.name=="PersonajesTop"){
                        child.material=new THREE.MeshLambertMaterial(
                            {map:loader.load('js/paisajes/piolin/posy.jpg')
                                
                                                       
                            });
                    }if(child.name=="PersonajesLT"){
                        child.material=new THREE.MeshLambertMaterial(
                            {map:loader.load('js/paisajes/piolin/negx.jpg')
                                
                                                       
                            });
                    }if(child.name=="PersonajesBottom"){
                        child.material=new THREE.MeshLambertMaterial(
                            {map:loader.load('js/paisajes/piolin/negy.jpg')
                                
                                                       
                            });

                            //-------------------------------------------------
                }if(child.name=="cuerpo"){
                        child.material=new THREE.MeshLambertMaterial(
                            {map:loader.load('js/textures/piolin/cuerpo.jpg')
                                
                                                       
                            });
                        }if(child.name=="ojos"){
                            child.material=new THREE.MeshLambertMaterial(
                                {map:loader.load('js/textures/piolin/ojos.jpg')
                                    
                                                           
                                });
                            }if(child.name=="pelos"){
                                child.material=new THREE.MeshLambertMaterial(
                                    {map:loader.load('js/textures/piolin/pelos.jpg')
                                        
                                                               
                                    });
                                }if(child.name=="espada"){
                                        child.material=new THREE.MeshPhongMaterial(
                                            {map:loader.load('js/textures/espada.jpg'),
                                                                       
                                            });
                                        }if(child.name=="nave"){
                                                child.material=new THREE.MeshPhongMaterial(
                                                    {map:loader.load('js/textures/nave.jpg'),
                                                                               
                                                    });
                                            
                                    
                                    //-----------------------------------------------------
                                }if(child.name=="ArmasBack"){
                                    child.material=new THREE.MeshLambertMaterial(
                                        {map:loader.load('js/paisajes/armas/posz.jpg')
                                            
                                                                   
                                        });
                                }if(child.name=="ArmasRT"){
                                    child.material=new THREE.MeshLambertMaterial(
                                        {map:loader.load('js/paisajes/armas/posx.jpg')
                                            
                                                                   
                                        });
                                }if(child.name=="ArmasTop"){
                                    child.material=new THREE.MeshLambertMaterial(
                                        {map:loader.load('js/paisajes/armas/posy.jpg')
                                            
                                                                   
                                        });
                                }if(child.name=="ArmasLT"){
                                    child.material=new THREE.MeshLambertMaterial(
                                        {map:loader.load('js/paisajes/armas/negx.jpg')
                                            
                                                                   
                                        });
                                }if(child.name=="ArmasBottom"){
                                    child.material=new THREE.MeshLambertMaterial(
                                        {map:loader.load('js/paisajes/armas/negy.jpg')
                                            
                                                                   
                                        });
            
                                        //-------------------------------------------------
                                    }if(child.name=="NavesBack"){
                                        child.material=new THREE.MeshLambertMaterial(
                                            {map:loader.load('js/paisajes/nave/Navefondo.jpg')
                                                
                                                                       
                                            });
                                    }if(child.name=="NavesRT"){
                                        child.material=new THREE.MeshLambertMaterial(
                                            {map:loader.load('js/paisajes/nave/Navert.jpg')
                                                
                                                                       
                                            });
                                    }if(child.name=="NavesTop"){
                                        child.material=new THREE.MeshLambertMaterial(
                                            {map:loader.load('js/paisajes/nave/Navetop.jpg')
                                                
                                                                       
                                            });
                                    }if(child.name=="NavesLT"){
                                        child.material=new THREE.MeshLambertMaterial(
                                            {map:loader.load('js/paisajes/nave/Navelt.jpg')
                                                
                                                                       
                                            });
                                    }if(child.name=="NavesBottom"){
                                        child.material=new THREE.MeshLambertMaterial(
                                            {map:loader.load('js/paisajes/nave/Navebotom.jpg')
                                                
                                                                       
                                            });
                
                                            //-------------------------------------------------
                                
                            }if(child.name=="cuadro1"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/cuadros/beatles2.jpg')                          
                    });
                }if(child.name=="cuadro2"){
                 child.material=new THREE.MeshLambertMaterial(
                     {map:loader.load('js/textures/cuadros/Poster_1.png')                          
                 });  
                } if(child.name=="cuadro3"){
                    child.material=new THREE.MeshLambertMaterial(
                        {map:loader.load('js/textures/cuadros/Sawt.jpg')                          
                    });  
                }if(child.name=="cuadro4"){
                 child.material=new THREE.MeshLambertMaterial(
                     {map:loader.load('js/textures/cuadros/Peace.jpg')                          
                        });

            }if(child.name=="pasted__tanque2"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/tanque/tanque.jpg')
                        
                                               
                    });
            }if(child.name=="pasillo"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/piso/BodenUndDacke_albedo.jpg'),
                    normalmap:loader.load('js/textures/piso/BodenUndDacke_normal.jpg')
                        
                                               
                    });
            }if(child.name=="pasted__tanque2"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/tanque/tanque.jpg')
                        
                                               
                    });
            }if(child.name=="pasted__pedestal_espada"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/pedestales/pedestal2.png')
                        
                                               
                    });
            }
            if(child.name=="puerta1"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/puerta/Props_albedo.jpg')
                        
                                               
                    });
            }if(child.name=="puerta2"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/puerta/Props_albedo.jpg')
                        
                                               
                    });
            }if(child.name=="puerta3"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/puerta/Props_albedo.jpg')
                        
                                               
                    });
            }if(child.name=="puerta4"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/puerta/Props_albedo.jpg')
                        
                                               
                    });
            }
            if(child.name=="Paredes"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/Paredes/color1.jpg'),
                    normalmap:loader.load('js/textures/Paredes/normalcolor1.jpg')
                    
                        
                                               
                    });
            }
            if(child.name=="PisoCentro"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/pisocentro/barra.jpg'),
                    normalmap:loader.load('js/textures/pisocentro/normalbarra.jpg')
                        
                                               
                    });
            }
            if(child.name=="paredpuerta"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/paredpuerta/color.jpg'),
                    normalmap:loader.load('js/textures/paredpuerta/normalcolor.jpg')
                        
                                               
                    });
            }
            if(child.name=="recuadros"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/recuadros/color.jpg'),
                    normalmap:loader.load('js/textures/recuadros/normalcolor.jpg')
                        
                                               
                    });
            }
            if(child.name=="esquinas"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/recuadros/color.jpg'),
                                          
                                               
                    });
            }
            if(child.name=="techo"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:loader.load('js/textures/techo/color.jpg')                                         
                                               
                    });
            }


        }


     } );
    
    scene.add( object );
    object.position.x=pox;
    //object.scale.set(0.2,0.2,0.2);
} );


this.update=function(xd,micaew){

    if(xd.shooter==true){
        if ( mixer ) {
             mixer.update( 0.01 );
            console.log(mixer)
        }
    }
    
    //   

        if(xd.disparando==true){
            
        vyball+=ayball;
        vzball+=azball;  

        //this.bola1.position.z=micaew.rotation.y;
        vzball=20;
        vyball+=micaew.rotation.y;
        
        this.bola1.position.y+=vyball;
        this.bola1.position.z-=vzball;
            console.log(micaew.rotation.y)
        }else if(xd.disparando==false){
            console.log(direction);
         
            this.bola1.position.x=micaew.position.x;
            this.bola1.position.y=micaew.position.y;
            this.bola1.position.z=micaew.position.z;
            
        }
  
        
        
        
    
    }
    
}
