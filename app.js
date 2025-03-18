const lista_de_amigos = []

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome_amigo = input.value.trim();

    if (nome_amigo === '') {
        alert('Por favor, insira um nome');
        return
    }

    lista_de_amigos.push(nome_amigo);

    atualizarLista();

    input.value = '';
}

function atualizarLista(){
    const list = document.getElementById('listaAmigos');
    list.innerHTML = '';

    lista_de_amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        list.appendChild(li);

    });
}

function sortearAmigo() {
    if (lista_de_amigos.length === 0){
        alert('A lista de amigos está vazia. Adicione amigos para sortear!')
        return;
    }

    const randomizar = Math.floor(Math.random() * lista_de_amigos.length);
    const amigoAleatorio = lista_de_amigos[randomizar]

    const sorteado = document.getElementById('resultado');
    sorteado.textContent = `O amigo sorteado foi: ${amigoAleatorio}`
}

function resetarLista(){
        lista_de_amigos.length = 0;
        atualizarLista();
        document.getElementById('resultado').textContent = '';
}