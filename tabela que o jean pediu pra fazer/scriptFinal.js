const documentos = [
    {
        "entidade": "0030342",
        "nome": "VALTER FERREIRA DE LIMA",
        "chave": 4015017,
        "numero": "012022-A",
        "valor": 514.68
    },
    {
        "entidade": "0046360",
        "nome": "IVAIR EZEQUIEL BRUCZKOWSKI",
        "chave": 4015037,
        "numero": "012022-A",
        "valor": 99
    },
    {
        "entidade": "0046359",
        "nome": "JULIANO CEZAR RUMOVISKI",
        "chave": 4015039,
        "numero": "012022-A",
        "valor": 49
    },
    {
        "entidade": "0041903",
        "nome": "GELSON OGRODOWSKI",
        "chave": 4015902,
        "numero": "012022-A",
        "valor": 228.05
    },
    {
        "entidade": "0046396",
        "nome": "DIEGO LEANDRO TYSKI",
        "chave": 4016158,
        "numero": "012022-A",
        "valor": 237.55
    },
    {
        "entidade": "011050",
        "nome": "VHL REP. COMERCIAIS S/S LTDA EPP",
        "chave": 4016148,
        "numero": "176-A",
        "valor": 4396.53
    },
    {
        "entidade": "0040875",
        "nome": "CROSSFIRE PROTECTION-SIST PREV INCEND",
        "chave": 4016522,
        "numero": "356-A",
        "valor": 16456.21
    },
    {
        "entidade": "0042776",
        "nome": "PAULO ROBERTO FONSECA MELO",
        "chave": 4016454,
        "numero": "39-A",
        "valor": 21752.81
    },
    {
        "entidade": "0041461",
        "nome": "DENVER SUPRIMENTOS INDUSTRIAIS EIRELI",
        "chave": 3998733,
        "numero": "7542-A",
        "valor": 100
    },
    {
        "entidade": "011311",
        "nome": "VOLNEI ANTONIO FRIEDRICH",
        "chave": 4016355,
        "numero": "9314-A",
        "valor": 197.7
    },
    {
        "entidade": "02.1250",
        "nome": "ALLIANZ SEGUROS S/A",
        "chave": 3950506,
        "numero": "AQU2631-D",
        "valor": 861.16
    },
    {
        "entidade": "0045305",
        "nome": "JUNDIAI OUTDOOR LTDA",
        "chave": 4016108,
        "numero": "1194-A",
        "valor": 4600
    },
    {
        "entidade": "356002",
        "nome": "CRR-CENTRO DE RECICLAGEM-RIO LTDA",
        "chave": 3985950,
        "numero": "124584-A",
        "valor": 12668.4
    },
    {
        "entidade": "0042447",
        "nome": "KLEIN & BOESING MAT. E SERV. ELETR. LTDA",
        "chave": 3992454,
        "numero": "13805-A",
        "valor": 200
    },
    {
        "entidade": "310004",
        "nome": "CRR-CENTRO DE RECICLAGEM-RIO LTDA",
        "chave": 3985960,
        "numero": "164058-A",
        "valor": 12178.8
    },
    {
        "entidade": "0042207",
        "nome": "METAFILM EMBALAGENS PLASTICAS LTDA",
        "chave": 3963076,
        "numero": "183437-A",
        "valor": 58650.13
    },
    {
        "entidade": "0038026",
        "nome": "C.O.MUELLER COMERCIO DE MOTORES E BOMBAS",
        "chave": 3989443,
        "numero": "36791-A",
        "valor": 1273.8
    },
    {
        "entidade": "022255",
        "nome": "CAPITAL IND E COM DE PROD RECIC LTDA",
        "chave": 3999154,
        "numero": "65434-A",
        "valor": 38801
    },
    {
        "entidade": "022255",
        "nome": "CAPITAL IND E COM DE PROD RECIC LTDA",
        "chave": 3999157,
        "numero": "65435-A",
        "valor": 38237.5
    },
    {
        "entidade": "022255",
        "nome": "CAPITAL IND E COM DE PROD RECIC LTDA",
        "chave": 3999671,
        "numero": "65440-A",
        "valor": 23425.5
    },
    {
        "entidade": "022255",
        "nome": "CAPITAL IND E COM DE PROD RECIC LTDA",
        "chave": 3999668,
        "numero": "65441-A",
        "valor": 28931.7
    },
    {
        "entidade": "022255",
        "nome": "CAPITAL IND E COM DE PROD RECIC LTDA",
        "chave": 3999699,
        "numero": "65448-A",
        "valor": 42745.5
    }
];

let table1 = document.querySelector('#tableGeral');
let table2 = document.querySelector('#tableSelecionados');

(function() {
    gerarTabela(documentos, table1); 
})();

function gerarTabela(dados, table) {
    
    const tbody = table.querySelector('tbody');
    let linhasGeradas = gerarLinhas(dados, table, tbody);

    if(table.id === 'tableGeral'){
        eventsTbGeral(linhasGeradas);
    }
    else {
        eventsTbSelect(linhasGeradas);
        table2.style.visibility = 'visible'
    }
    linhasGeradas.forEach(tr => {
        tbody.appendChild(tr);
    });
}

//função que gera as linhas:
function gerarLinhas(dados, table, tbody){
    tbody.innerHTML = '';
    let linhas = dados.map(item => {
        let trow = document.createElement('tr');
        let input;

        if(table.id === 'tableGeral') {
            input = `<input type = 'checkbox'>`;
        }
        else {
            input = `<input type = 'button' value ='dell'>`;
        }
        trow.innerHTML = 
        `<td>${item.entidade}</td>
         <td>${item.nome}</td>
         <td>${item.chave}</td>
         <td>${item.numero}</td>
         <td>${item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
         <td>${input}</td>`;
        trow.dataset.chaveId = item.chave;
        if(table.id === 'tableSelecionados') {
            verificar(trow, item.chave);
        }
        return trow;
    });
    return linhas;
}

//esta função adiciona eventos na tabela geral:
function eventsTbGeral(linhas) {

    colorirLinhas();
    selecionarTodas(linhas);

    function colorirLinhas(){
        linhas.forEach((linha) => {
            const input = linha.querySelector('input');
            linha.addEventListener('click', (event) => {
                linha.classList.toggle('trClass');
                if (event.target == input) {
                    return;
                }
                input.checked = !input.checked;
            })
        })
    }

    function selecionarTodas(linhas) {
        const selectAll = document.querySelector('#selectAll');
        linhas.forEach(tr => {
            const input = tr.querySelector('td > input');
            selectAll.addEventListener('change', () => {
                input.checked = selectAll.checked;
                if(selectAll.checked == true){
                    input.parentElement.parentElement.classList.toggle('trClass', true);
                }else{
                    input.parentElement.parentElement.classList.toggle('trClass', false);
                }
            })
        })
    }

    //adicionar o evento de click no botão do footer;
    const btnSelect = document.getElementById('btnSelect');
    btnSelect.addEventListener('click', () => {
        gerarTabela(documentos, table2);
    })
}

//esta função adiciona eventos na tabela select:
function eventsTbSelect(linhas, item) {

    const tbGeral = table1.querySelector('tbody');
    const inputs = tbGeral.querySelectorAll('tr > td > input');

    //filtrando as linhas da table1:
    
}

function verificar(trow, item) {

    const tbGeral = table1.querySelector('tbody');
    const inputs = tbGeral.querySelectorAll('tr > td > input');

    const selecionados = Array.from(inputs).filter(item => item.checked === true);

    const linhasSelecionadas = selecionados.map((item) => {
        return item.parentElement.parentElement;
    })

    console.log(linhasSelecionadas);
    console.log(item);

    if(item.chave === linhasSelecionadas[i].dataset.chaveId) {
        return;
    }
    else {
        return trow;
    }

}
