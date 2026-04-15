const alunos =["Iara","Clarice","Jonh"];

alunos.push("Diego");
alunos.unshift ("Lopes");
alunos.unshift("Clerouvaldo");
console.log(alunos);

console.log(alunos.indexOf("Diego"));
console.log(alunos.indexOf("Paula"));
console.log(alunos.indexOf("Clerouvaldo"));

console.log(alunos.includes("Paula"));
console.log(alunos.includes("Jonh"));