
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



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
        {books.map((book,idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-semibold">{book.name}</h3>
              <p className="text-sm text-gray-600">Author: {book.author}</p>
              <p className="text-sm">Category: {book.category}</p>
              <p className="text-sm">Quantity: {book.quantity}</p>
              {/* <ReactStars
                count={5}
                size={24}
                value={book.rating}
                edit={false}
                activeColor="#ffd700"
              /> */}
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
