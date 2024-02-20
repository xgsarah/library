function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'already read' : 'not read yet'
    }`;
  };
}

const book1 = new Book('My Book', 'Sarah', 244, false);
const book2 = new Book('Tiktok', 'dev', 1000, true);

console.log(book1.info());
console.log(book2.info());
