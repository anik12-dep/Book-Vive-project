import React, { use } from "react";
import { FaRegStar } from "react-icons/fa";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const Allbooks = () => {
  const books = use(bookPromise);
  console.log(books, "books");
  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center">Books</h2>

      {books.map((book) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={book.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2">
                {book.tags.map((tag) => (
                  <div className="badge text-green-500 font-bold shadow-lg">
                    {tag}
                  </div>
                ))}
              </div>
              <h2 className="card-title font-bold text-xl">{book.bookName}</h2>
              <p className="font-semibold text-lg">{book.author} </p>
              <div className="card-actions justify-between  border-t border-dashed border-gray-300 pt-4 text-xl">
                <div className="font-semibold">{book.category}</div>
                <div className="flex gap-2 items-center">
                  {book.rating} <FaRegStar />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Allbooks;
