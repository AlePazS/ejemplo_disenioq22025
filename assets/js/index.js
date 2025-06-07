let name=document.getElementById("name");
let age=document.getElementById("age");
let chkInfo=document.getElementById("chkInfo");
let listInfo=document.getElementById("list-info");
let btnSubmit=document.getElementById("btnSubmit");

btnSubmit.onclick= function (){
    //Llamar a una funcion que arme la lista
    creatList();

   

}

/* 
Signos de comparacion
== Igual a
=== Igual en valor y en tipo de dato
!= Distinto a
> Mayor que
< Menor que
>= Mayor o igual
<= Menr o igual
&& And o Y
|| Or o O

*/

function creatList(){
    let html=""; //Creando y asignando un valor vacio string
    /* html="<li class='list-group-item'>Nombre: "+name.value+"<br> Edad: "+age.value+"</li>"; */ //Concatenacion o union de texto con variables
    let info="No";
    //IF simple
  /*   if(chkInfo.checked==true){
        //codigo
        info="Si";
    } */

        //IF - ELSE
        if(chkInfo.checked){
            info="Si";
        }else{
            alert("No desea obtener informacion?");
            return;
        }


    html=`
        <li class="list-group-item">
         Nombre: ${name.value} <br>
         Edad: ${age.value} <br>
         Informacion: ${info}
        </li>
        `;

    
    listInfo.innerHTML+=html;

    name.value="";
    age.value="";
    chkInfo.checked=false;
}



//DOM - Document Object Model
