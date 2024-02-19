// Contenitore dei risultati
const resultsBox = document.getElementById('results-area');

// Input post name
const postName = document.getElementById('post-name');

// Input post description
const postDesc = document.getElementById('post-description');

// Input post grade
const postGrade = document.getElementById('post-grade');

const apiUrl = "http://striveschool-api.herokuapp.com/api/agenda/";

window.onload = () => {
    getPosts();
};

async function getPosts() {
    try {
        const res = await fetch(apiUrl);
        const json = await res.json();
        createTemplatePosts(json)
    } catch (error) {
        console.log(error);
    }
}

function createTemplatePosts({ name, description, grade }) {

    let tableRow = document.createElement('tr');

    let rowName = document.createElement('th');

    tableHead.innerText = name;

    let rowDesc = document.createElement('td');

    rowDesc.innerText = description;

    let rowGrade = document.createElement('td');

    rowGrade.innerText = grade;

    let rowOps = document.createElement("td");

    // Tasto di modifica
    let editBtn = document.createElement("a");
    editBtn.classList.add("btn", "btn-primary", "btn-sm");

    let editImg = document.createElement("i");
    editImg.classList.add("fa-solid", "fa-pencil",);

    let editText = document.createElement("span");
    editText.innerText = "Edit";
    editText.classList.add("ms-1");

    editBtn.appendChild(editImg);
    editBtn.appendChild(editText);

    // Tasto di cancellazione
    let delBtn = document.createElement("a");
    editBtn.classList.add("btn", "btn-primary", "btn-sm");

    let delImg = document.createElement("i");
    editImg.classList.add("fa-solid", "fa-pencil",);

    let delText = document.createElement("span");
    editText.innerText = "Edit";
    editText.classList.add("ms-1");

    editBtn.appendChild(delImg);
    editBtn.appendChild(delText);

    rowOps.appendChild(editBtn);
    rowOps.appendChild(editText);

    tableRow.appendChild(rowName);
    tableRow.appendChild(rowDesc);
    tableRow.appendChild(rowGrade);
    tableRow.appendChild(rowOps);

    resultsBox.appendChild(tableRow);
}