// var nome = prompt("Qual é o seu nome");
// var fruta1 = prompt("Fruta 1");
// var fruta2 = prompt("Fruta 2");
// var fruta3 = prompt("Fruta 3");

// document.write(`
//     <h2>SALVE ${nome.toUpperCase()}</h2>
//     <p> A string: <strong>${nome}</strong> tem ${nome.length} caracteres </p>

//     <ul>
//     <li>>${fruta1}</li>
//     <li>${fruta2}</li>
//     <li>${fruta3}</li>
//     <li>Uva</li>
// </ul>
// `);

var email = prompt("Digite seu email");

function validaEmail(email) {
  if (email.indexOf("@") >= 0) {
    return true;
  } else {
    return false;
  }
}

var resultado = validaEmail(email);
mostraNaTela(resultado);
function mostraNaTela(resultado) {
  if (resultado) {
    document.write(`<h2>Email Validado</h2>`);
  } else {
    document.write(`<h2>Email invalido</h2>`);
  }
}
