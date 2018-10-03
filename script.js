var numeroAleatorio = Math.floor(Math.random() * 10000) + 1;

var chutes = document.querySelector('.chutes');

var lastChute = document.querySelector('.lastChute');

var dica = document.querySelector('.dica');

var weakOrForte = document.querySelector('.weakOrForte');

var chutando = document.querySelector('.chutando');

var userChute = document.querySelector('.userChute');

var contagemPalpites = 1;

var btnRestart;

userChute.focus();

function verifyChute() {

    var userTryChute = Number(userChute.value);

    if(contagemPalpites === 1) {
        chutes.textContent = 'Últimos Chutes: ';
    }

    chutes.textContent += userTryChute + ' ';

    if(userTryChute === numeroAleatorio) {

    alert('Parabéns Humano !!!');

    lastChute.style.backgroundColor = '#00fff5';
    lastChute.textContent = "Você acertouuuu!!!";    

    weakOrForte.textContent = '';    

    navigator.vibrate([500,1000,2000]);   

    endGame();

    } else if(contagemPalpites === 10) {

    alert('Lamento, você perdeu');

    weakOrForte.textContent = '';
    
    endGame();

    } else {

    lastChute.style.backgroundColor = 'red';
        
        if(userTryChute < numeroAleatorio) {
            lastChute.textContent = "Errou! Tente um número maior >";
            dica.textContent = numeroAleatorio;
            navigator.vibrate([500,1000,2000]);   

        } else if(userTryChute > numeroAleatorio) {
            lastChute.textContent = "Errou! Tente um número menor <";    
            navigator.vibrate([500,1000,2000]);   
            dica.textContent = numeroAleatorio;
        }
    }

    contagemPalpites++;

    userChute.value = '';

    userChute.focus();
}

chutando.addEventListener('click', verifyChute);

function endGame() {

    userChute.disabled = true;

    chutando.disabled = true;

    btnRestart = document.createElement('button');

    btnRestart.textContent = 'Tentar de novo';

    document.body.appendChild(btnRestart);

    btnRestart.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {

    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll('.osChutes p');

    for(var i = 0 ; i < reiniciarParas.length ; i++) {

    reiniciarParas[i].textContent = '';

}

    btnRestart.parentNode.removeChild(btnRestart);

    userChute.disabled = false;

    chutando.disabled = false;

    userChute.value = '';

    userChute.focus();

    lastChute.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}