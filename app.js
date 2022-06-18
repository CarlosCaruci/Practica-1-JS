window.onload=inicio;

function inicio(){
   const boton = document.querySelectorAll(".bnt");
   const num1 = document.querySelector(".num1");
   const num2 = document.querySelector(".num2");
    const resultado = document.querySelector(".resultado");
   

   boton.forEach((item)=>{
    item.addEventListener("click", 
    ()=>{
        if(item.innerHTML=="¿Son iguales?"){
            if(num1.value===num2.value){resultado.innerHTML ="Son iguales"}
            else{ resultado.innerHTML ="No son iguales"}}


         else if(item.innerHTML=="Numero mayor"){
             resultado.innerHTML = Math.max(Number(num1.value), Number(num2.value)); 
        }
        
         else if(item.innerHTML=="Numero menor"){resultado.innerHTML=Math.min(Number(num1.value), Number(num2.value))}
         
         
        })
        
}) 

}