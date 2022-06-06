let campos = document.getElementsByClassName("entrada");

const form = document.getElementById("formulario")

//creacion del mensaje a mostrar
const p = document.createElement("p");
p.id = "advertencia";
//posicion en donde se mostrara
const frm = document.querySelector(".nombre");

let elementos = document.getElementsByClassName("entrada");
let formulario = document.getElementById("formulario")
 let inputs= document.querySelectorAll("#formulario #input");

 //Array.from(document.querySelectorAll('.visible')).forEach((el) => el.classList.toggle('estilo')); 


const validarFormulario = (event) => {
    event.preventDefault();//previene que se recargue la pagina
    //destructuracion del elemento
   // const [name, lastName, email, password] = event.target;
   console.log(event.target.name);
   comporbarCampos();
  
}
form.addEventListener("submit", validarFormulario);

const comporbarCampos = ()=>{
    //let mensaje = document.getElementById("advertencia1");
for(const indice in elementos){
    console.log(elementos[indice].value);
    if(elementos[indice].value===""){
        console.log(`El elemento ${indice} esta vacio`);
        //mensaje.classList.remove("estilo");
        Array.from(document.querySelectorAll('.estilo')).forEach((el) => el.classList.remove('visible'+indice)); 
    }
    
}
}