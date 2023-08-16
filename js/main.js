const consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta=>resposta.json())
.then(r=> {
    if (r.error) {
       throw Error ("esta errado")
}else console.log (" esta correto")
})
.catch (error=> console.log (error))
.finally(mensagem=>console.log("esta finalizado"))

console.log (consultaCep)