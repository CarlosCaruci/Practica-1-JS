window.onload=inicio;

function inicio(){
   const boton = document.querySelectorAll(".bnt");
   const num1 = document.querySelector(".num1");
   const num2 = document.querySelector(".num2");
    const resultado = document.querySelector(".resultado");
   

   boton.forEach((item)=>{
    item.addEventListener("click", 
    ()=>{

        const dosValores = num1.value+num2.value;
        const validarNumero=isNaN(dosValores)===false;

        if(item.innerHTML=="¿Son iguales?"){

            

            if(validarNumero){   
                if(num1.value===num2.value)
                {resultado.style.color="green",
                resultado.innerHTML ="Son iguales"}
                else{ resultado.innerHTML ="No son iguales";
                resultado.style.color="blue"}
            }

            else(resultado.style.color="red",
                resultado.innerHTML ="Ingresa solo valores numericos"
            )
            
        }


         else if(item.innerHTML=="Numero mayor"){
            if(validarNumero){
                resultado.style.color="green",
                resultado.innerHTML = Math.max(Number(num1.value), Number(num2.value));
            } else( resultado.style.color="red",
                    resultado.innerHTML ="Ingresa solo valores numericos")
             
              
        }
        
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