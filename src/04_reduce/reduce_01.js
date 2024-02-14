const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressoa', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];
console.log(carrinho);

console.log(
  'Multiplique qtde x preco de cada um dos elementos e depois calcule o total de todos os itens, pra ter o valor final.' +
    'Pra saber o quanto terei que gastar pra comprar todos os produtos: \n',
);

console.log('Total Geral: ');
const getTotal = item => item.qtde * item.preco;
const totalGeral = carrinho.map(getTotal);
console.log(totalGeral);

console.log('\nSomando os valores: ');
//Atente que não passei valor inicial, então o reduce iniciou com os dois primeiros elementos do array.
const somar = (acc, ele) => {
  console.log(acc, ele);
  return acc + ele;
};

const totais = carrinho.map(getTotal);
console.log(totais);

//O valor inicial, 0, foi passado, mas nesse caso não era preciso, mas vai funcionar de uma forma diferente.
//const geralTotal = carrinho.map(getTotal).reduce(somar, 0);
const geralTotal = totais.reduce(somar, 0);
console.log(geralTotal);

console.log('\nFim');
