console.log(
  'A função MAP é aplicada em um array de elementos e usa a técnica de passar um função como parâmetro de outra função. ',
);
console.log('\nObjetivo do MAP é tranformar os dados de array em outro array.');
console.log(
  'O MAP tem 3 parâmetros flexiveis: value, index e array, sendo o value obrigatório.\n',
);

console.log(
  'Exemplo-01: Crie um map que o resultado seja o dobro dos elementos numéricos.',
);
const nums = [1, 2, 3, 4, 5];

console.log('i. Passando apenas o parâmetro value:');
const dobrovalue = v => v * 2;
const mapdobrovalue = nums.map(dobrovalue);

console.log('\nii. Passando apenas o parâmetro value:');
const valuemapdobro = nums.map(v => v * 2);

console.log(nums, mapdobrovalue, valuemapdobro);

console.log(
  '\nExemplo-02: Crie um map que o resultado seja o dobro dos elementos numéricos + indice.',
);
console.log('\ni.Passando os parâmetros value e index');
const dobrovalueindex = (v, i) => v * 2 + i;
const mapdobrovalueindex = nums.map(dobrovalueindex);

console.log('\nii.Passando os parâmetros value e index');
const indexvaluedobromap = nums.map((v, i) => v * 2 + i);

console.log(nums, mapdobrovalueindex, indexvaluedobromap);

console.log(
  '\nExemplo-03: Crie um map que o resultado seja o dobro dos elementos numéricos + indice + array.',
);
const dobrovalueindexarray = (v, i, a) => v * 2 + i + a.length;
const mapdobrovalueindexarray = nums.map(dobrovalueindexarray);
console.log(nums, mapdobrovalueindexarray);

console.log(
  '\nExemplo-04: Crie um map que o resultado seja a primeira letra de cada nome.',
);
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const primeiraLetra = nome => nome[0];
const letras = nomes.map(primeiraLetra);
const letras02 = nomes.map(nome => nome[0]);

console.log(nomes, letras, letras02);

console.log('FIM');
