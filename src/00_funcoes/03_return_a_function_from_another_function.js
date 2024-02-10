console.log('\n2) Retornar uma função a partir de uma outra função.');
console.log(
  '\nExemplo 01 - Function declaration que retorna o método Math.pow um valor direto - calculo da potência',
);
function potencia01(base, exp) {
  return Math.pow(base, exp);
}

const bits8 = potencia01(2, 8);
console.log(bits8);

console.log(
  '\nExemplo 02 - Function declaration que retorna uma Function expression e que retorna o método Math.pow com o resultado - calculo da potência.',
);
function potencia02(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia02(2);
console.log(potenciaDe2(8));

const pot28 = potencia02(2)(8);
console.log(pot28);
