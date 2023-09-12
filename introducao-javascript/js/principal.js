//console.log("o arquivo separado esta funcionando");

//---------------Daqui para baixo começa o codigo
 
//---------------alteraçao do titulo
//-----console.log(document);
//-----cria a vareavel titulo e almazena o conteudo da clase 
let titulo = document.querySelector(".titulo");
//-----console.log(titulo);
//-----atrivuiçao de um novo valor na variavel titulo
titulo.textContent = "fake natty nutriçao!";

//---------------alteraçao da tabela 
let paciente = document.querySelector("#primeiro-paciente")

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);
console.log(imc);