function myScript () {
const form = document.querySelector('.search-form');

function recebeDados (evento) {
evento.preventDefault();
const id_livro = form.querySelector('.search');
console.log(id_livro.value);
getContent(id_livro.value);
}
form.addEventListener('submit', recebeDados)


    async function getContent(id) { 
        const response = await fetch(`https://using-api-to-learn.herokuapp.com/livros/${id}`);
        const data = await response.json()
        console.log(data)
        changeDom(data)
        
        function changeDom(data1) {
            document.getElementById('nome-livro').innerHTML = `${data1.livro}`;
            document.getElementById('nome-autor').innerHTML = `Autor: ${data1.autor}`;
            document.getElementById('ano-publicado').innerHTML = `Ano de publicação: ${data1.ano_publicado}`;
            document.getElementById('editora').innerHTML = `Editora: ${data1.editora}`;
            document.getElementById('book-image').innerHTML = `URL da imagem: ${data1.image_url}` + `<img src="${data1.image_url}"></img>`;
}

}
}
myScript();
