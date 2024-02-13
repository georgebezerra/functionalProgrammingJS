const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressoa', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];
console.log(carrinho);

Array.prototype.meuFilter = function (fn) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArray.push(this[i]);
    }
  }

  return novoArray;
};

console.log('\nItens válidos - mostre o nome dos itens maior que zero');
const getNome = item => item.nome;
const quetdMaiorQueZero = value => value.qtde > 0;
[];
const nomeItensValidos = carrinho.meuFilter(quetdMaiorQueZero).map(getNome);
console.log(nomeItensValidos);

console.log('\nFim');
