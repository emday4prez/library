

function Book(title, author, pages, read){
 this.title = title
 this.author = author 
 this.pages = pages
 this.read = read

 this.info = function (){
  return `${this.title} by ${this.author} has ${this.pages} pages.`
 }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
const fireAndIce = new Book('A Song of Fire and Ice', 'George R.R. Martin', 893, false)
function addBookToLibrary(){
 newBook = new Book(title, authors, pages, read)
 myLibrary.push(newBook)
}

let myLibrary = [theHobbit, fireAndIce]
let table = document.getElementById('di-library');

const displayData = (array) => {
 array.forEach(item => {
 let tr = document.createElement('tr');

 Object.entries(item).forEach(value => {
  const [key, val] = value
  
  if(typeof val !== 'function'){
   let td = document.createElement('td');
   td.innerText = val
   tr.appendChild(td);
  }
  
 });
 table.appendChild(tr);
})
}

displayData(myLibrary);


