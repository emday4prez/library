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

var editValueButton = document.querySelector('button')
var backdrop;
var modal;
var demoContainer = document.querySelector('.demo-container')
// var textEdit = document.querySelector('.modal textarea')
var quote = 'a modal component on a webpage --- can you do it?'
var editedQuote = ''

function updateParagraph(){
 outputParagraph.textContent = quote;
}

function closeModal(){
 if(backdrop){
  backdrop.remove();
 }
 if(modal){
  modal.remove()
 }
}
updateParagraph();



editValueButton.addEventListener('click', function(){
 backdrop = document.createElement('div')
 backdrop.classList.add('backdrop')
 backdrop.addEventListener('click', closeModal)

 document.body.insertBefore(backdrop,demoContainer)
 backdrop.addEventListener('click', closeModal)
 // textEdit.value = quote;
 modal = document.createElement('div')
 modal.classList.add('modal')

 var modalHeading = document.createElement('h1')
 modalHeading.textContent = 'edit your statement'
 modal.appendChild(modalHeading)

 var textEditContainer = document.createElement('div')
 textEditContainer.classList.add('modal-input')
 modal.appendChild(textEditContainer)

var textEditArea = document.createElement('textarea')
textEditArea.rows = '3';
textEditArea.addEventListener('input', function(){
  editedQuote = textEditArea.value
 })
 textEditArea.value = quote
textEditContainer.appendChild(textEditArea)


var modalActionsContainer = document.createElement('div');
 modalActionsContainer.classList.add('modal-actions');
 modal.appendChild(modalActionsContainer)

 var cancelButton = document.createElement('button')
 cancelButton.setAttribute('type', 'button')
 cancelButton.classList.add('btn-cancel')
 cancelButton.textContent = 'cancel'
 modalActionsContainer.appendChild(cancelButton)
 cancelButton.addEventListener('click', closeModal)

 var confirmButton = document.createElement('button')
 confirmButton.setAttribute('type', 'button')
 confirmButton.classList.add('btn-confirm')
 confirmButton.textContent = 'confirm'
 confirmButton.addEventListener('click', function(){
  closeModal()
  if(editedQuote.trim().length > 0){
   quote = editedQuote;
   updateParagraph()
  }
 })
 modalActionsContainer.appendChild(confirmButton)

 document.body.insertBefore(modal, demoContainer)
  editedQuote = quote;
});


// buttons[0].addEventListener('click', closeModal);

// buttons[1].addEventListener('click', function(){
//  closeModal();
//  if (editedQuote.trim().length > 0){
//   quote = editedQuote;
//   updateParagraph();
//  }

 
// });


// textEdit.addEventListener('input', function(){
//  editedQuote = textEdit.value
// })