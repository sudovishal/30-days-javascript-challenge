// Activity 1
const book = {
    title: "The Rudest Book Ever",
    author: "Shwetabh Gangwar",
    year: "2020"
}
console.log(book);
console.log(book.title);
console.log(book.author);

// Activity 2
// Add a method to the book object that returns string with the book's title and author
book.getBookInfo = function () {
    return `${this.title} by ${this.author}`;
}
console.log(book.getBookInfo());

// add a method to the book object that takes a parameter of year and updates the book's year property
book.updateYear = function (newYear) {
    this.year = newYear;
    console.log(`The book had its second edition in ${this.year}`);
}
console.log(book.updateYear(2023));

// Activity 3
const library = {
    name: "Central Library",
    books: [
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
        { title: "Pride and Prejudice", author: "Jane Austen" },
    ],
};

console.log(library);

console.log("Library Name:", library.name);

library.books.forEach((book) => console.log(book.title));
const { books } = library
const bookTitles = books.map((book) => book.title);
console.log("Book Titles:", ...bookTitles);

// Activity 4
book.GetAuthorAndYear = function () {
    return `${this.author} (${this.year})`;
}
console.log(book.GetAuthorAndYear());
// Activity 5
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

for (const [key, value] of Object.entries(book)) {
    console.log(`${key}: ${value}`);
}

console.log(Object.values((book)))
console.log(`-------------------------------divider line-------------------------`);
for (const key in book) {
    if (typeof book[key] !== 'function') {
        console.log(`${key}: ${book[key]}`);
    }
}