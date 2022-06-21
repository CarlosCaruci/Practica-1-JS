window.onload=inicio;


//PRIMERO SE CARGA EL DOCUMETNO JTML Y LUEGO SE EJECUTA EL JS
function inicio(){
    alert("Coloca dos cantidades y te dire; Cual es el numero mayor el menor y si son iguales")
   const boton = document.querySelectorAll(".bnt");
   const num1 = document.querySelector(".num1");
   const num2 = document.querySelector(".num2");
    const resultado = document.querySelector(".resultado");
   
//EL METODO forEach RECORRE TODOS LOS BOTONES
//CON EL PARAMETRO (ITEM) Y LOS PREPARA PARA LA EL METODO
//addEventListener EL CUAL SI HACEN CLICK EN ALGUN BOTON
//EJECUTA UN CODIGO
   boton.forEach((item)=>{
    item.addEventListener("click", 
    ()=>{

//AQUI SE LLAMAN A LOS DOS VALORES DE LOS INPUT Y SE SUMAN
//PARA VALIDARLOS CON MAS FACILIDAD
        const dosValores = num1.value+num2.value;

//AQUI SE VALIDA QUE LOS DOS INPUT SEAN NUMEROS (ESTO ES MAS QUE 
//TODO PARA REDUCIR LA CANTIDAD DE CODIGO ESCRITO EN LAS CONDICIONES)
        const validarNumero=isNaN(dosValores)===false;

// AQUI SE DETECTA SI SE DA CLICK EN EL BOTON ¿Son iguales? 
//Y SI ES ASI, SE EJECUTA EL SIGUIENTE CODIGO
        if(item.innerHTML=="¿Son iguales?"){
// SE LLAMA A LA VARIABLE validarNumero CON EL CODIGO ANTERIOR ESCRITO 
            if(validarNumero){
                //SI LOS DOS INPUT SON IGUALES 
                if(num1.value===num2.value)
                //SE CAMBIA EL COLOR SEL TEXTO Y SE AÑADE EL TEXTO "Son iguales"
                {resultado.style.color="green",
                resultado.innerHTML ="Son iguales"}
                //SI NO SON IGUALES LOS INPUTS SE CAMBIA EL COLOR DEL TEXOT AZUL
                //Y SE IMPRIME "No son iguales"
                else{ resultado.innerHTML ="No son iguales";
                resultado.style.color="blue"}
            }
// SI EL VALOR INGRESADO EN LOS INPUT NO SON NUMEROS SE CAMBIA EL TEXTO A COLOR 
//ROJO Y SE IMPRIME "Ingresa solo valores numericos" 
            else(resultado.style.color="red",
                resultado.innerHTML ="Ingresa solo valores numericos"
            )
            
        }

// SI SE DETECTA CLICK EN EL BOTON "Numero mayor" SE EJECUTA EL CODIGO
         else if(item.innerHTML=="Numero mayor"){
            //SE LLAMA EL CODIGO ESCRITO ANTERIORMENTE Y SI LOS DATOS DE LOS INPUTS
            //SON CORRECTOS SE CAMBIA EL COLOR DEL TEXTO Y SE IMPRIME EL NUMERO MAYOR
            if(validarNumero){
                resultado.style.color="green",
            //(OJO CON ESTO) PARA ACEDER AL NUMERO MAYOR DE LOS IMPUTS SE UTILIZA UN 
            //METODO LLAMADO "Math.max()" QUE COMPARA ENTRE TODOS LOS DATOS (EN ESTE CASO LOS DOS INPUTS)
            // Y IMPRIME EL NUMERO MAYOR
                resultado.innerHTML = Math.max(Number(num1.value), Number(num2.value));
            }
            //SI EL DATO INTRODUCIDO NO ES UN NUMERO SE IMPRIME LO SIGUIENTE 
            else( resultado.style.color="red",
                    resultado.innerHTML ="Ingresa solo valores numericos")
             
              
        }
        
// ESTA PARTE ES IGUAL QUE LA ANTERIOR PERO LO UNICO QUE SE DEBE CAMBIAR ES EL
//METODO "Math.max()" A  "Math.min()" QUE IMPRIME EL NUMERO MENOR. 
         else if(item.innerHTML=="Numero menor"){
             if(validarNumero){
                resultado.style.color="green",
                resultado.innerHTML=Math.min(Number(num1.value), Number(num2.value))
            } else( resultado.style.color="red",
                    resultado.innerHTML ="Ingresa solo valores numericos")



            
         }
        })
}) 

}