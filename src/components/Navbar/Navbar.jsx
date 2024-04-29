import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo1.png';
import { useContext } from "react";
import { AuthContexts } from "../Providers/AuthProviders";


const Navbar = () => {

  const { user,logOut } = useContext(AuthContexts);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()

  }


    const navLinks = <>
        <button className="btn bg-green-600 text-white"><NavLink to='/'>Home</NavLink></button>
        <button className="ml-3 btn bg-green-600 text-white"><NavLink to='/alltouristspot'>All Tourists Spot</NavLink></button>
        <button className="ml-3 btn bg-green-600 text-white"><NavLink to='/addtouristspot'>Add Tourists Spot</NavLink></button>
        <button className="ml-3 btn bg-green-600 text-white"><NavLink to='/mylist'> My List</NavLink></button>
        <button className="ml-3 btn bg-green-600 text-white"><NavLink to='/contactus'>Contact Us</NavLink></button>
       
        
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <Link to='/' >
   <img className="w-1/2" src={logo} alt="" />
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  {
      user? <div className="flex dropdown dropdown-end ">
        <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
        </div>
      </label>
      <ul className=" menu menu-sm dropdown-content mt-16 z-[4] p-2 shadow bg-base-100 rounded-box" tabIndex={0}>
        <li>
          <button className="btn btn-sm btn-ghost mb-6">{user?.displayName || 'user name not found'}</button>
        </li>
        <li>
          <button className="btn btn-sm btn-ghost mb-6">{user?.email || 'user email not found'}</button>
        </li>
        <li>
        {
        user ?
        <button onClick={handleSignOut} className="btn">Sign Out</button>
        :
        <Link to='/login' >
     <button className="btn">Login</button>
    
    </Link>
      }
        </li>
      </ul>

      </div>
      :
      <Link to='/login' >
     
    <button className="btn">Login</button>
    </Link>
    }
     <Link to='/register'>
    <button className="btn ml-3 bg-green-600 text-white">Register</button>
    </Link>


    {/* {
      user?
      <button onClick={handleSignOut} className="btn bg-green-600 text-white">Sign Out</button>
      : 
      <Link to='/login'>
      <button className="btn bg-green-600 text-white">Login</button>
      </Link>
      
    }
   
   
    <input type="checkbox" value="synthwave" className="toggle theme-controller"/> */}
  </div>
</div>
    );
};

export default Navbar;