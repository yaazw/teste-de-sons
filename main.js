function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const KeyList = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < KeyList.length) {

    KeyList[contador].onclick = function () {
        tocaSom('#som_tecla_bonk')
    }

    contador = contador + 1;

    console.log(contador);

}
