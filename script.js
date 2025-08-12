js
Aviso: "// Seleciona todos os cartões const…"
JOCEMARA DE FATIMA MARIANO
Criado em: 5 de ago.5 de ago.
// Seleciona todos os cartões
const cartoes = document.querySelectorAll('.cartao');

// Adiciona um evento de clique em cada cartão
cartoes.forEach(cartao => {
  cartao.addEventListener('click', () => {
    // Seleciona o conteúdo interno do cartão
    const conteudo = cartao.querySelector('.cartao__conteudo');
   
    // Alterna a classe 'girado' para aplicar a rotação
    conteudo.classList.toggle('girado');
  });
})