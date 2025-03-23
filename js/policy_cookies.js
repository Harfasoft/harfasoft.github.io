window.onload = function(){
    if(localStorage.politica > 0){document.getElementById("id_galletas").style.bottom = "-50px";}
    document.getElementById("aceptar_cookies").onclick = function(){localStorage.politica = (localStorage.politica || 0); localStorage.politica++; id_galletas.style.display = 'none';}
}