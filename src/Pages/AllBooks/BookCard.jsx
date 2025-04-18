
import { IoMdStarOutline } from 'react-icons/io';

import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
//import ReactStars from "react-rating-stars-component";

const BookCard = ({ book }) => {



  // console.log(book)

  return (
    <div className=" bg-[#bbdefb] bg-opacity-80 border-2 border-[#64b5f6] 
         w-[90%] sm:w-[400px] md:w-[90%]   rounded-xl">
      <div className="flex-col shrink-0">
        <img src={book.image} className="w-[300px] rounded-lg shadow-2xl scale-75 mx-auto pt-5" />
        <div className='px-4 flex flex-col gap-2 text-xl font-semibold '>
          <h1 className=" font-bold ">Book Name: {book.name}</h1>
          <p className="">Author Name : {book.author}</p>
          <p className="">Category : {book.category}</p>
          <p className="">Quantity : {book.quantity}</p>
          <p className="flex items-center text-xl ">Rating :  <StarRatings
            rating={Number(book.rating)}
            starRatedColor="red"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          /> </p>
        </div>
        <div className='my-3 flex justify-center'>
          <Link className="btn btn-accent hover:bg-sky-400 hover:border-none scale-110 duration-300 hover:scale-125  hover:text-white" >Update Book</Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;