let submit = document.querySelector(".get-btn");
let tBody = document.querySelector(".tbody");
let total = document.querySelector("#total");
let tFoot = document.querySelector("tfoot tr");
let input = document.querySelector(".search-input");

let totalCost = 0;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name");
  let cost = document.querySelector("#cost");
  if (name.value === "" || cost.value === "") {
    alert("Please fill in all fields");
    return;
  } else {
    tFoot.style.visibility = "visible";
    let row = document.createElement("tr");
    row.innerHTML = `
            <td class="data">${name.value}</td>
            <td>${cost.value}</td>
            `;
    tBody.appendChild(row);
    totalCost += parseInt(cost.value);
    total.innerText = totalCost;
    name.value = "";
    cost.value = "";
  }
});
input.addEventListener("input", () => {
  let data = document.querySelectorAll(".data");
  let arr = Array.from(data);
   arr.filter((element) => {
    if (element.textContent.includes(input.value)) {
    //  console.log(element.parentNode);
      let name = element.textContent;
      let cost = element.nextElementSibling.textContent;
   //   console.log(name);
   //   console.log(cost);

   //   let row = document.createElement("tr");
   //   row.innerHTML = `
       
     //       `;

     //   console.log(row);
        
      tBody.innerHTML = `
             <tr>
            <td class="data">${name}</td>
            <td>${cost}</td>
            </tr>
      `;
    }
  });
  console.log(input.value);
});
