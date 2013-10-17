var Booklist = function(numberRead, numberUnread, nextBook, currentBook,
lastBook, bookShelf) {
    this.numberRead = numberRead;
    this.numberUnread = numberUnread;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.bookShelf = bookShelf;

    this.chooseNextBook = function() {
        this.currentBook.read = true;
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.numberRead++;
        this.numberUnread--;
        for (var i=0; i < this.bookShelf.length; i++) {
            if (!(bookShelf[i].read)) {
                this.nextBook = this.bookShelf[i];
                break;
            }
        }
    };

    this.printCurrentBook = function() {
        place = document.getElementById("booksGoHere");
        place.innerHTML = "<strong>currentBook:</strong> " + this.currentBook.bookTitle;

    };

    this.printBookList = function() {
//        list = [];
//        place = document.getElementById("allBooks");
//        for (var i=0; i < this.bookShelf.length; i++) {
//            list.push(this.bookShelf[i].bookTitle);
//        }
//        place.innerHTML = "<strong>" + list + "</strong>";
        var newUL = document.createElement("ul");
        for (var i=0; i < this.bookShelf.length; i++) {
            var newLI = document.createElement("li");
            var txt = document.createTextNode(this.bookShelf[i].bookTitle);
            newLI.appendChild(txt);
            newUL.appendChild(newLI);
        }
        document.body.appendChild(newUL);
    };
};

var Book = function(bookTitle, genre, author, read, readDate) {
    this.bookTitle = bookTitle;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
};

prideAndPrej = new Book("Pride & Prejudice", "Classic", "Jane Austen", true, "2011, 10, 22");
fangirl = new Book("Fangirl", "Young Adult", "Rainbow Rowell", false);
foundations = new Book("Foundations", "Science Fiction", "Isaac Asimov", false);
hpSix = new Book("Harry Potter and the Half Blood Prince", "Young Adult", "JK Rowling", false, "2013, 05, 13");
grapesOfWrath = new Book("The Grapes of Wrath", "Historical Fiction", "John Steinbeck", false);

var avaBookShelf = [prideAndPrej, grapesOfWrath, fangirl, foundations, hpSix];

avaBookList = new Booklist(1, 4, fangirl, foundations, prideAndPrej, avaBookShelf);

avaBookList.printBookList();