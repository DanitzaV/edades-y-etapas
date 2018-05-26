var pregunta =  prompt('hola?');
console.log(pregunta)
if(pregunta % 1 == 0 && pregunta !== " " && pregunta != 0){
    if (pregunta > 0 && pregunta <= 3) {
        alert("you're a toddler");
    }
}else{
    alert('ERROR INGRESA UN NUMERO ');
}
