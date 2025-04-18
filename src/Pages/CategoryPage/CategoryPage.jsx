
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";



export default function CategoryPage() {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);

  console.log(categoryName);

  useEffect(() => {
    fetch(`http://localhost:3000/books?category=${categoryName}`)
      .then(res => res.json())
      .then((data) => {
        setBooks(data)
      })

  }, [categoryName]);




  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Books in: {categoryName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-2xl font-semibold">{book.name}</h3>
              <p className="text-xl text-gray-600">Author: {book.author}</p>
              <p className="text-xl">Category: {book.category}</p>
              <p className="text-xl">Quantity: {book.quantity}</p>
              <div className="flex gap-1.5">
                <p className="text-xl ">Rating: </p>
                <StarRatings
                  rating={Number(book.rating)}
                  starRatedColor="red"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                />
              </div>
              <Link to={`/details/${book._id}`}>
                <button className="mt-3 px-4 py-2 bg-sky-300 text-white rounded hover:bg-indigo-800">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
