const botones = document.querySelectorAll('.bton');
const envio = document.querySelector('.submit');
const cardBoton = document.querySelector('.card');
const cardThank = document.querySelector('.card-thanks');
const totalButonsClick = document.querySelector('.container-buttons');

let contador = 0;
const botonesEvent = botones.forEach(botonColor => botonColor.addEventListener('click',cambioColor));
envio.addEventListener('click',cambioDatos)

function cambioColor(e){
    e.target.style.backgroundColor = '#F97719'
    e.target.removeEventListener('click',cambioColor)
    contador++
    if(contador === botones.length){
        console.log('se precionaron los 5 botones')
    }
}
function cambioDatos(){
    cardBoton.style.display = 'none'
    cardThank.style.display = 'block'

    const texto = document.createElement('p');
    totalButonsClick.appendChild(texto);
    texto.textContent = `Your selected ${contador} of 5`
}
