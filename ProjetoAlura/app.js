function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";
  
    // Itera sobre cada filme no array 'filmesDados'.
    for (let dado of filmesDados) {
      // Cria uma div para cada filme, formatando-a como um resultado de pesquisa.
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
  
    // Atribui o conteúdo HTML gerado à seção de resultados.
    section.innerHTML = resultados;
  }