const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressoa', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];
console.log(carrinho);

console.log('1 - Pegando apenas o nome dos items do array: ');

const getNome = item => item.nome;
const resultNome = carrinho.map(getNome);
console.log(resultNome);

const itemNome = carrinho.map(item => item.nome);
console.log(itemNome);

console.log('\n2 - Calculando a quantidade *  preco: ');
const getTotal = carrinho.map(item => item.qtde + item.preco);
console.log(getTotal);

console.log('\nFim');
