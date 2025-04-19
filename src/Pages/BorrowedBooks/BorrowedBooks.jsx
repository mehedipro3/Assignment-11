import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react';
import Nodata from '../../assets/Nodata.json';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const BorrowedBooks = () => {

  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();



  useEffect(() => {

    fetch(`http://localhost:3000/bookBorrowed?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBorrowedBooks(data)
      })

    // axios.get(`http://localhost:3000/bookBorrowed?email=${user.email}`, {withCredentials: true})
    // .then(res => {
    //     // console.log(res.data)
    //     setBorrowedBooks(res.data)
    // })

  }, [user.email])

  if (borrowedBooks.length < 1) {
    return <div className='py-32 flex justify-center'>
      <Lottie className='w-56' animationData={Nodata}></Lottie>
    </div>;
  }

  // console.log(user.email)

  const handleReturn = (borrowBoookId, bookId) => {
    console.log(borrowBoookId);
    console.log("Book ID:", bookId);

    Swal.fire({
      title: "Are you sure for Return?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Return it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bookBorrowed/${borrowBoookId}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ id: borrowBoookId }),
        })
          .then(res => res.json())
          .then(data => {
            navigate('/');
            if (data.message) {
              Swal.fire('Returned!', 'The book has been returned.', 'success');
            }
            // const bookIds = bookId;
            fetch(`http://localhost:3000/books/${bookId}`, {
              method: "PATCH",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({ id: bookId })
            })
              .then(res => res.json())
              .then(data => {

                console.log(data)
                
                if (data.modifiedCount == 1) {
                  toast.success('Book Return Done')
                  toast.success('Thanks for Book Return')
                }

                const remainingBook = borrowedBooks.filter(borrowedBook => borrowedBook._id !== borrowBoookId);
                setBorrowedBooks(remainingBook);


              })
          })
          .catch((err) => console.log(err))
      }
    })
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-center items-start">
        {
          borrowedBooks.map(borrowedBook => (
            <div
              key={borrowedBook._id}
              className="bg-white shadow-lg rounded-2xl p-6 transition-transform hover:scale-[1.02] hover:shadow-xl border border-blue-200 w-full max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                {/* Book Image */}
                <img
                  src={borrowedBook.bookImage}
                  alt={borrowedBook.bookName}
                  className="h-36 w-28 object-cover rounded-md shadow-md"
                />

                {/* Book Info */}
                <div className="flex-1 text-sm font-medium text-gray-700 space-y-2">
                  <p><span className="font-semibold text-sky-700">Book Name:</span> {borrowedBook.bookName}</p>
                  <p><span className="font-semibold text-sky-700">Category:</span> {borrowedBook.bookCategory}</p>
                  <p><span className="font-semibold text-sky-700">Borrowed:</span> {borrowedBook.borrowDate}</p>
                  <p><span className="font-semibold text-sky-700">Return by:</span> {borrowedBook.returnDate}</p>
                </div>
              </div>

              {/* Return Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => handleReturn(borrowedBook._id, borrowedBook.bookId)}
                  className="btn bg-sky-300 hover:bg-indigo-800 text-white font-semibold rounded-md px-5 py-2 transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  Return Book
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );

};

export default BorrowedBooks;