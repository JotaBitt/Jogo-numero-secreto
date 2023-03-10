function verificaChuteValido(chute) {
    const numero = +chute;
    const mensagem = document.querySelector('.mensagem');

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
            document.body.style.backgroundColor = "black";
        } else {

            mensagem.innerHTML += '<div>Valor Inválido</div>';
        }
    }


    if (numeroMaiorOuMenorQueOValor(numero)) {
        mensagem.innerHTML += `<div>Valor inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>`;

        return
    }



    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            
            <button id ="jogar-novamente" class ="btn-jogar">Jogar novamente</button>
            `

    } else if (numero > numeroSecreto) {
        mensagem.innerHTML += `
            <div>O número secreto é menor <i class ="fa-solid fa-down-long"></i> </div>
        `
    } else {
        mensagem.innerHTML += `
            <div>O número secreto é maior <i class ="fa-solid fa-up-long"></i> </div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
