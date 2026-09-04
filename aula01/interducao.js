console.log("Bom dia bacanudos");

var variavel01 = "oi";
let Variavel02 = "tudo bem?";
const Variavel03 = "Vocês são lindos";

console.log(variavel01 + Variavel02); // sem espaços

console.log(Variavel02, Variavel02); // insere espaços 

variavel01 = "olá! ";
console.log(variavel01 + Variavel02);

//Variavel03 = "Hellooooooooo";
//Variaveis do  tipo constante não pode
//receber um novo valor que sobnreescreva
//o original

let Teste = "texto";
console.log(typeof(teste));
Teste = 2;
console.log( typeof(Teste));
Teste = {nome: "Nome", idade: 38};
console.log("O tipo agora é: ", typeof(Teste));
Teste = [1, 2];
console.log("O resultado do tipo de array", typeof(Teste));