//Variaveis que serão a base para fabricar os dogs
var nomes = ["Max", "Mel", "Sol"];
var peso = [35.2, 18.6, 2.5];
var raca = ["Labrador", "Vira latas", "Chiuaua"];

//Criação da function fabricaDog que recebe um array de nomes, um array de peso e um array de raça como parametro
function fabricaDog(arrNomes, arrPeso, arrRaca) {
  //Array que vai armazenar os dogs que forem criados
  var dogs = [];

  for (
    var i = 0; //Inicialização do for com a variavel I
    i < arrNomes.length; // Enquanto a variavel I for menor que o tamanho do array de nomes
    i++ // I vai receber + 1
  ) {
    // Criação do objeto dog
    var dog = {
      nome: arrNomes[i], //Para a chave 'nome' do objeto, será atribuido a posicao correspondente ao numero na variavel 'i' de arrNomes
      peso: arrPeso[i], //Para a chave 'peso' do objeto, será atribuido a posicao correspondente ao numero na variavel 'i' de arrPeso
      raca: arrRaca[i], //Para a chave 'raca' do objeto, será atribuido a posicao correspondente ao numero na variavel 'i' de arrRaca
      latir: function () {
        return `${this.nome} latiu: auau`;
      },
      rosnar: function () {
        return `${this.nome} ronou: grrrrrr`;
      },
    };

    //Adicionando o objeto dog no array de dogs
    dogs.push(dog);
  }

  // Retornando o array de dogs
  return dogs;
}

//Chamando a funcao fabricaDog passando os arrays de nomes, peso e raca como parametro e já mostrando a resposta no console
console.log(fabricaDog(nomes, peso, raca));
