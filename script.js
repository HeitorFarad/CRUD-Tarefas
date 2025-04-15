let listaTarefas = []

function adicionarTarefa() {
    const tarefa = document.getElementById("inputTarefa").value.trim()
    const paragrafoMensagem = document.getElementById("mensagem");
    const listaTarefasHTML = document.getElementById("listaTarefas")

    let mensagem = "Tarefa adicionada com sucesso!";
    let novaTarefa = document.createElement("li")
    
    paragrafoMensagem.style.color = "#28A745"

    novaTarefa.id = tarefa

    if (tarefa != "") {
        let spanTexto = document.createElement("span")

        spanTexto.className = "textoTarefa"
        spanTexto.textContent = tarefa

        let botaoRemover = document.createElement("button")

        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(tarefa)

        let botaoEditar = document.createElement("button")

        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(tarefa)

        novaTarefa.appendChild(spanTexto)
        novaTarefa.appendChild(botaoEditar)
        novaTarefa.appendChild(botaoRemover)
        listaTarefasHTML.appendChild(novaTarefa)

        listaTarefas.push(tarefa)
    } else {
        mensagem = "Digite uma tarefa.";
        paragrafoMensagem.style.color = "#A34743"
    }
    
    document.getElementById("mensagem").textContent = mensagem;

    inputTarefa.value = ""
}

function removerTarefa(nomeTarefa) {
    if (nomeTarefa == listaTarefas[listaTarefas.indexOf(nomeTarefa)]) {
        listaTarefas.splice(listaTarefas.indexOf(nomeTarefa), 1)
        document.getElementById(nomeTarefa).remove()    
    } 
}

function editarTarefa(nomeTarefa) {
    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim() !== "") {
        listaTarefas[listaTarefas.indexOf(nomeTarefa)] = tarefaEditada
        
        document.getElementById(nomeTarefa).querySelector(".textoTarefa").textContent = tarefaEditada
        document.getElementById(nomeTarefa).querySelector(".editar").onclick = () => editarTarefa(tarefaEditada)
        document.getElementById(nomeTarefa).querySelector(".remover").onclick = () => removerTarefa(tarefaEditada)
        document.getElementById(nomeTarefa).id = tarefaEditada
    }
}

function limparLista() {
    while (listaTarefas.length > 0) {
        document.getElementById(listaTarefas[0]).remove()
        listaTarefas.splice(0, 1)
    }
    //mudar mensagem de texto "Tarefas limpas com sucesso"
}
