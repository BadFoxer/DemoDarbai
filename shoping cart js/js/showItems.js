
let getVal = JSON.parse(localStorage.getItem('memories'));
let output = "";
getVal.forEach((element, index) => {

  output += `<tr>
    <td>${element.itemname}</td>
    <td>${element.itemprice}</td>
    <td><button id="${index}" class="btn btn-primary delete">Delete</button></td>
  </tr>`

  document.getElementById("my-data").innerHTML = output;

  let mybtn = document.getElementsByClassName("delete");
  for (x = 0; x < mybtn.length; x++) {
    document.getElementById(mybtn[x].id).addEventListener("click", (e) => {
      deleteTableRow(e);
      getVal.splice(e.target.id, 1);
      localStorage.setItem('memories', JSON.stringify(getVal))
    });
  }
});

function deleteTableRow(e) {
  // event.target will be the input element.
  let td = e.target.parentNode;
  let tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
  window.location.reload();
}