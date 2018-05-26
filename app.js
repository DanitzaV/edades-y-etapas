var pregunta =  prompt('hola?');
console.log(pregunta)
if(pregunta % 1 == 0 && pregunta !== " " && pregunta != 0 ){
    if (pregunta > 0 && pregunta <= 3) {
        alert("you're a toddler");
    }else if (pregunta > 3 && pregunta <=5) {
        alert("you're a Preschool");
    }else if(pregunta > 5 && pregunta <= 12){
        alert("you're a Gradeschooler")
    }else if(pregunta >12 && pregunta <=18){
        alert("you're a Teen");
    }else if(pregunta > 18 && pregunta <=21){
        alert("you´re a Young Adult")
    }
}else{
    alert('ERROR INGRESA UN NUMERO ');
}
