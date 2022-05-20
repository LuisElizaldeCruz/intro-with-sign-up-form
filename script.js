 let campos = document.getElementsByClassName("entrada");
let valForm = document.getElementById("btn").addEventListener("click",()=>{
    console.log("Script funcionando");
    comprobarCampos();
})

function comprobarCampos(){
  
for(var i=0; i<campos.length; i++){
    if(campos[i].value === ""){
        console.log("el Elemento "+(i+1)+" Esta vacio");
    }
    else{
        console.log(campos[i].value);
    }
}
}