let myLibrary = [];
let tableBody = document.getElementById("table-body");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function showModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

function saveBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);

    if(title != "" && author != "" && pages != "") {
        myLibrary.push(newBook);
    };

    displayBooks();
    clearForm();
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}

function displayBooks() {
    tableBody.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        td1.textContent = i + 1;
        td2.textContent = myLibrary[i].title;
        td3.textContent = myLibrary[i].author;
        td4.textContent = myLibrary[i].pages;

        if (myLibrary[i].read) {
            td5.innerHTML = "<i class='bi bi-check'></i>";
        } else {
            td5.innerHTML = "<i class='bi bi-x'></i>";
        }

        td6.innerHTML = "<i class='bi bi-trash'></i>";
        td6.className = "text-danger";
        td6.addEventListener("click", function() {
            myLibrary.splice(i, 1);
            displayBooks();
        });
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tableBody.appendChild(tr);
    }
}

function darkMode() {
    let body = document.body;
    let table = document.getElementById("table");
    let lightbulb = document.getElementById("lightbulb");
    let modal = document.getElementById("modal-content");
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");
    table.classList.toggle("bg-dark");
    table.classList.toggle("text-light");
    modal.classList.toggle("bg-dark");
    modal.classList.toggle("text-light");
    lightbulb.classList.toggle("bi-lightbulb");
    lightbulb.classList.toggle("bi-lightbulb-fill");
    lightbulb.classList.toggle("text-light");
}