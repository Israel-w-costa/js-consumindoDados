
async function buscaEndereco (cep) { 
    var mensagemErro = document.querySelector("#erro")
    mensagemErro.innerHTML =""
    try {
    var consultaCep =  await fetch(`https://viacep.com.br/ws/${cep}/json/`); 
    var consultaCepConvetida = await consultaCep.json();
    
    if (consultaCepConvetida.erro) {
        throw Error('Cep não esta correto');
} 
    var endereco = document.querySelector ("#endereco")
    var complemento = document.querySelector ("#complemento") 
    var bairro  = document.querySelector ("#bairro")
    var cidade = document.querySelector ("#cidade")
    var estado = document.querySelector ("#estado")

    endereco.value = consultaCepConvetida.logradouro
    complemento.value = consultaCepConvetida.complemento
    bairro.value = consultaCepConvetida.bairro
    cidade.value = consultaCepConvetida.localidade
    estado.value = consultaCepConvetida.uf

} catch (erro) {
    mensagemErro.innerHTML =`<p>Cep está invalido</p>`
    console.log (erro)

}
}

var cep =document.querySelector("#cep")
cep.addEventListener ('focusout', () => buscaEndereco(cep.value) )

