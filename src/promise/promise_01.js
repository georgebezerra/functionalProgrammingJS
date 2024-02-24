console.log(
  'Promise - é um evento que será executado no futuro e será devolvido no futuro. E aceita um único parâmetro.',
);

let a = 1;
console.log(a);

console.log('\nVerificando o type da promise: ');
console.log(typeof Promise);

console.log('\nVerificando o type da new promise: ');
let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(3);
});
console.log(typeof p);

console.log('\nmétodo then (então) mostra o resultado de uma promise: ');
p.then(function (valor) {
  console.log(valor);
});

console.log(
  '\nO exemplo abaixo, o X não funciona pois uma promise gera um único valor, trabalha apenas com um parâmetro: ',
);
p.then(function (valor, x) {
  console.log(valor, x);
});

console.log(
  '\nO exemplo abaixo funcioa pois pode-se criar objetos para se trabalhar com mais de um valor, com mais de um parâmetro: ',
);
let x = new Promise(function (cumprirPromessa) {
  cumprirPromessa({
    x: 3,
    y: 4,
  });
});

x.then(function (valor) {
  console.log(valor);
});

console.log(
  '\no exemplo abaixo funcioa pois pode-se criar array para se trabalhar com mais de um valor (mais de um parâmetro): ',
);
let y = new Promise(function (cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

// y.then(function (valor) {
//   console.log(valor);
// });

y.then(valor => console.log(valor));

console.log(
  '\no Encadeamenteo de then (então) pra tratativas de valores. O then posterior é resultado do anterior e é possível tratar este resultado.' +
    'O resultado de um método then é passado para o próximo método then.',
);
let z = new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

z.then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(valor => console.log(valor));

console.log('\nFim');
