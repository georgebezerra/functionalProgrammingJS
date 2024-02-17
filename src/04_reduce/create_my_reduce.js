const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressoa', qtde: 1, preco: 649.5, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.1, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true },
];
console.log(carrinho);

Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }

    acc = fn(acc, this[i], i, this);
  }
  return acc;
};

Array.prototype.meuReduce02 = function (fn, inicial) {
  let acc = inicial;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
    } else {
      acc = fn(acc, this[i], i, this);
    }
  }
  return acc;
};

console.log('Fim');
