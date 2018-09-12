// =========== Object Literal: =============
//
// const book1 = {
//   title: 'The Way of Kings',
//   author: 'Brandon Sanderson',
//   year: 2002,
//   getSummary: function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`
//   } //This is a method.
// }
//
// console.log(book1);
// console.log(book1.getSummary());
//
//
// ========== Object Constructor: ============
//
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}.`
//   }
// }
//
// const book1 = new Book('Winds of Winter', 'George RR Martin', 2055);
// const book2 = new Book('Doors of Stone', 'Patrick Rothfuss', 2022);
//
// console.log(book1);
// console.log(book1.getSummary());
// console.log(Object.values(book2));
//
//
// =========== Prototypes (available on every object): ============
//
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
//
// function Author(name, nationality, dob) {
//   this.name = name;
//   this.nationality = nationality;
//   this.dob = dob;
// }
//
// // Adding a prototype to Object:
//
// Book.prototype.getSummary = function() {
//   return `${this.title} was written by ${this.author} in ${this.year}.`;
// }
//
// Object.prototype.logSomething = function() {
//   console.log('Something');
//   return 'Something';
// }
//
// Array.prototype.description = function() {
//   console.log('this is an array');
//   return 'this is an array';
// }
//
// const array1 = [1,2,3,4,5];
// const array2 = ['1','2','3','4','5'];
// array1.description();
// array2.description();
//
// const book1 = new Book('Goblet of Fire', 'JK Rowling', 2005);
// const author1 = new Author('Terry Pratchett', 'British', 1950);
//
// console.log(book1.getSummary());
// console.log(author1.logSomething());
//
// =========== Classes: ============

class Car {
  constructor(make, model, year, colour) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
  }

  getSummary() {
    return `This ${this.colour} ${this.make} ${this.model} was made in ${this.year}.`;
  }
}

const car1 = new Car('BMW', 'XS', 2010,'black');

console.log(car1);
console.log(car1.getSummary());
