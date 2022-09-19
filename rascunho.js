linha.innerHTML += `<tr class="linha-1">
        <th scope="row">${i + 1}</th>
        <td class="nome-table">${
          modalidades[optionvalue].alunos[i]
        } <p class="circulo"></p></td>
        <td class="data">
          <button onclick="botaoP1()" type="button" class="btn btn-success btn1"></button>
          <button type="button" class="btn btn-secondary btn1"></button>
          <button type="button" class="btn btn-danger btn1"></button>
        </td>
        <td class="data">
          <button type="button" class="btn btn-success btn1"></button>
          <button type="button" class="btn btn-secondary btn1"></button>
          <button type="button" class="btn btn-danger btn1"></button>
        </td>
      </tr>`;

`
      <td class="data">
          <button onclick="botaoP1()" type="button" class="btn btn-success btn1"></button>
          <button type="button" class="btn btn-secondary btn1"></button>
          <button type="button" class="btn btn-danger btn1"></button>
        </td>
        <td class="data">
          <button type="button" class="btn btn-success btn1"></button>
          <button type="button" class="btn btn-secondary btn1"></button>
          <button type="button" class="btn btn-danger btn1"></button>
        </td>
  `;

let bt1 = `<td class="data">
  <button onclick="botaoP1()" type="button" class="btn btn-success btn1"></button>
  <button type="button" class="btn btn-secondary btn1"></button>
  <button type="button" class="btn btn-danger btn1"></button>
</td>`;
let bt2 = `<td class="data">
  <button type="button" class="btn btn-success btn1"></button>
  <button type="button" class="btn btn-secondary btn1"></button>
  <button type="button" class="btn btn-danger btn1"></button>
</td>`;

let tr = linha.insertRow();

let td_id = tr.insertCell();
let td_nome = tr.insertCell();
let td_bt1 = tr.insertCell();
let td_bt2 = tr.insertCell();

td_id.innerText = i + 1;
td_nome.innerHTML = modalidades[optionvalue].alunos[i];
td_bt1.innerHTML = bt1;
td_bt2.innerHTML = bt2;
