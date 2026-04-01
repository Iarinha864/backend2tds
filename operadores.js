const idade = 18;
const maiorDEIdade = idade >=18;
const possuiCNH = false;

//Operador E
const podeDirigir = maiorDEIdade && possuiCNH;
console.log("Pode dirgir?" + podeDirigir);

//Operador OU
const  podeViajarSozinho = maiorDEIdade || possuiCNH;
console.log("Pode viajar sozinho?" + podeViajarSozinho);

//Operador NOT
const precisaDeAcompanhante = !maiorDEIdade;
console.log("Precisa de acompanhante?" + precisaDeAcompanhante);