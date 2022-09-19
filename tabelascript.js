function atualizouSelectTabela() {
  // Pegando valor o seletor//////
  let select = document.getElementById("seletor");
  let optionvalue = select.options[select.selectedIndex].value;
  console.log(optionvalue);
  //////

  if (optionvalue === "50") {
    alert("Escolha uma modalidade");
  } else {
    function linhasTabela() {
      let linha = document.querySelector(".linha-0");
      let headData1 = document.querySelector(".data");
      let titulo = document.querySelector(".titulo");
      let horario = document.querySelector(".horario");
      let professor = document.querySelector(".professor");
      let data1 = document.querySelector(".data-1");
      let data2 = document.querySelector(".data-2");
      let numeroHead = document.querySelector(".numero-head");
      let nomeHead = document.querySelector(".nome-head");
      let tableDisplay = document.querySelector(".table-display");
      let numerodeaulas = document.querySelector(".ndeaulas");
      linha.innerHTML = "";
      tableDisplay.style.display = "block";

      titulo.innerHTML = modalidades[optionvalue].tiluto;
      horario.innerHTML = "Horário: " + modalidades[optionvalue].horario;
      professor.innerHTML = "Professor: " + modalidades[optionvalue].professor;
      numeroHead.innerHTML = "Nº";
      nomeHead.innerHTML = "Nome";
      data1.innerHTML = "Presenças";
      data2.innerHTML = "Faltas";
      numerodeaulas.innerHTML =
        "Número de aulas: " + modalidades[optionvalue].ndeaulas;
      for (let i = 0; i < modalidades[0].alunos.length; i++) {
        var resultado =
          (modalidades[optionvalue].alunos[i].presenca /
            modalidades[optionvalue].ndeaulas) *
          100;

        linha.innerHTML += `<tr class="linha-1">
          <th scope="row">${modalidades[optionvalue].alunos[i].id}</th>
          <td class="nome-table a-nome">${modalidades[optionvalue].alunos[i].nome}
          <p class="circulo-${modalidades[optionvalue].alunos[i].id}"></p>
          <p class="circulo1-${modalidades[optionvalue].alunos[i].id}"></p>
          </td>
          <td class="data">
          ${modalidades[optionvalue].alunos[i].presenca}
          </td>
          <td class="data">
          ${modalidades[optionvalue].alunos[i].falta}
          </td>
          <td class="data">
          ${resultado}%
          </td>
        </tr>`;
      }
    }
    linhasTabela();
  }
}
