// Template string
var nome = prompt("Qual é o seu nome?");
alert(`Olá ${nome}, 
tenha um bom dia!`);
//[SAÍDA]: "Olá <nome>, tenha um bom dia!"

//-----------------------------------------------------------------------------------------

//Operador ponto (.) é utilizado para acessar diferentes métodos/funções de um determinado tipo

//==========================================================================================

//Replace: recebe dois parametros. O 1° deve estar dentro da string selecionada, o segundo é o que substituirá o 1° parâmetro. Replace retorna uma nova string que precisa ser salva em outra variavel.
var linna = "Linna é incrivel";
var gg = linna.replace("Linna", "Glória Groove");
console.log(gg);
//[SAÍDA]: 'Glória Groove é incrivel'

//=========================================================================================

//Upper e Lower case. Muda o formato da letra
var umaString = "Essa é Uma String";
console.log(umaString.toLowerCase()); //Deixa a letra minuscula
//[SAÍDA]: "éssa é uma string"
console.log(umaString.toUpperCase()); //Deixa a letra maiuscula
//[SAÍDA]: "ÉSSA É UMA STRING"

//=========================================================================================

//Length: O atributo Length mosta o tamanho (quantidade de caracteres) que uma string possui
var stringLength = "Qual é o tamanho dessa string?";
var tamanho = stringLength.length;
console.log(`A string: '${stringLength}' tem ${tamanho} caracteres`);
// [SAÍDA]: 'A string: 'Qual é o tamanho dessa string?' tem 30 caracteres'

//=========================================================================================

//Acesso à propriedade: Como strings são caracteres em sequência, podemos acessar cada um deles utilizando o número de sua posição (a partir de zero) utilizando [<posição>].

var turmaEbanx = "Códigos do amanhã";
//C-ó-d-i-g-o-s- -d-o-  - a- m- a- n -h- ã
//0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16
console.log(turmaEbanx[5]); //o
console.log(turmaEbanx[12]); //m
console.log(turmaEbanx[10]); //' ' (espaço)

//=========================================================================================

//IndexOF: o método indexOf é o fofoqueiro, você passa como parametro o caractere(letras, numeros e simbolos) que busca na string, e ele te conta o index do caractere. Se o resultado for -1 é porque o que você busca não existe na string. Ele retorna o index do primeiro caractere encontrado

var stringIndexOf = "inara.almeida";
console.log(stringIndexOf.indexOf(".")); //5
console.log(stringIndexOf.indexOf("a")); //2

//=========================================================================================

//charCodeAt: Seguindo a tabela ASCII, esse método devolve o código unicode do padrão UTF-16

var stringCharCode = "Inara Regina de Almeida";
console.log(stringCharCode.charCodeAt(6)); // 82
console.log(stringCharCode.charCodeAt(3)); // 144
