Criei essa página pra testar a API que fiz deploy no heroku.<br>
A base pra esse projeto foi esse [aqui](https://github.com/rodriguesrafaelm/lib-project) que criei usando Flask com SQL<br><br>


<br>
Esse projeto foi idealizado e executado 100% por conta própria. Estou explorando as tecnologias que venho aprendendo.<br>
A parte visual foi feita rapidamente apenas para demonstrar o funcionamento da API.<br>
 <b> O foco é testar a estrutura back-end.</b><br>



<h2>Ideia do projeto:</h2>

![image](https://user-images.githubusercontent.com/79672000/168525198-bf494e8a-0ace-4441-aae8-bbde7fab0379.png)

1. Get na url da page, inserir o ID no input da pagina e clicar em buscar.
2. Na página, por meio de javascript, um fetch na url da API.
3. A API rodando no heroku recebe a request, busca no banco de dados pelo ID e retorna um objeto com os dados do livro.
4. Por meio de uma função JavaScript, os dados do objeto são separados e inseridos na estrutura da página para serem exibidos ao usuário.

A reprodução local da página é a seguinte:
![image](https://user-images.githubusercontent.com/79672000/168534430-7f72f352-547a-4570-9657-62376fbb6b8a.png)

<h5>No momento estou tentando pensar em alguma forma de exibir as imagens, pois as url utilizam o protocolo HTTP (não seguro) e o GitHub, por forçar HTTPS 
não consegue renderiza-las.<br>
Eu substitui o uso da tag IMG pela URL sem renderizar, até conseguir pensar em uma solução.<br>
Poderia baixar as imagens com um script e subir direto na API, mas as plataformas gratuitas tem limite de armazenamento baixo.</h5>

<br>
Página disponível em: https://rodriguesrafaelm.github.io/biblioteca-web-page/
<br>
O banco de dados SQL foi carregado usando o Pandas em um dataset que encontrei no kaggle. https://www.kaggle.com/datasets/saurabhbagchi/books-dataset
