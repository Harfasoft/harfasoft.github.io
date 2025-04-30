window.onload = function(){
    if(localStorage.politica > 0){document.getElementById("id_galletas").style.bottom = "-50px";}
    document.getElementById("aceptar_cookies").onclick = function(){localStorage.politica = (localStorage.politica || 0); localStorage.politica++; id_galletas.style.display = 'none';}

}

const openCookies = () => {
    
    const card_container_cookies = document.getElementById('container_cookies');    
    const overlay_cookies = document.getElementById('overlay_cookies');

    if(card_container_cookies.style.display === 'none'|| card_container_cookies.style.display ===''){        
        card_container_cookies.style.display = 'block';        
        overlay_cookies.style.display = 'block';        
    }else{
        card_container_cookies.style.display = 'none';        
        overlay_cookies.style.display = 'none';
        }
        
}
