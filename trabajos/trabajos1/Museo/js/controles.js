document.addEventListener("mousedown", myScript);
document.addEventListener("mouseup", myScript2);
//window.addEventListener( 'mousemove', onMouseMove, false );
var shoot=false
var direction="xd"
function Control(){
 
    this.actualizar=function(obj,xs){
        if(shoot==true){
            console.log("disparar")
            obj.disparando=true;
        }else if(shoot==false){
            obj.disparando="back"
            
            console.log("suelto")
            
            obj.disparando=false;
            
        }
 }

}

function myScript(){
    shoot=true
}
function myScript2(){
    shoot=false
}
