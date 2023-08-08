// (() => {

//     const consultaCEP = fetch('https://viacep.com.br/ws/21060480/json/')
//         .then(resposta => resposta.json())
//         .then(r => {

//             if (r.erro) {
//                 throw Error('Cep Invalido')
//             } else {
//                 console.log(r)
//             }
//         })
//         .catch(erro => console.log(erro))
//         .finally(m => console.log('Processo Finalizado'))

//     console.log(consultaCEP)

// })()


let mostra = document.getElementById('cep__naoexiste');

async function consultaRequisicao(ceps) {

    mostra.innerHTML = "";
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${ceps}/json/`)
        const resposta = await consultaCEP.json()
        if (resposta.erro) {
            throw Error()
        }
        console.log(resposta)

        let endereco = document.getElementById('endereco');
        let bairro = document.getElementById('bairro');
        let cidade = document.getElementById('cidade');
        let estado = document.getElementById('estado');

        endereco.value = resposta.logradouro;
        bairro.value = resposta.bairro;
        cidade.value = resposta.localidade;
        estado.value = resposta.uf;

        return resposta
    } catch (erro) {
        mostra.innerHTML = `<p> CEP invalido </p>`
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => consultaRequisicao(cep.value));





// let ceps = ['01001000', '01001001', '21060480'];
// let conjuntoCeps = ceps.map(enderecoCep => consultaRequisicao(enderecoCep));
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(res => console.log(res));
