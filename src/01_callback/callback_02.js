console.log(
  '\n1 - fs (file system) e path (caminho) - são bibliotecas internas do javascript',
);
const fs = require('fs');
const path = require('path');

console.log('\n2 - __dirname: Mostra o diretório atual');
console.log(
  'Obs: __dirname é uma constante que pega o diretório de onde está sendo executado o código.',
);
console.log('\nExemplo.:');
console.log(__dirname);

console.log(
  '\n3 - JOIN - Juntando o arquivo externo em um único path - caminho',
);
console.log(
  '\nObs: JOIN - junta vários trechos de caminho em um só colocando as barras de forma correta, visto que o windows e linux tem barras em sentidos diferente.',
);
const caminho = path.join(__dirname, 'dados.txt');

function exebirConteudo(err, conteudo) {
  console.log(conteudo.toString());
}

console.log('Inicio');
fs.readFile(caminho, {}, exebirConteudo);
fs.readFile(caminho, exebirConteudo);

console.log(
  '\nANDERLINE _ é uma conversão para suprimir parâmetros não usados na função',
);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log('Fim');

console.log('\nInicio Sync...');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync...');
