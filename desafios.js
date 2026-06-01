//1-Declarar 5 variáveis para respresentar um funcionário 

let nome = "Jasmine"
let funcao = "Recpcionista"
let empresa = "Psychology"
let horario = "08:00 ás 14:00"
let salario = 1500; 

console.log(`A funcionária se chama ${nome} e a sua função no trabalho é ${funcao}, ele trabalha em uma empresa chamada ${empresa} e recebe um salário de ${salario}. Com um horário de trabalho de ${horario}`)


//2- Crie duas variáveis númericas e exiba uma soma ou multiplicação 

let bonus = 200;
let total =  salario + bonus;
console.log (`Jasmine recebe um bônus quando cumpre com as descrições necessárias na sua rotina de trabalho, e no final do mês seu saldo total é R$${total} reais`)

// 3- Declarar salário base e bônus. Calcular salário total e desconto de 10% (Já tinha declarado o bônus na)

let desconto_porcentagem = 10 

 preco_final = total * (1- desconto_porcentagem/100)
 console.log(`Mas ao final dos mês ela verifica o seu holerite e vê que o seu salário recebeu um desconto de 10% e o valor total de seu salário é de:R$${preco_final} reais`);

 //4- A partir da declaração de anosEmpresa e salario, exiba se recebe promoção, se está em período de experiêcia (90 dias) ou se 
 // já é sênior (outro indentificador)

let anosEmpresa = 3;
let promocao = 1000;

if (anosEmpresa < 0.25) {
    console.log("A funcionária está em período de experiência.");
} else if (anosEmpresa >= 5) {
    console.log("A funcionária já é sênior.");
} else if (anosEmpresa > 2) {
    salario = preco_final + promocao;
    console.log(`A funcionária recebeu uma promoção após completar 3 anos na empresa! Seu novo salário é : R$${salario}`);
}

 