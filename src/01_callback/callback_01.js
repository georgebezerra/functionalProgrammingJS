console.log(
  'CallBack - passar uma função como parâmetro de outra função e depois esta função será chamada de volta.\n' +
    '\nOs exemplos abaixo fazem parte do conceito da programação reativa. Quando acontece um evento, chama uma função de volta: ',
  '\nEx-01.: Passar uma função como parâmetro, pra outra função que vai lê o conteúdo de um arquivo e este conteúdo de arquivo demora um pouco' +
    'pra ser lido, e aí, quando consegue ser lido, chama a função de volta com o conteúdo do arquivo.\n' +
    '' +
    '\nEx-02.: Faz uma requisição pro servidor, depois de um tempo, quando chegar a resposta, a callback é chamada.\n',
);
function exec(fn, a, b) {
  return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);
const subtrair = (w, z) => w - z;

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

const r = exec(subtrair, 50, 25);
console.log(r);

console.log(
  '\nsetInterval - callback de 2 parâmetros (função e temporizador em milisegundos) que executa repetidamente.',
);
console.log('\nEx-01..:');

const fn = () => console.log('Exec-01...');
setInterval(fn, 1000);

console.log('\nEx-02..:');
setInterval(() => console.log('Exce-02..'), 1000);

console.log('\nEx-03..:');
setInterval(function () {
  console.log('Exce-03..');
}, 1000);
