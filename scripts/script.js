let $ = document;
let bookNameInput = $.querySelector("#input--name");
let bookAuthorInput = $.querySelector("#input--author");
let bookDateInput = $.querySelector("#input--date");
let addBookButton = $.querySelector(".add_book");
let table = $.querySelector("table");
let books = JSON.parse(localStorage.getItem("books"));

function bookRowGenerator(
  name = bookNameInput.value,
  author = bookAuthorInput.value,
  date = bookDateInput.value
) {
  let newTableRow = $.createElement("tr");
  let bookNameData = $.createElement("td");
  let bookAuthorData = $.createElement("td");
  let bookDateData = $.createElement("td");
  bookNameData.textContent = name;
  bookAuthorData.textContent = author;
  bookDateData.textContent = date;
  newTableRow.append(bookNameData, bookAuthorData, bookDateData);
  table.append(newTableRow);
}

$.addEventListener("DOMContentLoaded", function () {
  if (books) {
    for (let i of books) {
      bookRowGenerator(i.name, i.author, i.date);
    }
  } else {
    books = [];
  }
});

addBookButton.addEventListener("click", function () {
  if (
    bookNameInput.value.trim() &&
    bookDateInput.value.trim() &&
    bookAuthorInput.value.trim()
  ) {
    bookRowGenerator();
    let currentBook = {
      name: bookNameInput.value,
      author: bookAuthorInput.value,
      date: bookDateInput.value,
    };
    bookNameInput.value = "";
    bookDateInput.value = "";
    bookAuthorInput.value = "";
    books.push(currentBook);
    localStorage.setItem("books", JSON.stringify(books));
  }
});
