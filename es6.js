class Recipe {
  constructor(foodname, fromwhere, pricing) {
    this.foodname = foodname;
    this.fromwhere = fromwhere;
    this.pricing = pricing;
  }
}

class UI {
  addRecipeList(recipe) {
    const list = document.getElementById("myrecipelist");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${recipe.foodname}</td>
    <td>${recipe.fromwhere}</td>
    <td>${recipe.pricing}</td>
    <td><a href="" class="delete">X</a></td>
    
    `;
    list.appendChild(row);
  }

  showAlert(message, className) {
    const div = document.createElement("div");

    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");

    const form = document.querySelector("#recipe-form");

    container.insertBefore(div, form);

    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  deleteRecipe(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById("foodname").value = "";
    document.getElementById("fromwhere").value = "";
    document.getElementById("pricing").value = "";
  }
}

document.getElementById("recipe-form").addEventListener("submit", function(e) {
  const foodname = document.getElementById("foodname").value;
  const fromwhere = document.getElementById("fromwhere").value;
  const pricing = document.getElementById("pricing").value;

  const recipe = new Recipe(foodname, fromwhere, pricing);

  const ui = new UI();

  if (foodname === "" || fromwhere === "" || pricing === "") {
    ui.showAlert("please fill in all fields", "error");
  } else {
    ui.addRecipeList(recipe);
    ui.showAlert("Recipe Added", "success");

    ui.clearFields();
  }
  e.preventDefault();
});

document.getElementById("myrecipelist").addEventListener("click", function(e) {
  const ui = new UI();

  ui.deleteRecipe(e.target);

  ui.showAlert("Recipe Remove", "success");
  e.preventDefault();
});
