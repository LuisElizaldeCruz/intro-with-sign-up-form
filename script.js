let campos = document.getElementsByClassName("entrada");

/*
let valForm = document.getElementById("formulario").addEventListener("submit",()=>{
   console.log("Script funcionando");
   comprobarCampos();
})
*/

const form = document.getElementById("formulario")

/*
//se mantiene el codigo creado previamnete con fines de analisis
const comprobarCampos =(event)=>{
  event.preventDefault()
for(var i=0; i<campos.length; i++){
    if(campos[i].value === ""){
        console.log("el Elemento "+(i+1)+" Esta vacio");
    }
    else{
        console.log(campos[i].value);
    }
}
}

*/
//creacion del mensaje a mostrar
const p = document.createElement("p");
p.id = "advertencia";
//posicion en donde se mostrara
const frm = document.querySelector(".nombre");


const comprobarCampos = (event) => {
    event.preventDefault();//previene que se recargue la pagina
    //destructuracion del elemento
    const [name, lastName, email, password] = event.target;

    /*
   //manera tradicional de solicitar el valor del campo de texto
   console.log(event.target.name.value,
               event.target.lastName.value,
               event.target.mail.value,
               event.target.password.value);
   */
    //console.log(name.value,lastName.value,email.value,password.value);
    
    if (name.value === "") {
        p.textContent = "El campo no debe estar vacio";
        frm.insertAdjacentElement("afterend", p);
    }
    else if (lastName.value === "") {
        const frm = document.querySelector(".apellido");
        p.textContent = "El campo apellido no debe estar vacio";
        frm.insertAdjacentElement("afterend", p);
    }
}
form.addEventListener("submit", comprobarCampos);

