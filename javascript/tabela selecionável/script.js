const tr = document.querySelectorAll('tbody > tr');
let documentos = [];

Array.from(tr).map((linha) => {
    const vEntidade = linha.querySelectorAll('td')[0];
    const vNome = linha.querySelectorAll('td')[1];
    const vChave = linha.querySelectorAll('td')[2];
    const vNumero = linha.querySelectorAll('td')[3];
    const vValor = linha.querySelectorAll('td')[4];
    const valorFormat = vValor.innerText
    valorFormat.replace(',','-')
    console.log(valorFormat)


    return documentos.push({entidade: vEntidade.innerText,
                            nome: vNome.innerText,
                            chave: Number(vChave.innerText),
                            numero: vNumero.innerText,
                            valor: valorFormat.replace(',','-')});
})
console.log(documentos);

