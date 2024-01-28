console.log(
  '\n1 - fs (file system) e path (caminho) - são bibliotecas internas do javascript',
);
const fs = require('fs');
const path = require('path');

console.log('\n2 - __dirname: Mostra o diretório atual');
console.log(__dirname);

console.log('\n3 - Juntando o arquivo externo em um único path - caminho');
const caminho = path.join(__dirname, 'dados.txt');

function exebirConteudo(err, conteudo) {
  console.log(conteudo.toString());
}

console.log('Inicio');
fs.readFile(caminho, {}, exebirConteudo);
fs.readFile(caminho, exebirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log('Fim');

console.log('\nInicio Sync...');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync...');
