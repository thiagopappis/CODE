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
let tbody1 = table1.querySelector('tbody');
let table2 = document.querySelector('#tableSelecionados');
let tbody2 = table2.querySelector('tbody');
let tbSelecionados = [];

(function() {
    gerarTabela(documentos, table1);   
    selecionar();
})();

function gerarTabela(dados, table) {

    if(table.id === 'tableSelecionados') {
        let inputs = tbody1.querySelectorAll('td > input');

        tbSelecionados = Array.from(inputs).filter((input) => {
            if(input.checked === true){
                return true;
            }
        });
    }
    
    dados.forEach((item) => {
        
        let trow = document.createElement('tr');
        trow.innerHTML = 
        `<td>${item.entidade}</td>
        <td>${item.nome}</td>
        <td>${item.chave}</td>
        <td>${item.numero}</td>
        <td>${item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
        <td></td>`;
            
        let inputElement = document.createElement('input');
        let tds = trow.querySelectorAll('td');

        if(table.id === 'tableGeral'){
            inputElement.type = 'checkbox';
            trow.dataset.chaveId = tds[2].innerText;
            tbody1.appendChild(trow);
            tds[5].appendChild(inputElement);
        }
        else {
            inputElement.type = 'button';   
            inputElement.value = '🗑️';
            table2.style.visibility = 'visible';
            tds[5].appendChild(inputElement);
            trow.dataset.chaveId = tds[2].innerText;
            remover(inputElement);

            tbSelecionados.forEach((input) => {
                let linha = input.parentElement.parentElement;
                if(trow.dataset.chaveId === linha.dataset.chaveId){
                    linha.remove(); 
                    tbody2.appendChild(trow);
                    table.appendChild(tbody2);
                }
            })
        }

    })
    if(table.id === 'tableGeral'){
        let tbGeral = tbody1.querySelectorAll('tr');
        colorirDescolorir(tbGeral);
        selecionarTodas(table);
        let linhas = tbody2.querySelectorAll('tr');
        if(linhas.length > 0){
            tbGeral.forEach((tr) => {
                linhas.forEach((linha) => {
                    if(tr.dataset.chaveId === linha.dataset.chaveId){
                        tr.remove();
                    }
                })
            })
        }
    }
}
    
function selecionar() {
    let btnSelect = document.querySelector('#btnSelect');
    btnSelect.addEventListener('click', () => {
        gerarTabela(documentos, table2);
    })
}

function colorirDescolorir(tbGeral) {
    Array.from(tbGeral).forEach((linha) => {
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

function selecionarTodas(table) {
    const selectAll = document.querySelector('#selectAll');
    const inputs = table.querySelectorAll('input');
    
    selectAll.addEventListener('change', () => {
        Array.from(inputs).forEach((item) => {
            item.checked = selectAll.checked;
            if(selectAll.checked == true){
                item.parentElement.parentElement.classList.toggle('trClass', true);
            }else{
                item.parentElement.parentElement.classList.toggle('trClass', false);
            }
        })
    })
}

function remover(button) {
    
    button.addEventListener('click', () => {

        let linha = button.parentElement.parentElement;
        tbody1.appendChild(linha);
        tbody1.innerHTML = '';
        linha.remove();
        gerarTabela(documentos, table1);
    })
}