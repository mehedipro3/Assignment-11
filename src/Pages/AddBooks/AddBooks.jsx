import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddBook = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get('name');
    const image = form.get('image');
    const category = form.get('category');
    const quantity = form.get('quantity');
    const rating = form.get('rating');
    const author = form.get('author-name');
    const description = form.get('description');
    const bookAdderName = user?.displayName || 'Unknown User';
    const bookAdderEmail = user.email;

    const newBook = {
      name,
      image,
      category,
      quantity,
      rating,
      author,
      description,
      bookAdderName,
      bookAdderEmail,
    };

    console.log(newBook);

    fetch('https://library-server-khaki.vercel.app/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          Swal.fire({
            icon: 'success',
            title: 'Book Added',
            text: `${name} has been successfully added!`,
          });
          e.target.reset();
          navigate('/');
        }
      })
  };

  return (
    <div className="py-20 px-4 max-w-5xl mx-auto">
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-blue-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Add New Book</h2>

        <form onSubmit={handleAddBook} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Book Name</label>
              <input type="text" name="name" placeholder="Enter Book Name" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Image URL</label>
              <input type="text" name="image" placeholder="Enter Image URL" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Category</label>
              <select name="category" defaultValue="" required className="select select-bordered w-full">
                <option value="" disabled>Select Category</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="History">History</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Author</label>
              <input type="text" name="author-name" placeholder="Enter Author Name" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Quantity</label>
              <input type="number" name="quantity" min={1} placeholder="Book Quantity" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Rating</label>
              <input type="number" name="rating" min={1} max={5} placeholder="Book Rating (1 to 5)" required className="input input-bordered w-full" />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Short Description</label>
              <input type="text" name="description" placeholder="Enter Description" required className="input input-bordered w-full " />
            </div>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="btn btn-primary px-10 text-lg rounded-xl hover:scale-105 transition-transform duration-200">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
