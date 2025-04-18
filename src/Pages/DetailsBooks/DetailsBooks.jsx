import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthContext from '../../Context/AuthContext/AuthContext';
import StarRatings from 'react-star-ratings';

const DetailsBook = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const borrowBookDetails = {
      userName: form.get('name'),
      userEmail: form.get('email'),
      returnDate: form.get('returnDate'),
      bookId: book._id,
      bookName: book.name,
      borrowDate: new Date(),
      userPic: user?.photoURL,
      bookImage: book.image,
      bookCategory: book.category,
    };

    fetch(`http://localhost:3000/borrow/${book._id}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(borrowBookDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Book Borrowed Successfully!',
            icon: 'success',
          });
          document.getElementById('borrow_modal').close();
          navigate('/');
        }
      });
  };

  return (
    <section className="px-6 py-16">
      <div className="bg-[#e3f2fd] rounded-3xl shadow-xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-shrink-0">
          <img src={book.image} alt={book.name} className="w-72 h-auto rounded-xl shadow-lg" />
        </div>

        <div className="flex-1 space-y-3 text-gray-800">
          <h1 className="text-3xl font-bold text-sky-700">{book.name}</h1>
          <p><span className="font-semibold">Author:</span> {book.author}</p>
          <p><span className="font-semibold">Category:</span> {book.category}</p>
          <p><span className="font-semibold">Description:</span> {book.description}</p>
          <p><span className="font-semibold">Content:</span> {book.bookContent}</p>
          <p><span className="font-semibold">Quantity:</span> {book.quantity}</p>

          <div className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span>
            <StarRatings
              rating={Number(book.rating)}
              starRatedColor="#facc15"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
          </div>

          <button
            onClick={() => document.getElementById('borrow_modal').showModal()}
            className={`mt-4 w-52 py-2 rounded-lg transition font-semibold text-white ${
              book.quantity > 0
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={book.quantity === 0}
          >
            {book.quantity > 0 ? 'Borrow Book' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="borrow_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-blue-100 p-6 rounded-xl">
          <h3 className="text-lg font-bold mb-4">Borrow: {book.name}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Name</label>
              <input
                name="name"
                type="text"
                defaultValue={user.displayName}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Email</label>
              <input
                name="email"
                type="email"
                defaultValue={user.email}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Return Date</label>
              <input
                name="returnDate"
                type="date"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="btn bg-green-500 hover:bg-green-600 text-white border-none"
              >
                Confirm Borrow
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('borrow_modal').close()}
                className="btn bg-red-500 hover:bg-red-600 text-white border-none"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default DetailsBook;
