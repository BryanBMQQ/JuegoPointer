//llama a elemento player y el  mousedown para click en circulo(player) para usar la funcion sumarPuntos
document.getElementById('player').addEventListener("mousedown",sumarPuntos);
puntos = 0;
tiempo = 30;
validos = 30;
//funcion para el puntaje y deslizamiento del circulo con id = puntos y player de html 
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "PUNTAJE: <b>" + puntos +"/"+validos+ " Pts</b>";
    randNum = Math.round(Math.random()*600);
    randNum2 = Math.round(Math.random()*400);
    document.getElementById("player").style.marginTop =randNum + "px";
    document.getElementById("player").style.marginLeft =randNum2 + "px";
    if(puntos==30){
        alert("GANASTE");
        puntos = 0;
    }

}
// funcion para el tiempo restar con setInterval llama  a la funcion restTiempo y resta  1 seg
function restTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;TIEMPO: "+tiempo+" Seg";
    if ( tiempo==0){
        alert("ACABO EL TIEMPO")
        tiempo = 30;
    }   
}

setInterval(restTiempo,1000);
