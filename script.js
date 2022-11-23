let myLibrary = [{title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: true}, {title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1216, read: false}];

function Book(title, author, pages, read) {
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    const submitButton = document.querySelector('.submit');
    
    submitButton.addEventListener('click', (event) => {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const read = document.querySelector('#read').value;
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        console.log(myLibrary);
        event.preventDefault();

        //reset the form
        document.querySelector('#theForm').reset();

        render()
    })
}

function render() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    for(let i=0; i < myLibrary.length; i++){

         // create a new div for each book
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

         // add the book details to the divs
         //title
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.innerHTML = `Title:${myLibrary[i].title}`
        bookDiv.appendChild(titleDiv);

        //author
        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        authorDiv.innerHTML = `Author:${myLibrary[i].author}`
        bookDiv.appendChild(authorDiv);

        //pages
        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add('pages');
        pagesDiv.innerHTML = `Pages:${myLibrary[i].pages}`
        bookDiv.appendChild(pagesDiv);

        //read
        const readDiv = document.createElement('div');
        readDiv.classList.add('read');
        readDiv.innerHTML = `Read:${myLibrary[i].read}`
        bookDiv.appendChild(readDiv);

         // append the div to the container
        container.appendChild(bookDiv);
    }
}

render()
addBookToLibrary()

