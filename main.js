function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const KeyList = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < KeyList.length; contador++) {

    const tecla = KeyList[contador];
    const audio = tecla.classList[1];
    const idAudio = `#som_${audio}`; //template string

    KeyList[contador].onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

}
