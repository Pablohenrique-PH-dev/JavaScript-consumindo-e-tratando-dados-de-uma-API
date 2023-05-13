//console.log("Pablo Henrique Programador de software");

//function mandaMensagem(){
//    console.log("teste 1");
//    console.log("teste 2");
//    console.log("teste 3");
//    console.log("teste 4");
//    console.log("teste 5");

//    function testekk(){
//        console.log("kkkk");
//    }

//    setTimeout(testekk, 5000);

//    console.log("finish");
//}

//setTimeout(mandaMensagem, 5000);

//console.log("acabou");

/*

// PRIMEIRA MANEIRA DE FAZER

var consultaCEP = fetch('https://viacep.com.br/ws/23585040/json')
.then(Resposta => Resposta.json())
.then(r => {
    if (r.erro){
    throw Error('Esse cep não existe!')
}else
    console.log(r) // completo
    console.log(r.uf) // estado
    console.log(r.bairro) // bairro
    console.log(r.logradouro) // rua
})
.catch(erro => console.log(erro))

.finally(mensagem => console.log('Processamento de consulta cep concluído!'));

console.log(consultaCEP);

*/

// SEGUNDA MANEIRA DE FAZER

async function buscaEndereco(cep) {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    var consultaCEPCovertido = await consultaCEP.json()
    if (consultaCEPCovertido.erro) {
        throw Error('CEP não existente!!! verifique e tente novamente.')
    }
    // CRIA NOME PARA A VARIALVEL DO CAMPO A QUAL É RESERVADO PARA ELE NO SITE
    var logradouro = document.getElementById('endereco');
    var cidade = document.getElementById('cidade');
    var bairro = document.getElementById('bairro');
    var estado = document.getElementById('estado');

    // PREENCHE O CAMPO NO SITE COM O VALOR DEFINIDO NA VARIALVEL
    logradouro.value = consultaCEPCovertido.logradouro
    cidade.value = consultaCEPCovertido.localidade
    estado.value = consultaCEPCovertido.uf
    bairro.value = consultaCEPCovertido.bairro        
   

    console.log(consultaCEPCovertido)
    console.log(consultaCEPCovertido.uf) // estado
    console.log(consultaCEPCovertido.bairro) // bairro
    console.log(consultaCEPCovertido.logradouro); // rua
    console.log(consultaCEPCovertido.logradouro); // rua
    } catch (erro) {
        console.log(erro)
        mensagemErro.innerHTML = `<p>CEP não existente!!! verifique e tente novamente.</p>`
        // alert('CEP não existente!!! verifique e tente novamente.')
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

