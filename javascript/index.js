var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesncriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".munieco");
var parrafos = document.querySelector(".parrafos");
var resultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesncriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".texto_area")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classlist.add("ocultar");
    parrafos.classList.add("ocultar"); 
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = texto +texto[i];
        }

    }
    
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "e"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i"
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "o"
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "u"
        }
        else{
            textoFinal = texto +texto[i];
        }

    }
    
}
const btnCopiar = document.querySelector(".copiar");
    btnCopiar.addEventListener("click", copiar = () =>{
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
    })





/*function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }*/
