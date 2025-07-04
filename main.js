const numeroSenha = document.querySelectorAll("parametro-senha__texto");
let tamanhoSenha = 12;
numeroSenha.textcontent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1 ){
        tamanhoSenha--;
    }
    numeroSenha.textcontent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhosenha < 20){
        tamanho++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);