const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinimna = parseFloat(prompt('Digite a nota mínima: '));

let linhas = "";

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-aividade');

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinimna ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;

    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atulizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {   
    const mediaFinal = calculaMediaFInal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinimna ? spanAprovado : spanReprovado;

}

function calculaMediaFInal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atulizaTabela();
    atualizaMediaFinal();
});