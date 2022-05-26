function Enemigo(pox,path){
//this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
this.contenedor=new THREE.Object3D();
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const loader = new THREE.TextureLoader();
this.cube = new THREE.Mesh( geometry, material );
this.cube.position.x=pox;
scene.add( this.cube );
this.light1 = new THREE.AmbientLight( 0xff0000, 0.01); 
scene.add( this.light1);
this.light2 = new THREE.PointLight( 0xffffff, 0.5); 
scene.add( this.light2);
this.salud=100;
 
var a= -0.01;
var v=0.2;
const loaderM = new THREE.FBXLoader();
const texture= new THREE.TextureLoader().load('js/textures/nave.jpg');
loaderM.load( 'js/models/'+path, function ( object ) {
 
    object.traverse( function ( child ) {

        if ( child.isMesh ) { 

            child.castShadow = true;
            child.receiveShadow = true;
            console.log(child.name)
            
            if(child.name=="nave"){
                child.material=new THREE.MeshLambertMaterial(
                    {map:texture
                        
                                               
                    });
            }
        }


     } );
    
    scene.add( object );
    object.position.x=pox;
    //object.scale.set(0.2,0.2,0.2);
} );
this.update=function(){
    v+=a;
    this.cube.position.y+=v;
    
    }
}
