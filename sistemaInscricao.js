console.log("Olá, mundo!")

console.log("====Sistema de Inscricao====")

//Variáveis
console.log("")

let nome = "Maria";
console.log("Nome:" + nome);

let idade = 15;
console.log("Idade:" + idade);

let curso = "Desenvolvimento de sistemas";
console.log("Curso:" + curso);

let mensalidade = 450.00;
console.log("Mensalidade: R$" + mensalidade);

let vagas = 10;

let desconto = true;

let descontofinal = 15/100 * mensalidade;

//Verificação de idade

if (idade < 16){
    console.log("Inscrição não permitida!")
} else if (idade >= 16 && idade <= 17){
    console.log("Necessita de autorização do responsável!")
} else if (idade >= 18){
    console.log("Inscrição permitida!")
} else{
    console.log("Idade Inválida!")
}

//Verificação de vagas
console.log("")

if(vagas > 0){
    console.log("Exitem vagas disponíveis!")
} else{
    console.log("Não existem vagas disponíveis!")
}

//Calculo de desconto
console.log("")
if (desconto){
    console.log("Desconto aplicado: 15%")
    console.log("Mensalidade final: R$" + (mensalidade - descontofinal) )
} else{
    console.log("Sem descontos disponíveis")
}

//Classificação de mensalidade

console.log("")

if (mensalidade <=300){
    console.log("Curso Econômico")
} else if(mensalidade > 300 && mensalidade <=600){
    console.log("Curso Intermediário")
} else if(mensalidade > 600){
    console.log("Curso premium")
} else{
    console.log("Curso indeterminado!")
}

console.log("")

