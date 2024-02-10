console.log('****ARROW FUNCTION****\n');
console.log(
  '1-Arrow function é uma função anônima que quando NÃO SE TEM {}, função sem corpo, a função é só uma expressão,' +
    ' o return é implícito.',
);
const cumprimento = () => console.log('Boa Noite!');
cumprimento();

console.log(
  '\n2 - Arrow function que recebe um parâmetro. E quando se tem um único parãmetro pode remover os parênteses',
);
const saudacao = nome => 'Fala ' + nome + '!!!';
const saudacao02 = nome => `Fala ${nome} !!!`;
console.log(saudacao('Maria'));
console.log(saudacao02('Maria'));

console.log(
  '\n3 - Arrow function com corpo. Que quando SE TEM {}, funçao com corpo, o return é explicito',
);
const somar = numeros => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(
  '\n4 - Parâmetros variaveis - rest ... pega todos os parâmetros e joga pra dentro de um array. ' +
    'Permiti passar quantos parâmetros desejaveis de uma forma flexivel',
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

console.log('\n5 - Uma função dentro de outra função usando arrow function');
console.log('5.1 - Função declaration');
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}
const bits4 = potencia(2)(4);
console.log(bits4);

console.log('\n5.2 - Com arrow function');
const potencia00 = base => {
  return function (exp) {
    return Math.pow(base, exp);
  };
};
const bits8 = potencia00(2)(8);
console.log(bits8);

console.log('\n5.3 - Arrow function dentro de um arrow function');
const potencia01 = base => {
  return exp => {
    return Math.pow(base, exp);
  };
};
const bits10 = potencia01(2)(10);
console.log(bits10);

const potencia03 = base => exp => {
  return Math.pow(base, exp);
};
const bits16 = potencia03(2)(16);
console.log(bits16);

console.log('\n5.4 - RESUMINDO - arrow function dentro de um arrow function');
const potencia04 = base => exp => Math.pow(base, exp);
const bits24 = potencia04(2)(24);
console.log(bits24);

console.log('\n5.5 - RESUMINDO - arrow function');
const subtrair = (a, b) => a - b;
console.log(subtrair(4, 1));

console.log('\nFIM!');
