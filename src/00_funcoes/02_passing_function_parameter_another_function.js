console.log('**RELEMBRE**');
console.log(
  'i. Dois sinal de igualdade - igualdade ampla == comparação de valores',
);
console.log(
  'ii. Três sinais de igualdade - identidade - igualdade estrita === comparação  de valores e de type\n',
);

console.log('A - Function declaration - bomDia()');
function bomDia() {
  console.log('Bom dia!');
}

console.log('B - Function expression - boaTarde()\n');
const boaTarde = function () {
  console.log('Boa tarde!');
};

console.log('1) Passando uma função como parâmetro para outra função.');
function executarQualquerCoisa(fn) {
  if (typeof fn === 'function') {
    fn();
  } else {
    console.log(`${fn}: not a function`);
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);
