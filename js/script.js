const newItem = document.querySelector("#newItem");
const list = document.querySelector("#list");
const form = document.querySelector("form");
const warningAlert = document.querySelector("#warning-alert");
const closeWarning = document.querySelector("#close-warning");
const itemName = document.querySelector(".item");

form.onsubmit = (event) => {
  event.preventDefault();

  if (newItem.value === "") {
    alert("Adicione um item!");
  } else {
    const listItem = document.createElement("li");
    const inputItem = document.createElement("input");
    inputItem.type = "checkbox";

    const spanItem = document.createElement("span");
    spanItem.textContent = newItem.value;

    const imgDelete = document.createElement("img");
    imgDelete.setAttribute("src", "./image/icons/icon-bin.svg");
    
    imgDelete.addEventListener("click", () => {      
      itemName.textContent = spanItem.textContent;
      warningAlert.classList.remove("hidden");
      listItem.remove();
    });

    listItem.append(inputItem);
    listItem.append(spanItem);
    listItem.append(imgDelete);
    list.append(listItem);
    newItem.value = "";
  }
};

  closeWarning.addEventListener("click", () => {
  warningAlert.classList.add("hidden");
});
