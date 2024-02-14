const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressoa', qtde: 1, preco: 649.5, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.1, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true },
];
console.log(carrinho);

console.log('\nUse filter, map, reduce: ');

console.log('\ni. mostre apenas os elementos fragil: true');

console.log('\n1 . mostre apenas os elementos fragil: true');
// const fragilTrue = value => value.fragil > 0;
const fragilTrue = value => value.fragil === true;
const trueFragil = carrinho.filter(fragilTrue);
console.log(trueFragil);

console.log('\n2 . mostre apenas os elementos fragil: true');
const media = carrinho.filter(value => value.fragil);
console.log(media);

console.log('\nii. mostre o total de cada elementos = qtde * preço ');

console.log('\n1. mostre o total de cada elementos = qtde * preço ');
const totalElemento = value => value.qtde * value.preco;
const totalItens = carrinho.map(totalElemento);
console.log(totalItens);

console.log(
  '\n2. Após o filter, mostre o total de cada elementos = qtde * preço ',
);
const mediaa = carrinho
  .filter(value => value.fragil)
  .map(value => value.qtde * value.preco);

console.log(mediaa);

console.log('\niii. mostre a média dos totais de cada elemento');

const mediaaa = carrinho
  .filter(value => value.fragil)
  .map(value => value.qtde * value.preco)
  .reduce(
    (acc, el) => {
      console.log(acc, el);
      const novaQtde = acc.qtde + 1;
      const novoTotal = acc.total + el;

      // console.log({
      //   qtde: novaQtde,
      //   total: novoTotal,
      //   media: novoTotal / novaQtde,
      // });

      return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde,
      };
    },
    { qtde: 0, total: 0, media: 0 },
  ).media;

console.log(mediaaa);

console.log('\nFim');
