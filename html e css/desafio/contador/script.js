
function contar(event) {
    event.preventDefault();

    let inputInicio = document.getElementById('idInicio');
    let inputFim = document.getElementById('idFim');
    let inputPasso = document.getElementById('idPasso');
    let paragrafoFinal = document.getElementById('paragrafoFinal');
    let paragrafoContagem = document.getElementById('contagem');
    let cntdContagem = paragrafoContagem.innerText
    let cntdParagrafo = paragrafoFinal.innerText
    let dadoInicio = Number(inputInicio.value);
    let dadoFim = Number(inputFim.value);
    let dadoPasso = Number(inputPasso.value);
    let contador = dadoInicio;

    while(contador < dadoFim) {
        console.log(contador);
        let contadorNumber = Number(contador);
        cntdParagrafo = 'Contando...';
        cntdContagem += ` ${String(contador)} `
        contador += dadoPasso;
        paragrafoContagem.innerText = cntdContagem;
    }
}   

/* if(contador == dadoInicio){
    cntdContagem += " " + String(contador) + " "
}
else {
    cntdContagem += " " + String(contador) + " "
}
(contador += dadoPasso); */