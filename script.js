function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read === "Y" ? "already read" : "not read yet"
    }`;
  };
}

const myLibrary = [];

//Adding new books
const addBtn = document.querySelector("#addBtn");
const formBtn = document.querySelector("#formBtn");
const dialog = document.querySelector("dialog");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const pagesInput = document.querySelector("#pagesInput");
const readInput = document.querySelector("#readInput");
const bookContainer = document.querySelector("#bookContainer");

addBtn.addEventListener("click", () => {
  dialog.show();
});

formBtn.addEventListener("click", () => {
  const book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.value
  );
  addBookToLibrary(book);
});

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);

  //outer book shell
  const bookDiv = document.createElement("div");
  bookDiv.classList.toggle("book");
  bookContainer.appendChild(bookDiv);

  //title
  const titleDiv = document.createElement("div");
  titleDiv.classList.toggle("title");
  titleDiv.classList.toggle("emphasis");
  titleDiv.textContent = "Title:";
  bookDiv.appendChild(titleDiv);
  const titleText = document.createElement("p");
  titleText.textContent = newBook.title;
  titleDiv.appendChild(titleText);

  //author
  const authorDiv = document.createElement("div");
  authorDiv.classList.toggle("author");
  authorDiv.classList.toggle("emphasis");
  authorDiv.textContent = "Author:";
  bookDiv.appendChild(authorDiv);
  const authorText = document.createElement("p");
  authorText.textContent = newBook.author;
  authorDiv.append(authorText);

  //pages
  const pagesDiv = document.createElement("div");
  pagesDiv.classList.toggle("pages");
  pagesDiv.classList.toggle("emphasis");
  pagesDiv.textContent = "Pages:";
  bookDiv.appendChild(pagesDiv);
  const pagesText = document.createElement("p");
  pagesText.textContent = newBook.pages;
  pagesDiv.append(pagesText);

  //read
  const readDiv = document.createElement("div");
  readDiv.classList.toggle("read");
  readDiv.classList.toggle("emphasis");
  readDiv.textContent = "Read:";
  bookDiv.appendChild(readDiv);
  const readText = document.createElement("p");
  readText.textContent = newBook.read;
  readDiv.appendChild(readText);

  //remove button
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.toggle("buttonContainer");
  bookDiv.appendChild(buttonDiv);
  const button = document.createElement("button");
  button.textContent = "Remove book";
  button.classList.toggle("removeBtn");
  buttonDiv.appendChild(button);
  button.addEventListener("click", () => {
    console.log("you want to remove this shitty book");
    bookToRemove = button.parentElement.parentElement;
    bookToRemove.textContent = "";
    bookContainer.removeChild(bookToRemove);
  });
}

//This application is currently flawed in the sense that it does not support localstorage
//To support storage, I should follow the directions and build the visuals based upon content of library array
//However, I'm currently done with this so I'll get back to it later
