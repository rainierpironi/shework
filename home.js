for (let i = 1; i <= 6; i++) {
const resposta = document.querySelector(`.pergunta${i}`);
    const imagem = document.getElementById(`seta${i}`);
    let contador = 1;

    resposta.addEventListener('click', () => {
      if (contador === 1) {
        imagem.src = 'imagens/arrowdown.svg';
        contador = 2;
      } else {
        imagem.src = 'imagens/arrowup.svg';
        contador = 1;
      }
    });
  }

const linhas = Array.from(document.querySelectorAll('.answer-item:not([style="display: none"])'))
var todasMarcadas = te;

// Verifica cada checkbox
for (var i = 0; i < checkboxes.length; i++) {
  if (!checkboxes[i].checked) {
    todasMarcadas = false;
    break;
  }
}

// Verifica se todas estão marcadas
if (todasMarcadas) {
  console.log("Todas as opções estão marcadas!");
} else {
  console.log("Algumas opções não estão marcadas.");
}

