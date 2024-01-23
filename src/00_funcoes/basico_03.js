console.log('Arrow Function');
console.log(
  '1-Arrow function é uma função anônima que quando não tem {} é sem return explicito',
);
const cumprimento = () => console.log('Boa Noite!');
cumprimento();

console.log(
  '\n2 - arrow function que recebe um parâmetro. E quando se tem um único parãmetro pode remover a parentese',
);
const saudacao = nome => 'Fala ' + nome + '!!!';
console.log(saudacao('Maria'));

const somar = numeros => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(
  '\nParâmetros variaveis - rest ... pega todos os parâmetros e joga pra dentro de um array. Permeti passar quantos parâmetros desejaveis de uma forma flexivel',
);
const adicao = (...numeros) => {
  console.log(Array.isArray(numeros));
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};
console.log(adicao(1, 2, 3));
console.log(adicao(1, 2, 3, 4, 5, 6));
console.log(adicao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log('Sem arrow function - função comum');
function potencia01(base, exp) {
  return Math.pow(base, exp);
}

const bits8 = potencia01(2, 8);
console.log(bits8);

console.log('Com arrow function');
const potencia(base) => {
  return Math.pow(base, exp);
}

const bits8 = potencia01(2, 8);
console.log(bits8);
console.log('\nFIM!');
