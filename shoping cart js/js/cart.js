let output = "";
fetch("/items.json")
  .then(resp => resp.json())
  .then(data => {
    data.forEach((element, index) => {

      output += `
        <div id="shopCard" class="col-lg-2 col-sm-4 mt-4">
        <div class="card img-container h-100">
        <img class="card-img-top zp-image-fit mt-4" src="${element.itempicture}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${element.itemname}</h5>
        <p class="card-text">${parseFloat(element.itemprice).toFixed(2)}</p>
        <button id="${index}" class="btn btn-primary getItem">Į krepšelį</button>
        </div> 
        </div>
       </div>
        `;
    });

    document.getElementById("card-data").innerHTML = output;
    let successMsg = document.getElementById("successMsg");
    successMsg.style.display = "none";
    let mybtn = document.getElementsByClassName("getItem");
    let crMsg = document.createElement("span");
    crMsg.textContent = "Sėkmingai įkelta į prekių krepšelį";
    for (x = 0; x < mybtn.length; x++) {
      document.getElementById(mybtn[x].id).addEventListener("click", (e) => {
        let cardTitle = document.getElementsByClassName("card-title")[e.target.id].textContent;
        let cardBody = document.getElementsByClassName("card-text")[e.target.id].textContent;

        //  if user already has memories in local, get that array and push into it.
        //else create a blank array and add the memory.

        memories = localStorage.getItem('memories') ? JSON.parse(localStorage.getItem('memories')) : [];
        myNewObj = { itemname: cardTitle, itemprice: parseFloat(cardBody).toFixed(2) }
        memories.push(myNewObj);
        localStorage.setItem('memories', JSON.stringify(memories));
        successMsg.append(crMsg);
        successMsg.style.display = "block";
        let removeMsg = setInterval(remove_Msg, 1500);
        function remove_Msg() {
          successMsg.style.display = "none";
          clearInterval(removeMsg);
        }

      })
    }
  });

