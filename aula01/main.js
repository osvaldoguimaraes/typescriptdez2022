let nome = "osvaldo";
let idade = 27;
let altura = 1.86;
let ja_sei = true;
console.log("tipodavariavel", typeof (nome));
console.warn("tipo da variável idade", typeof (idade));
console.error("tipo da variável altura $(typeof(altura))");
console.log(`%c tipo variável ja_sei vai aparecer em azul ${typeof (ja_sei)}`, 'color:blue;');
let nome_completo;
nome_completo = "Osvaldo Henrique Guimarães";
idade = 27;
let profissao;
profissao = "admin";
let preferencias = [];
preferencias.push("Javascript");
preferencias.push("Typescript");
preferencias.push("Dinheiro");
console.table(preferencias);
console.log(`tipo da variável preferencias ${typeof (preferencias)}`);
console.log(`Meu nome é ${nome_completo} trabalho como ${profissao} gosto de ${preferencias.join(' e ')}`);
function exemplo() {
}
