//let seletor = document.querySelector(".seletor");
nomeTab = document.querySelector(".nome-table");
//////////////////////

function salvar() {
  console.log("Salvo");
}

function atualizouSelect() {
  // Pegando valor o seletor//////
  let select = document.getElementById("seletor");
  let optionvalue = select.options[select.selectedIndex].value;
  console.log(optionvalue);
  //////

  if (optionvalue === "50") {
    alert("Escolha uma modalidade");
  } else {
    function linhas() {
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
      tableDisplay.style.display = "block";
      linha.innerHTML = "";

      titulo.innerHTML = modalidades[optionvalue].tiluto;
      horario.innerHTML = "Horário: " + modalidades[optionvalue].horario;
      professor.innerHTML = "Professor: " + modalidades[optionvalue].professor;
      numeroHead.innerHTML = "Nº";
      nomeHead.innerHTML = "Nome";
      data1.innerHTML = modalidades[optionvalue].dias[0];
      data2.innerHTML = modalidades[optionvalue].dias[1];

      for (let i = 0; i < modalidades[0].alunos.length; i++) {
        linha.innerHTML += `<tr class="linha-1">
        <th scope="row">${modalidades[optionvalue].alunos[i].id}</th>
        <td class="nome-table"><a class="a-nome" onclick="infoAluno(${modalidades[optionvalue].alunos[i].id}, ${optionvalue})" href="#">${modalidades[optionvalue].alunos[i].nome} </a> 
        <p class="circulo-${modalidades[optionvalue].alunos[i].id}"></p>
        <p class="circulo1-${modalidades[optionvalue].alunos[i].id}"></p>
        </td>
        <td class="data">
          <button onclick="botaoP1(${modalidades[optionvalue].alunos[i].id}, ${optionvalue})" type="button" class="btn btn-success btn1 botaop-${modalidades[optionvalue].alunos[i].id}"></button>
          <button onclick="botaoJ1(${modalidades[optionvalue].alunos[i].id}, ${optionvalue})" type="button" class="btn btn-secondary btn1 botaoj-${modalidades[optionvalue].alunos[i].id}"></button>
          <button onclick="botaoF1(${modalidades[optionvalue].alunos[i].id}, ${optionvalue})" type="button" class="btn btn-danger btn1 botaof-${modalidades[optionvalue].alunos[i].id}"></button>
        </td>
        <td class="data">
          <button onclick="botaoP2(${modalidades[optionvalue].alunos[i].id}, ${optionvalue})" type="button" class="btn btn-success btn1 botaop1-${modalidades[optionvalue].alunos[i].id}"></button>
          <button onclick="botaoJ2(${modalidades[optionvalue].alunos[i].id}, ${optionvalue})" type="button" class="btn btn-secondary btn1 botaoj1-${modalidades[optionvalue].alunos[i].id}"></button>
          <button onclick="botaoF2(${modalidades[optionvalue].alunos[i].id}, ${optionvalue})" type="button" class="btn btn-danger btn1 botaof1-${modalidades[optionvalue].alunos[i].id}"></button>
        </td>
      </tr>`;
      }
      //Fazendo aparecer o circula ao lado do nome
      for (let i = 0; i < modalidades[0].alunos.length; i++) {
        //Primeira fileira de botões
        let botaop = document.querySelector(
          ".botaop-" + modalidades[optionvalue].alunos[i].id
        );
        let confirma = document.querySelector(
          ".circulo-" + modalidades[optionvalue].alunos[i].id
        );
        let botaopusado = false;
        botaop.addEventListener("click", () => {
          if (botaopusado === false) {
            confirma.classList.remove("circulo-f");
            confirma.classList.remove("circulo-j");
            confirma.classList.add("circulo-p");
            console.log("presente circulo");
            botaopusado = true;
          } else {
            console.log("Já usou presente circulo");
          }
        });

        let botaof = document.querySelector(
          ".botaof-" + modalidades[optionvalue].alunos[i].id
        );
        let botaofusado = false;
        botaof.addEventListener("click", () => {
          if (botaofusado === false) {
            confirma.classList.remove("circulo-p");
            confirma.classList.remove("circulo-j");
            confirma.classList.add("circulo-f");
            botaofusado = true;
            console.log("falta circulo");
          } else {
            console.log("Já usou falta circulo");
          }
        });

        let botaoj = document.querySelector(
          ".botaoj-" + modalidades[optionvalue].alunos[i].id
        );
        let botaojusado = false;
        botaoj.addEventListener("click", () => {
          if (botaojusado === false) {
            confirma.classList.remove("circulo-p");
            confirma.classList.remove("circulo-f");
            confirma.classList.add("circulo-j");
            botaojusado = true;
            console.log("justificativa circulo");
          } else {
            console.log("Já usou justificativa circulo");
          }
        });
        //Segunda fileira de botões
        let confirma1 = document.querySelector(
          ".circulo1-" + modalidades[optionvalue].alunos[i].id
        );
        let botaop1 = document.querySelector(
          ".botaop1-" + modalidades[optionvalue].alunos[i].id
        );
        let botaop1usado = false;
        botaop1.addEventListener("click", () => {
          if (botaop1usado === false) {
            confirma1.classList.remove("circulo-f");
            confirma1.classList.remove("circulo-j");
            confirma1.classList.add("circulo-p");
            console.log("presente");
          } else {
            console.log("Já usou presente circulo");
          }
        });

        let botaof1 = document.querySelector(
          ".botaof1-" + modalidades[optionvalue].alunos[i].id
        );
        let botaof1usado = false;
        botaof1.addEventListener("click", () => {
          if (botaof1usado === false) {
            confirma1.classList.remove("circulo-p");
            confirma1.classList.remove("circulo-j");
            confirma1.classList.add("circulo-f");
            botaof1usado = true;
            console.log("falta");
          } else {
            console.log("Já usou falta circulo");
          }
        });

        let botaoj1 = document.querySelector(
          ".botaoj1-" + modalidades[optionvalue].alunos[i].id
        );
        let botaoj1usado = false;
        botaoj1.addEventListener("click", () => {
          if (botaoj1usado === false) {
            confirma1.classList.remove("circulo-p");
            confirma1.classList.remove("circulo-f");
            confirma1.classList.add("circulo-j");
            botaoj1usado = true;
            console.log("justificativa");
          } else {
            console.log("Já usou justificativa circulo");
          }
        });
      }
    }
    linhas();
  }
}

///// Botões de Preseça falta e justificativa ///////
let usoubotaop1 = true;
function botaoP1(id, op) {
  if (usoubotaop1 === true) {
    let presence = modalidades[op].alunos[id - 1].presenca + 1;
    modalidades[op].alunos[id - 1].presenca = presence;
    console.log("Presente contou");
    console.log(modalidades[op].alunos[id - 1].presenca);
    usoubotaop1 = true;
  } else {
    console.log("Esse aluno já está presente nessa lista");
  }
}
let usoubotaoj1 = true;
function botaoJ1(id, op) {
  if (usoubotaoj1 === true) {
    let justi = modalidades[op].alunos[id - 1].justificativa + 1;
    modalidades[op].alunos[id - 1].justificativa = justi;
    console.log("justificou contou");
    console.log(modalidades[op].alunos[id - 1].justificativa);
    usoubotaoj1 = true;
  } else {
    alert("Você já justificou esse aluno nessa lista");
  }
}
let usoubotaof1 = true;
function botaoF1(id, op) {
  if (usoubotaof1 === true) {
    let falta = modalidades[op].alunos[id - 1].falta + 1;
    modalidades[op].alunos[id - 1].falta = falta;
    console.log("faltou contou");
    console.log(modalidades[op].alunos[id - 1].falta);
    usoubotaof1 = true;
  } else {
    alert("Esse aluno já faltou nessa lista");
  }
}
let usoubotaop2 = true;
function botaoP2(id, op) {
  if (usoubotaop2 === true) {
    let presence = modalidades[op].alunos[id - 1].presenca + 1;
    modalidades[op].alunos[id - 1].presenca = presence;
    console.log("Presente contou");
    console.log(modalidades[op].alunos[id - 1].presenca);
    usoubotaop2 = true;
  } else {
    alert("Esse aluno já está presente nessa lista");
  }
}
let usoubotaoj2 = true;
function botaoJ2(id, op) {
  if (usoubotaoj2 === true) {
    let justi = modalidades[op].alunos[id - 1].justificativa + 1;
    modalidades[op].alunos[id - 1].justificativa = justi;
    console.log("justificou contou");
    console.log(modalidades[op].alunos[id - 1].justificativa);
    usoubotaoj2 = true;
  } else {
    alert("Você já justificou esse aluno nessa lista");
  }
}
let usoubotaof2 = true;
function botaoF2(id, op) {
  if (usoubotaof2 === true) {
    let falta = modalidades[op].alunos[id - 1].falta + 1;
    modalidades[op].alunos[id - 1].falta = falta;
    console.log("faltou contou");
    console.log(modalidades[op].alunos[id - 1].falta);
    usoubotaof2 = true;
  } else {
    alert("Esse aluno já faltou nessa lista");
  }
}

function infoAluno(id, op) {
  let popup = document.querySelector(".popup-wrapper");
  popup.innerHTML = "";
  popup.innerHTML = `<div class="popup">
  <div class="popup-close">x</div>
  <div class="popup-content">
    <h2>Ficha do Aluno</h2>
    <br />
    <h4>Aluno: ${modalidades[op].alunos[id - 1].nome}</h4>
    <h6>Modalidade: ${modalidades[op].tiluto} - Professor: ${
    modalidades[op].professor
  }</h6>
    <h5>Presença: ${modalidades[op].alunos[id - 1].presenca}</h5>
    <h5>Faltas: ${modalidades[op].alunos[id - 1].falta}</h5>
    <h5>Justificativas: ${modalidades[op].alunos[id - 1].justificativa}</h5>
  </div>`;
  popup.style.display = "block";
  console.log("popup");
  let popupClose = document.querySelector(".popup-close");
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

let idAlunoAdd = document.querySelector(".id-add").value;
let nomeAlunoAdd = document.querySelector(".nome-add");

function iddoaluno() {
  let select = document.getElementById("seletor-form");
  let optionvalueadd = select.options[select.selectedIndex].value;
  console.log(optionvalueadd);
  document.querySelector(".id-add").value =
    modalidades[optionvalueadd].alunos.length + 1;
  console.log();
}
function adicionarAluno() {
  let select = document.getElementById("seletor-form");
  let optionvalueadd = select.options[select.selectedIndex].value;
  console.log(optionvalueadd);

  let addAluno = {
    id: parseInt(document.querySelector(".id-add").value),
    nome: document.querySelector(".nome-add").value,
    presenca: 0,
    falta: 0,
    justificativa: 0,
  };
  modalidades[optionvalueadd].alunos.push(addAluno);
  document.getElementById("seletor-form").value = 50;
  document.querySelector(".id-add").value = "";
  document.querySelector(".nome-add").value = "";
}
function addAluno() {
  let popup = document.querySelector(".popup-form");
  popup.style.display = "block";
  console.log("popup-add");
  let popupClose = document.querySelector(".popup-close-add");
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

let dados = modalidades;
