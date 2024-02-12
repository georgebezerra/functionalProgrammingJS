const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressoa', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];
console.log(carrinho);

Array.prototype.meuMap = function (fn) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    const resultado = fn(this[i], i, this);
    novoArray.push(`==> ${resultado}`);
  }

  return novoArray;
};

const getNome = item => item.nome;
console.log(carrinho.meuMap(getNome));

const getTotal = item => item.qtde * item.preco;
const totais = carrinho.meuMap(getTotal);
console.log(totais);

console.log('\nFim');
