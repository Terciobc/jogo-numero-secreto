function validacoes(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor inválido</div>`;
    return;
  }

  if (numeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += ` <div>
    Valor inválido: fale um número entre ${menorValor}
    e ${maiorValor}
    </div>`;
    return;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h1>
      Você acertou!
    </h1>
    <h3>
      O número secreto era <strong>${numeroSecreto}</strong> 
    </h3> 
    <button id='btn-jogar' class='btn-recarregar'>Jogar Novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor 
        <i class="fa-solid fa-down-long"></i>
    </div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior 
        <i class="fa-solid fa-up-long"></i>
      </div>
    `;
  }
}
function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

//Chamada do botão e atribuição de função ao clicar.
document.body.addEventListener("click", (e) => {
  if (e.target.id == "btn-jogar") {
    window.location.reload();
  }
});
