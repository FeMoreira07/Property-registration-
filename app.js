class app {
  
  cadastro(){
    event.preventDefault()
    let tipo = document.querySelector("select[name='tipo']").value
    let area = document.querySelector("input[name='area']").value
    let alugado = document.querySelector("input[name='alugado']").checked
    let Propriedade = new imoveis (tipo, area, alugado)

    this.mensagem(Propriedade)
    this.apagarInfo()
  }

  mensagem(Propriedade){
    let lista = document.createElement("li")
    let msg = ` Tipo : ${Propriedade.tipo}, Area: ${Propriedade.area}`
    if(Propriedade.alugado){
      let aviso = document.createElement("span")
      aviso.style.color = "white"
      aviso.style.backgroundColor = "red"
      aviso.innerText = "Alugado"
      lista.appendChild(aviso)
    }
    lista.innerHTML += msg
    let BotaoRemover = this.BotaoRemover()
    lista.appendChild(BotaoRemover)
    document.getElementById("properties").appendChild(lista)
  }

  BotaoRemover(){
    let botao = document.createElement("button")
    botao.setAttribute("onclick","App.remover()")
    botao.innerText = "Remover"
    return botao
  }

  apagarInfo(){
    document.querySelector("input[name='area']").value = ""
    document.querySelector("input[name='alugado']").checked = false
  }

  remover(){
    let r = event.target.parentNode 
    document.getElementById("properties").removeChild(r)
  }
}