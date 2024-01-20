console.log('Declarando uma variável')
let a = 4;
console.log(a);

console.log('\nFunction declaration:')
function bomDia() {
  console.log('Bom dia!');
}
bomDia();

console.log('\nFunction expression - tratar e armazenar a função dentro de uma variável, via de regra usa-se um função anônima:')
const boaTarde = function () {
  console.log('Boa tarde!');
}
boaTarde();

console.log('\nFunção comum:')
function somar(a, b) {
  return a + b
}

console.log('\Com número exato de parâmetros:')
let resultado = somar(3,4)
console.log(resultado)

console.log('\nCom excesso de parâmetros - vai considerar apenas os 2 primeiros:')
resultado = somar(3,4, 5, 6, 7, 8)
console.log(resultado)

console.log('\nPara resolver os dois os problemas abaixo, é só inicializar os parâmetros com valor default: a = 0, b = 0 ')

console.log('\nCom parâmetros de menos - NaN pois o segundo parâmetro recebe valor undefined, visto que ele não foi passado:')
resultado = somar(3)
console.log(resultado)

console.log('\nSem parâmetros: NaN pois nenhum parâmetro foi passado, sendo undefined assumido como valor.')
resultado = somar()
console.log(resultado)
