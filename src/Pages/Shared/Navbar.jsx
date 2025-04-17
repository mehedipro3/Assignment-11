import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import logo from '../../assets/library-icon.png'
const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);
  const links = <>
    <li><NavLink to={"/"} style={({ isActive }) => {
      return isActive ? { color: "black", background: "white" } : {};
    }}>Home</NavLink></li>
    <li><NavLink to={"/allBooks"} style={({ isActive }) => {
      return isActive ? { color: "black", background: "white" } : {};
    }}>All Books</NavLink></li>
    <li><NavLink to={"/addBooks"} style={({ isActive }) => {
      return isActive ? { color: "black", background: "white" } : {};
    }}>Add Book</NavLink></li>
    <li><NavLink to={"/borrowedBooks"} style={({ isActive }) => {
      return isActive ? { color: "black", background: "white" } : {};
    }}>Borrowed Books</NavLink></li>
  </>

  const handleSingOut = () => {
    signOutUser()
      .then(result => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  }
  return (
    <div className="navbar bg-base-100 bg-gradient-to-br from-indigo-800 to-sky-300 text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className='w-10' src={logo} alt="" />
          KnowledgeCore</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">


        {
          user ? <>
            <button onClick={handleSingOut} className="btn">Sing out</button>
          </>
            :
            <>
              <Link to={"/register"}>Register</Link>
              <Link to={"/singIn"}>
                <button className="btn">Sing in</button>
              </Link>

            </>
        }
      </div>
    </div>
  );
};

export default Navbar;