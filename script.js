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

let myLibrary = [theHobbit, fireAndIce]
let table = document.getElementById('di-library');

function addBookToLibrary(title, author, pages, read){
 newBook = new Book(title, author, pages, read)
 myLibrary.push(newBook)

let tr = document.createElement('tr')

 Object.entries(newBook).forEach(value => {
  const [key, val] = value
  
  if(typeof val !== 'function'){
   let td = document.createElement('td');
   td.innerText = val
   tr.appendChild(td);
  }
  
 });
table.appendChild(tr);
}



function displayData(array){
 // let allData = document.querySelectorAll('td')
 // if(allData.length > 0){
 //  table.removeChild(allData)
 // }


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



displayData(myLibrary)


var editValueButton = document.querySelector('button')
var backdrop;
var modal;
var demoContainer = document.querySelector('.demo-container')
// var textEdit = document.querySelector('.modal textarea')
var newTitle = ''
var newAuthor = ''
var numberOfPages = null
var hasReadNewBook = false
var quote = 'add your favorite books to the list!'
var editedQuote = ''



function closeModal(){
 if(backdrop){
  backdrop.remove();
 }
 if(modal){
  modal.remove()
 }
}




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
 modalHeading.textContent = 'add a book'
 modal.appendChild(modalHeading)

 var textEditContainer = document.createElement('div')
 textEditContainer.classList.add('modal-input')
 modal.appendChild(textEditContainer)

var titleInput = document.createElement('input')
titleInput.setAttribute('placeholder', 'title')
titleInput.setAttribute('type', 'text')
titleInput.addEventListener('input', function(){
 newTitle = titleInput.value
})
textEditContainer.appendChild(titleInput)

var authorInput = document.createElement('input')
authorInput.setAttribute('placeholder', 'author')
authorInput.setAttribute('type', 'text')
authorInput.addEventListener('input', function(){
 newAuthor = authorInput.value
})
textEditContainer.appendChild(authorInput)


var pagesInput = document.createElement('input')
pagesInput.setAttribute('placeholder', 'pages')
pagesInput.setAttribute('type', 'number')
pagesInput.addEventListener('input', function(){
 numberOfPages = pagesInput.value
})
textEditContainer.appendChild(pagesInput)

var checkboxDiv = document.createElement('div')

var readInput = document.createElement('input')
readInput.setAttribute('type', 'checkbox')
readInput.setAttribute('name', 'completed')
readInput.setAttribute('value', 'completed')
readInput.addEventListener('change', function(){
 if(this.checked){
  hasReadNewBook = true
 }else{
  hasReadNewBook = false
 }
})

var readLabel = document.createElement('label')
readLabel.setAttribute('for', 'completed')
readLabel.textContent = 'I have read this book.'
checkboxDiv.appendChild(readInput)
checkboxDiv.appendChild(readLabel)
textEditContainer.appendChild(checkboxDiv)

// var textEditArea = document.createElement('textarea')
// textEditArea.rows = '3';
// textEditArea.addEventListener('input', function(){
//   editedQuote = textEditArea.value
//  })
//  textEditArea.value = quote
// textEditContainer.appendChild(textEditArea)


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
  if(newTitle.trim().length > 0 && newAuthor.trim().length > 0){
   addBookToLibrary(newTitle, newAuthor, numberOfPages, hasReadNewBook)
   
   newTitle = ''
   newAuthor = ''
   numberOfPages = null;
   hasReadNewBook = false;

   authorInput.value = ''
   titleInput.value = ''
   pagesInput.value = null;
   readInput.checked = false

   
  }else{
   alert('must include title and author')
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