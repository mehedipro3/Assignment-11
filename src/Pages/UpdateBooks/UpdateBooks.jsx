
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateBooks = () => {
  
  const book = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const updatedBook = {
      name: form.get('name'),
      image: form.get('image'),
      category: form.get('category'),
      quantity: form.get('quantity'),
      rating: form.get('rating'),
      author: form.get('author-name'),
      description: form.get('description'),
    };

    fetch(`https://library-server-khaki.vercel.app/books/${book._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire({
            title: 'Book updated successfully!',
            icon: 'success',
          });
          navigate('/allBooks');
        }
      });
  };

  return (
    <section className="px-6 py-16 bg-gradient-to-tr from-blue-100 to-green-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-blue-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-10 border-b pb-4">Update Book Information</h2>

        <form onSubmit={handleUpdateBook} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Book Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Name</label>
            <input
              type="text"
              name="name"
              defaultValue={book.name}
              placeholder="Enter book name"
              className="input input-bordered w-full bg-blue-50 hover:bg-yellow-50 transition"
              required
            />
          </div>

          {/* Image Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={book.image}
              placeholder="Image link"
              className="input input-bordered w-full bg-blue-50 hover:bg-yellow-50 transition"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              defaultValue={book.category}
              className="select select-bordered w-full bg-blue-50 hover:bg-yellow-50 transition"
              required
            >
              <option disabled value="">Select category</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="History">History</option>
            </select>
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
            <input
              type="text"
              name="author-name"
              defaultValue={book.author}
              placeholder="Author name"
              className="input input-bordered w-full bg-blue-50 hover:bg-yellow-50 transition"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={book.quantity}
              placeholder="Number of books"
              className="input input-bordered w-full bg-blue-50 hover:bg-yellow-50 transition"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1–5)</label>
            <input
              type="number"
              name="rating"
              defaultValue={book.rating}
              placeholder="Rating"
              className="input input-bordered w-full bg-blue-50 hover:bg-yellow-50 transition"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
            <input
              type="text"
              name="description"
              defaultValue={book.description}
              placeholder="Description"
              className="input input-bordered w-full bg-blue-50 hover:bg-yellow-50 transition"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="btn bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-xl font-semibold transition hover:scale-105"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateBooks;
