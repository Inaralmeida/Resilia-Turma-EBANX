function adicionaNome() {
  var nome = prompt("Qual é o teu nome");
  var tagH1 = document.createElement("h1");
  tagH1.innerText = nome;

  var campodoNome = document.querySelector("#campo-do-nome");
  campodoNome.append(tagH1);
}

function removeNome() {
  var h1 = document.querySelector("h1");
  h1.remove();
}

function addImagem() {
  var url = prompt("Qual é a URL da imagem");
  var tagImg = document.createElement("img");
  tagImg.src = url;

  var campoIMG = document.querySelector("#campo-img");
  campoIMG.append(tagImg);
}

function addTexto() {
  var body = document.body;
  var texto = prompt("Digite seu texto");

  body.innerHTML = `
    <p>${texto}</p>
    `;
}
