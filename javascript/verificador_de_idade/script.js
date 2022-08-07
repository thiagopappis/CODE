let idadeInput = document.getElementById('numeroNascimento');
let dadosInput = document.getElementsByName('sexo');

function verificarIdade() {
    let anoAtual = new Date();
    let year = anoAtual.getFullYear();
    let anoNascimento = idadeInput.value;
    anoNascimentoNumber = parseInt(anoNascimento);
    let idadePessoa = (year - anoNascimentoNumber);
    console.log(idadePessoa);
    
}