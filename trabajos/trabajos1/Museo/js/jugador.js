function jugador(miCam){
    this.cam=miCam;
    this.salud=100;
    this.disparando=false;
    this.impacto=false;
    this.shooter=false;
    const raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    
    
  
    

    this.actualizar=function(cv,cv1,cv2,cv3,cv4,cv5,cv6,cv7){
        console.log(this.disparando);
        //if(this.disparando==true){
        raycaster.setFromCamera( mouse, this.cam );
        //this.salud-=0.5;
	    const intersects = raycaster.intersectObjects( scene.children, true );

	if ( intersects.length> 0) {
        console.log(intersects[0].object.name);
        
        if(intersects[0].object.name=="P1Tanque"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x+0.04;
            this.cam.position.z = intersects [0].object.position.z-20.048;
        }
        if(intersects[0].object.name=="P2Tanque"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x+0.04;
            this.cam.position.z = intersects [0].object.position.z-38.919;
        }
        if(intersects[0].object.name=="P3Tanque"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x+0.04;
            this.cam.position.z = intersects [0].object.position.z-51.134;
        }
        if(intersects[0].object.name=="PortalCentro"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x;
            this.cam.position.z = intersects [0].object.position.z;
        }
        if(intersects[0].object.name=="P1Personajes"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x+19.897;
            this.cam.position.z = intersects [0].object.position.z-0.13;
        }if(intersects[0].object.name=="P2Personajes"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x+38.768;
            this.cam.position.z = intersects [0].object.position.z-0.13;
        }if(intersects[0].object.name=="P3Personajes"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x+50.983;
            this.cam.position.z = intersects [0].object.position.z-0.13;
        }if(intersects[0].object.name=="P1Naves"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x-0.005;
            this.cam.position.z = intersects [0].object.position.z+19.954;
        }if(intersects[0].object.name=="P2Naves"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x-0.005;
            this.cam.position.z = intersects [0].object.position.z+38.824;
        }if(intersects[0].object.name=="P3Naves"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x-0.005;
            this.cam.position.z = intersects [0].object.position.z+51.039;
        }if(intersects[0].object.name=="P1Armas"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x-19.897;
            this.cam.position.z = intersects [0].object.position.z+0.257;
        }if(intersects[0].object.name=="P2Armas"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x-38.768;
            this.cam.position.z = intersects [0].object.position.z+0.257;
        }if(intersects[0].object.name=="P3Armas"){
            //intersects[0].object.material.color.set(0xff0000);
            this.cam.position.y = intersects [0].object.position.y+6;
            this.cam.position.x = intersects [0].object.position.x-50.983;
            this.cam.position.z = intersects [0].object.position.z+0.257;
        }
        
        if(intersects[0].object.name=="cuadro1"){
            //intersects[0].object.material.color.set(0xff0000);
            cv.position.x=-4;
            cv.position.y=7;
            cv.position.z=-15;
            cv1.position.x=-4;
            cv1.position.y=6;
            cv1.position.z=-15;

        }else{
            cv.position.x=-2;
            cv.position.y=500;
            cv.position.z=-15;
            cv1.position.x=-2;
            cv1.position.y=500;
            cv1.position.z=-15;
        }
        if(intersects[0].object.name=="cuadro2"){
            //intersects[0].object.material.color.set(0xff0000);
            cv2.position.x=12;
            cv2.position.y=7;
            cv2.position.z=-3.1;
            cv3.position.x=12;
            cv3.position.y=6;
            cv3.position.z=-3.1;
            cv2.rotation.y=4.51;
            cv3.rotation.y=4.51;
            //cv2.rotation.y=3.14;
          
            
        }else{
            cv2.position.x=-2;
            cv2.position.y=500;
            cv2.position.z=-15;
            cv3.position.x=-2;
            cv3.position.y=500;
            cv3.position.z=-15;
        }

        if(intersects[0].object.name=="cuadro3"){
            //intersects[0].object.material.color.set(0xff0000);
            cv4.position.x=4;
            cv4.position.y=7;
            cv4.position.z=15;
            cv5.position.x=4;
            cv5.position.y=6;
            cv5.position.z=15;
            cv4.rotation.y=3.14;
            cv5.rotation.y=3.14;
          
            
        }else{
            cv4.position.x=-2;
            cv4.position.y=500;
            cv4.position.z=-15;
            cv5.position.x=-2;
            cv5.position.y=500;
            cv5.position.z=-15;
        }
        if(intersects[0].object.name=="cuadro4"){
            //intersects[0].object.material.color.set(0xff0000);
            
            
            cv6.position.x=-11;
            cv6.position.y=7;
            cv6.position.z=3.5;
            cv7.position.x=-11;
            cv7.position.y=6;
            cv7.position.z=3.5;
            cv6.rotation.y=1.57;
            cv7.rotation.y=1.57;
     
        }else{
            cv6.position.x=-2;
            cv6.position.y=500;
            cv6.position.z=-15;
            cv7.position.x=-2;
            cv7.position.y=500;
            cv7.position.z=-15;
        }
        //__________________________________________________________________________________
if(intersects[0].object.name=="Boton1"){
            //intersects[0].object.material.color.set(0xff0000);
            this.shooter=true;
     
        }else{
            this.shooter=false;
        }
        
                    
	}
    //}
}
function onMouseMove( event ) {
						
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    



if(event.clientX<200){
    camera.rotation.y+=0.01;
    //console.log(event.clientX);	
}
if(event.clientX>200){
    camera.rotation.y-=0.01;
    //console.log(event.clientX);	
}



}
window.addEventListener( 'mousemove', onMouseMove, false );
}