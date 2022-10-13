/* Aula 24 Desafio Refatoracao */

// ELEMENTOS DA 1a CARTA APENAS

let foto = document.querySelector('#foto')

let nome = document.querySelector('#nome')

let descricao = document.querySelector('#descricao')


// section que acomoda todas as cartas

let sectionConteudos = document.querySelector('.conteudos')



// ENDERECO DO ARQUIVO JSON

const url = './users_teste.json'

function pegarDados(i) {

    fetch(url)

        .then(response => response.json())

        .then(dados => {

            if (dados.erro) {

                console.log("Erro ao acessar o JSON")

                return

            }

            // console.log(dados)

            // Quantidade de convidados

            let qtdconvidados = (dados.convidados.length)

            console.log("Quant. de convidados " + qtdconvidados)

            // passe o valor de i no parametro

            atribuirDados2(dados, i)

        })

} // fim pegarDados



// atribuir dados individualmente, ou seja, so para uma carta

// ela so funciona se for chamada dentro da funcao pegarDados

function atribuirDados(dados, i) {

    foto.setAttribute('src', "" + dados.convidados[i].foto)

    nome.textContent = dados.convidados[i].nome

    nacionalidade.textContent = dados.convidados[i].descricao
}



// SELECIONAR TODOS OS CARDS por class

let imgsFoto = document.getElementsByClassName('foto')

let nomesConvidados = document.getElementsByClassName('nome')

let descricaoUser = document.getElementsByClassName('descricao')



// ATRIBUIR DADOS PARA TODOS OS CARDs

// Selecionamos eles por class, com isso temos um array para cada elemento

// agora vamos atribuir para cada posicao os valores que pegamos

function atribuirDados2(dados, i) {

    imgsFoto[i].setAttribute('src', "" + dados.convidados[i].foto)

    nomesConvidados[i].textContent = dados.convidados[i].nome

    descricaoUser[i].textContent = dados.convidados[i].descricao


}



// usamos as funcoes createElement e appendChild

// para criar article (elemento html que vai acomodar cada carta)

// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article

function desenharCarta(id) {

    // CARD

    let carta = document.createElement("article")

    carta.setAttribute('class', 'card')

    sectionConteudos.appendChild(carta)



    // IMAGEM DENTRO DO CARD

    let imagem = document.createElement("img")

    carta.appendChild(imagem)

    imagem.setAttribute('class', 'foto')

    //imagem.setAttribute('src', 'images/pride/pride_fc.jpg')
    imagem.setAttribute('src', '')



    // NOME DO LUTADOR

    let nomeLutador = document.createElement("h2")

    nomeLutador.setAttribute('class', 'nome')

    carta.appendChild(nomeLutador)

    nomeLutador.textContent = "Nome"

    let descricaoUsers = document.createElement("h3")

    descricaoUsers.setAttribute('class', 'descricao')

    carta.appendChild(descricaoUsers)

    descricaoUsers.textContent = "Descricao"

    pegarDados(id)

}



// 1a carta pegamos os dados. Ela ja esta desenhada na tela

pegarDados(0)



// 2a carta em diante desenhamos em tela usando as funcoes

//desenharCarta(0)

desenharCarta(1)

desenharCarta(2)

desenharCarta(3)
