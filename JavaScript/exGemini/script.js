// Exercicio 1
const produtos = [
    {nome: 'Teclado', preco: 150, emEstoque: true},
    {nome: 'Mouse', preco: 80, emEstoque: false},
    {nome: 'Monitor', preco: 900, emEstoque: true}
];

function produtosDisponiveis(lista){
    return lista.filter((produto) => produto.emEstoque === true).map((produto) => produto.nome);
};
console.log(produtosDisponiveis(produtos));

// Exercicio 2
const usuario = {nome: "Ana", idade: 25, cidade: "São Paulo"};
const novosDados = {idade: 26, cidade: "Rio de Janeiro"};

function atualizarPerfil(usuario, novosDados) {
    return { ...usuario, ...novosDados, atualizado: true };
}
console.log(atualizarPerfil(usuario, novosDados));

// Exercicio 3
