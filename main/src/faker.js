const books = [
  {
    id: 1,
    title: "The Trials of Brother Jero",
    cover_image_url: "ssdsds",
    average_rating: 8,
    authorId: 1
  },
  {
    id: 2,
    title: "Half of a Yellow Sun",
    cover_image_url: "dsdsds",
    average_rating: 9,
    authorId: 3
  },
  {
    id: 3,
    title: "Americanah",
    cover_image_url: "dsdsds",
    average_rating: 9,
    authorId: 3
  },
  {
    id: 4,
    title: "King Baabu",
    cover_image_url: "sdsds",
    average_rating: 7,
    authorId: 1
  },
  {
    id: 5,
    title: "Children of Blood and Bone",
    cover_image_url: "sdsds",
    average_rating: 7,
    authorId: 2
  }
];

const authors = [
  { id: 1, first_name: "Wole", last_name: "Soyinka" },
  { id: 2, first_name: "Tomi", last_name: "Adeyemi" },
  { id: 3, first_name: "Chimamanda", last_name: "Adichie" }
];

let book_id = 5;
let author_id = 3;

module.exports = { books, authors };
