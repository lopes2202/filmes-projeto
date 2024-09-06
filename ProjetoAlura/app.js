function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (campoPesquisa == "") {
    section.innerHTML = "Nada foi encontrado. Você precisa digitar corretamente o nome do filme ou gênero."
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
  let resultados = "";
  let nome = "";
  let genero = ""


  // Itera sobre cada filme no array 'filmesDados'.
  for (let dado of filmesDados) {
    nome = dado.nome.toLowerCase();
    genero = dado.genero.toLowerCase();
    if (nome.includes(campoPesquisa) || genero.includes(campoPesquisa)) {
      resultados += `<div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.nome}</a>
      </h2>
      <img src=${dado.imagem} alt="Descrição da imagem" class="img1">
      <p class="descricao-meta">${dado.descricao} </p>
      <div class="video-container">
        <iframe width="560" height="315" src=${dado.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>`;
    }

    // Cria uma div para cada filme, formatando-a como um resultado de pesquisa.
  }

  if(resultados == ""){
    section.innerHTML = "Filme não encontrado."
    return
  }
  // Atribui o conteúdo HTML gerado à seção de resultados.
  section.innerHTML = resultados;
}