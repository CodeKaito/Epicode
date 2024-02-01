let inputList = document.getElementById("input-list");
let lists = document.getElementById("shop-list");

function addProduct() {
    // Rimuovi la classe "border-danger" prima di verificarla di nuovo
    inputList.classList.remove("border-danger");

    // Verifica se l'input non è vuoto
    if (inputList.value.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = inputList.value;
        listItem.addEventListener("click", (e) => {
            e.target.remove();
        });
        lists.appendChild(listItem);
        inputList.value = "";
    } else {
        // Aggiungi la classe "border-danger" se l'input è vuoto
        inputList.classList.add("border-danger");
    }
}