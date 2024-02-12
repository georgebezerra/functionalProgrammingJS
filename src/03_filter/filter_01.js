const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressoa', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];
console.log(carrinho);

console.log('\nItens maior que 0');

const quetdMaiorQueZero = value => value.qtde > 0;
const itensValidos = carrinho.filter(quetdMaiorQueZero);
console.log(itensValidos);

console.log('\nItens maior que 1');
const quetMaiorQueUm = carrinho.filter(value => value.qtde > 1);
console.log(quetMaiorQueUm);

console.log('\nItens válidos - mostre o nome dos itens maior que zero');
const getNome = item => item.nome;
const nomeItensValidos = carrinho.filter(quetdMaiorQueZero).map(getNome);
console.log(nomeItensValidos);
