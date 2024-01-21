console.log('**RELEMBRE**');
console.log(
  'Dois sinal de igualdade - igualdade ampla == comparação de valores',
);
console.log(
  'Três sinais de igualdade - identidade - igualdade estrita === comparação  de valores e de type\n',
);
function bomDia() {
  console.log('Bom dia!');
}

const boaTarde = function () {
  console.log('Boa tarde!');
};

console.log('1) Passando uma função como parâmetro para outra função.');
function executarQualquerCoisa(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

console.log('\n2) Retornar uma função a partir de uma outra função.');
console.log(
  'Exemplo 01 - Function expression que retorna um valor direto - calculo da potência',
);
function potencia01(base, exp) {
  return Math.pow(base, exp);
}

const bits8 = potencia01(2, 8);
console.log(bits8);

console.log(
  '\nExemplo 02 - Função que retorna uma outra função e é essa que retorna o resultado - calculo da potência.',
);
function potencia02(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia02(2);
console.log(potenciaDe2(8));

const pot34 = potencia02(3)(4);
console.log(pot34);
