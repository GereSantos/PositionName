const NameUser = window.prompt('Insira seu nome');

const position =parseInt(window.prompt('Insira a posição que deseja obter da letra do seu nome'));

const letter = NameUser[position];

alert('A Posição selecionada do nome: ' + NameUser+ ', é ' + position + ',' + '\n'
+ 'trazendo a letra ' +letter.toUpperCase() )