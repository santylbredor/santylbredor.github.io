const scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//const controls = new THREE.OrbitControls( camera, renderer.domElement );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var effect= new THREE.StereoEffect(renderer);
var loader = new THREE.FontLoader();
    loader.load( 'js/2.json', function ( font ) {

    var textGeometry = new THREE.TextGeometry( "The Beatles", {

    font: font,

    size: 1,
	height:1,
  
  });
  var textGeometry1 = new THREE.TextGeometry( "2021", {

    font: font,

    size: 0.5,
	height:1,
    

  });
  var textGeometry2 = new THREE.TextGeometry( "Concept Art:", {

    font: font,

    size: 0.7,
	height:1,
    

  });
  var textGeometry3 = new THREE.TextGeometry( "Trago Amargo 2021", {

    font: font,

    size: 0.3,
	height:1,
    

  });
  var textGeometry4 = new THREE.TextGeometry( "Futura Esposa:", {

    font: font,

    size: 0.7,
	height:1,
    

  });
  var textGeometry5 = new THREE.TextGeometry( "Antes de sopó", {

    font: font,

    size: 0.3,
	height:1,
    

  });
  var textGeometry6 = new THREE.TextGeometry( "Desolation Row", {

    font: font,

    size: 0.6,
	height:1,
    

  });
  var textGeometry7 = new THREE.TextGeometry( "           By: Camilo", {

    font: font,

    size: 0.25,
	height:1,
    

  });

  var textMaterial = new THREE.MeshPhongMaterial( 
    { color: 0xff0000 }
  ); var textMaterial1 = new THREE.MeshPhongMaterial( 
    { color: 0x6A65E0 }
  );
  var textMaterial2 = new THREE.MeshPhongMaterial( 
    { color: 0xE3AB64}
  );
  var textMaterial3 = new THREE.MeshPhongMaterial( 
    { color: 0x5DC778}
  );

   this.letra = new THREE.Mesh( textGeometry, textMaterial );
    this.letra2= new THREE.Mesh(textGeometry1,textMaterial);
    this.letra3 = new THREE.Mesh( textGeometry2, textMaterial1 );
    this.letra4= new THREE.Mesh(textGeometry3,textMaterial1);
    this.letra5 = new THREE.Mesh( textGeometry4, textMaterial2 );
    this.letra6= new THREE.Mesh(textGeometry5,textMaterial2);
    this.letra7=new THREE.Mesh(textGeometry6,textMaterial3);
    this.letra8=new THREE.Mesh(textGeometry7,textMaterial3);

  scene.add( this.letra,this.letra2,this.letra3,this.letra4,this.letra5,this.letra6,this.letra7,this.letra8 );
  //this.letra.position.set(-5,5,-15);

});   
camera.position.set(0,6,0);


var n1=new Nivel(0,"Prueba1.fbx");
//var n2=new Nivel(0,"PuertaTanque.fbx");
var p1 =new jugador(camera);
var controles = new Control();
var admin= new Adminreg(p1);

const animate = function () {
	requestAnimationFrame( animate );

		p1.actualizar(this.letra,this.letra2,this.letra3,this.letra4,this.letra5,this.letra6,this.letra7,this.letra8 )
		controles.actualizar(p1,n1);
		admin.actualizar()
		n1.update(p1,camera);
		//effect.render( scene, camera );
		renderer.render( scene, camera );

	};

	animate();