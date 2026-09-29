// 1.
let produto = { nome: "Maçã", preco: 27, estoque: 5 };

console.log("O produto " + produto.nome + " custa R$" + produto.preco);

// 2. 
let numeroVerificado = -1;

switch(true){
    case numeroVerificado > 0:
        console.log("Este numero é Positivo!!")
        break;
    case numeroVerificado < 0:
        console.log("Este numero é Negativo!!")
        break;
    default:
        console.log("Este numero é Zero!!")
        break;
}

// 3.
let soma = 0;
let i = 1;

while(i <= 50){
    if(i % 2 === 0){
        soma += i;
    }
    i++;
}

console.log(soma);

// 4.
function mediaTurma(notas){
    let total = 0;

    for(let i = 0; i < notas.length; i++){
        total += notas[i];
    }

    return total / notas.length;
}

console.log(mediaTurma([7, 8, 9, 6]));

// 5.
let produto = { nome: "Maçã", preco: 27, estoque: 5 };

console.log(`O produto ${produto.nome} custa R$${produto.preco}.`);

// 6.
let mediaTurma = (notas) => {
    let total = 0;

    for(let i = 0; i < notas.length; i++){
        total += notas[i];
    }

    return total / notas.length;
};

console.log(mediaTurma([7, 8, 9, 6]));

// 7.
let produto = { nome: "Maçã", preco: 27, estoque: 5 };
const{nome, preco} = produto;
console.log(nome);
console.log(preco);

let nomes = ["Maria", "João", "Vitória"];
let [primeiroNome, ,terceiroNome] = nomes;
console.log(primeiroNome);
console.log(terceiroNome);

// 8.
let numeros = [1, 2, 3];
let maisNumeros = [...numeros, 5, 10, 15];

console.log(maisNumeros);

let produto = {
    nome: "Maça",
    preco: 5
}

let maisInformações ={
    ...produto,
    preco: 7,
    estoque: 10
}

console.log(maisInformações);

// 9.
function somarTodos(...numeros){
    let total = 0;

    for(let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }

    return total;
}

console.log(somarTodos(1, 2, 4, 5, 7, 8, 10));

// 10.
let email = ["smariapaula0625@gmail.com", "fortissanguine@gmail.com"];
function emailValido(email){
    let temArroba = email.includes("@");
    let comecaComNumero = "0123456789".includes(email[0]);

    return temArroba && !comecaComNumero;
}

console.log(emailValido("smariapaula0625@gmail.com"));



// 11.
const products = [
    {name: "Maça", price: 2.5, stock: 5},
    {name: "Coca Cola", price: 8, stock: 2},
    {name: "Guarana", price: 5, stock: 4},
    {name: "Chocolate", price: 20, stock: 10}
];

const total = products.reduce((acc, p) => acc + p.stock, 0);
const caros = products.filter(p => p.price > 5).map(p => p.name);

console.log(total);
console.log(caros);

// 12.
function buscarProduto(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = products.find(p => p.id === id);
      encontrado ? resolve(encontrado) : reject("Não encontrado");
    }, 1000);
  });
}

// 13.
async function nutriApp(){
  try {
    const r = await fetch("https://sujeitoprogramador.com/rn-api/?api=posts");
    const posts = await r.json();
    posts.map((item) => { /* montagem do DOM */ });
  } catch {
    console.log("Algo está errado!!");
  }
}

// 14.
class Pessoa {
  constructor(nome, cargo){
    this.nome = nome;
    this.cargo = cargo;
  }
  apresentar(){
    return `Me chamo ${this.nome} e trabalho como ${this.cargo}`;
  }
}

// 15.
const mapaProdutos = new Map(products.map(p => [p.name, p.price]));
console.log(mapaProdutos.get("Guarana"));