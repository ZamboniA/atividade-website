let nomeProduto = "castanha";
let precoProduto = 1060.00;
let descontoProduto = 0;
let descontoValido = true;
let precoFinal = 0;


if (descontoValido == true  && precoProduto >= 1000){
    descontoProduto = precoProduto - 50;
        console.log(`O preço final é ${descontoProduto.toFixed(2)}`);
} else{
    descontoProduto = precoProduto
        console.log(`O preço final é ${descontoProduto.toFixed(2)}`);
}


console.log("------------------------------------------------")
// ---------------------------------------------- ARRAY -----------------------------------------


const demandas = [10, 2, 1, 30, 5];
const totalCliente = [];

for (let i = 0; demandas.length > i; i++){
    precoFinal = demandas[i]*descontoProduto;    
    console.log(`O preço final do cliente ${i+1} é R$ ${precoFinal.toFixed(2)}`);
    totalCliente.push(precoFinal);
}


let lucroTotal = 0;

for (let i = 0; i < totalCliente.length; i++){
    lucroTotal+=totalCliente[i];
}

console.log("------------------------------------------------")

console.log(`O lucro total é de R$ ${lucroTotal.toFixed(2)}`);