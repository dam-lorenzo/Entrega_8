const books = []

class readedBook {
    constructor(title,description , genre, author, year, pages, timeToRead, rating) {
        this.title = title;
        this.description = description;
        this.genres = genre.split(' ');
        this.author = author;
        this.year = parseInt(year);
        this.pages = parseInt(pages);
        this.estimateTime = parseFloat(timeToRead);
        this.rating = parseFloat(rating);
    }
    
    addTime(time) {
        time = parseFloat(time);
        this.estimateTime = (this.estimateTime + time)/2;
    }

    addGenre(genres) {
        for (const genre of genres) {
            if (this.genres.includes(genre)) {
                this.genres.push(genre)
            }
        }
    }

    addRating(rating) {
        rating = parseFloat(rating)
        this.rating = (this.rating + rating)/2
    }
}

function requestBookData() {
    let title = prompt("Ingrese el titulo del libro:");
    let description = prompt("Ingrese la descripcion del libro:");
    //let genre = prompt("Ingrese los generos del libro (solo separado por espacios):");
    //let author = prompt("Ingrese el nombre del autor:");
    // let pages = prompt("Ingrese la cantidad de paginas del libro (solo el numero):");
    // let time = prompt("Ingrese el tiempo que le llevo leerlo (solo las horas):");
    // let rating = prompt("Ingrese cuantas estrellas del 1 al 5 le asigna (solo el numero):");
    // let year = prompt("Ingrese el año de publicacion:");
    let genre   = 'None';
    let author  = 'None';
    let pages   = 'None';
    let time    = 'None';
    let rating  = 'None';
    let year    = 'None';
    
    const book = new readedBook(title, description, genre, author, year, pages, time, rating);
    return book
}

function createNewContainer(htmlbook) {
    let newContainer = document.createElement('div')
    newContainer.classList.add('container')
    let newRow = document.createElement('div')
    newRow.classList.add('row')
    newRow.appendChild(htmlbook)
    newContainer.appendChild(newRow)
    console.log('new container:')
    console.log(newContainer)
    return newContainer
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function appendBook(book) {
    let htmlbook = document.createElement('div')
    htmlbook.classList.add('col-sm-4')
    htmlbook.innerHTML = ` <div class="panel panel-primary">
                                <div class="panel-heading">${book.title}</div>
                                <div class="panel-body"><img src="img/leather-book-preview.png" class="img-responsive" style="width:100%" alt="Image"></div>
                                <div class="panel-footer">${book.description}</div>
                            </div>`
    //console.log(container)
    let rows = document.getElementsByClassName('row')
    let notAddedContainer = true
    let lastRow
    for (const row of rows) {
        if (row.getElementsByClassName('col-sm-4').length < 3){
            row.appendChild(htmlbook)
            notAddedContainer = false
        }
        lastRow = row
    }
    if (notAddedContainer) {
        let container = createNewContainer(htmlbook)
        insertAfter(lastRow.parentNode, container)
        container.insertAdjacentHTML('beforebegin', '<br>')
    }
}

function addBook() {
    const newBook = requestBookData()
    appendBook(newBook)
}

function commingSoon() {
    alert('This feature is comming soon')
}