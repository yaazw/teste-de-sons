function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
        }
        else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
        }

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

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
