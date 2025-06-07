//Arreglos o Arrays
//Switch como estructura de control

var contador=0;
let resultados= new Array();
let operaciones= new Array();

function main(){
    let n1= document.getElementById("number1");
    let n2=document.getElementById("number2");
    let optMath= document.getElementById("operacion");
    let btnSubmit= document.getElementById("btnSubmit");
    let tBody= document.querySelector(".body-table");
    
    mostrarResultado(n1,n2,optMath,btnSubmit,tBody)
}

function mostrarResultado(n1,n2,optMath,btn,bodyT){
let result;
    btn.onclick= function (){
        let text="";
        let clase="";
    //Validando datos
    if(n1.value!="" && n2.value!="" && optMath.value!="0"){
       let numero1=Number(n1.value);
       let numero2=Number(n2.value);

       //NaN not a number
        if(isNaN(numero1)==false && isNaN(numero2)==false){ //Investigar Profe
            //Parseo de Variables
            operaciones.push(`${n1.value} ${optMath.value} ${n2.value}`);
            resultados.push(calcular(Number(n1.value),Number(n2.value),optMath.value))
            mostrarTabla(bodyT);
            validar(text,clase,false)
            document.getElementById("form-calculadora").reset();//limpiamos el formulario
            
         }else{
             text="Debe de ingresar numeros ya sea enteros o con decimal."
             clase="alert-warning"
            validar(text,clase,true)
        } 
       
        }else{
           
            text="Debe ingresar todos los valores del formulario."
             clase="alert-warning"
            validar(text,clase,true)
        }
                
        
    }

}
/* 
Tablas de verdad
*/
function calcular(n1,n2,opt){
    let result=0;

    //Switch
    switch (opt) {
        case "+":
             result=n1+n2;
            break;
        case "-":
             result=n1-n2;   
         break;
    
        default:
            alert("Seleccione la operacion de sumar o restar")
            break;
    }


/*     if(opt=="+"){
        result=n1+n2;
    }

    if(opt=="-"){
        result=n1-n2;
    }

    if(opt!="+" && opt!="-"){
        alert("Seleccione la operacion de sumar o restar")
        return
    } */

    return result;
}

function mostrarTabla(tabla){
      //Construir tabla
     let html="";
      for (let i = 0; i < operaciones.length; i++) {
            html+=`<tr>
                    <td> ${i+1} </td>
                    <td>${operaciones[i]}</td>
                    <td>${resultados[i]}</td>
                  </tr>`
      }

        tabla.innerHTML=html;           
}

function validar(texto,clase,flag){
     let alert= document.getElementById("alert-form");

    if(flag){
       
        alert.textContent=texto;
        alert.classList.add(clase);
        alert.removeAttribute("hidden")
    }else{
        alert.textContent="";
        alert.setAttribute("hidden",true)
    }
   

}

main();

//Arreglos

//let nombres= new Array(); declarar e inicializar vacio
//let nombres= []; declarar e inicializar vacio

//Un arreglo es una coleccion de datos del mismo tipo.
//Un arreglo comienza a contarse de 0.
// Posiciones y valores
//Posiciones: 3
//Valores: 4
//let nombres=["Dina","Kevin","Liz","Devin"] //String
//nombres.push("Rony");
//Un arreglo trabaja de la mano con los ciclos
//nombres[3]
//For, while, do while

//5<=5
/* for (let i= 0; i < nombres.length; i++) {
    console.log(i)
    console.log(nombres[i])
    
} */



