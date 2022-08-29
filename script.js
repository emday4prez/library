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

function displayData(array){
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

var outputParagraph = document.querySelector('#quote')

var buttons = document.querySelectorAll('button')
var modal = document.querySelector('.modal')
var backdrop = document.querySelector('.backdrop')

var textEdit = document.querySelector('.modal textarea')
var quote = 'a modal component on a webpage --- can you do it?'
var editedQuote = ''

function updateParagraph(){
 outputParagraph.textContent = quote;
}

function closeModal(){
 modal.style.display = 'none'
 backdrop.style.display = 'none'
}
updateParagraph();



buttons[2].addEventListener('click', function(){
 modal.style.display = 'block';
 backdrop.style.display = 'block';
 editedQuote = quote;
 textEdit.value = quote;
});

// backdrop.addEventListener('click', closeModal)
buttons[0].addEventListener('click', closeModal);

buttons[1].addEventListener('click', function(){
 closeModal();
 if (editedQuote.trim().length > 0){
  quote = editedQuote;
  updateParagraph();
 }

 
});


textEdit.addEventListener('input', function(){
 editedQuote = textEdit.value
})