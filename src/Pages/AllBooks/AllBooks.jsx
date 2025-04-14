import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../AllBooks/BookCard';

const AllBooks = () => {

  const books = useLoaderData();
  // console.log(books)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-20 justify-items-center gap-10'>
      {
        books.map(book => <BookCard key={book._id} book={book} ></BookCard>)
      }
    </div>
  );
};

export default AllBooks;