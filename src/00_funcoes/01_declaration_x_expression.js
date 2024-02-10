console.log('Function declaration x Funcion expression');

let a = 4;
console.log(a);

console.log(
  '\nFunction declaration: função nomeada, é uma função básica, comum',
);
function bomDia() {
  console.log('Bom dia!');
}
bomDia();

console.log(
  '\nFunction expression - tratar e armazenar a função dentro de uma constante ou variável, via de regra usa-se um função anônima:',
);
const boaTarde = function () {
  console.log('Boa tarde!');
};
boaTarde();

console.log(
  '\nFunção comum - FLEXIBILIDADE AO PASSAR PARÂMETROS - Function declaration:',
);
function somar(a, b) {
  return a + b;
}

console.log('i. Passando número exato de parâmetros:');
let resultado = somar(3, 4);
console.log(resultado);

console.log(
  '\nii. Passando parâmetros em excesso - vai considerar apenas os 2 primeiros:',
);
resultado = somar(3, 4, 5, 6, 7, 8);
console.log(resultado);

console.log(
  '\niii. Passando parâmetro default - Iniciando valor default nos parâmetros para resolver os dois os problemas abaixo, ' +
    'é só inicializar os parâmetros com valor default: a = 0, b = 0 ',
);

console.log(
  '\niv. Parâmetros de menos - NaN pois o segundo parâmetro recebe valor undefined,' +
    ' visto que ele não foi passado:',
);
resultado = somar(3);
console.log(resultado);

console.log(
  '\nv. Sem parâmetros: NaN pois nenhum parâmetro foi passado, sendo undefined assumido' +
    ' como valor.',
);
resultado = somar();
console.log(resultado);
