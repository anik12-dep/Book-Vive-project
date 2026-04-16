import React, { use } from "react";
import { useParams } from "react-router";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId } = useParams();
  console.log(typeof bookId, "bookId");

  const books = use(bookPromise);
  console.log(books, "books");
  const expectedBook = books.find((book) => book.bookId === Number(bookId));
  console.log(expectedBook, "expectedBook");
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img src={expectedBook.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
