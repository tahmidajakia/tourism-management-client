import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo1.png';
import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../Providers/AuthProviders";


const Navbar = () => {

  const [theme,setTheme] = useState('light');

  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

  const handleToggle = (e) => {
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')

    }

  }

  const { user,logOut } = useContext(AuthContexts);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()

  }


    const navLinks = <>
        <button className="border mr-3 p-3 rounded-lg border-teal-500 text-teal-400 font-bold"><NavLink to='/'>Home</NavLink></button>
        <button className="border mr-3 p-3 rounded-lg border-teal-500 text-teal-400 font-bold"><NavLink to='/alltouristspot'>All Tourists Spot</NavLink></button>
        <button className="border mr-3  p-3 rounded-lg border-teal-500 text-teal-400 font-bold"><NavLink to='/addtouristspot'>Add Tourists Spot</NavLink></button>
        <button  className="border mr-3 p-3 font-bold rounded-lg border-teal-500 text-teal-400"><NavLink to='/contactus'>Contact Us</NavLink></button>
        { user && <>

          <button  className="border mr-3 p-3 rounded-lg border-teal-500 text-teal-400 font-bold"><NavLink to='/mylist'> My List</NavLink></button>
        </>}
       
        
    </>
    console.log(theme)
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
     <button className="border mr-3 p-3 rounded-lg border-teal-500 text-teal-400">Login</button>
    
    </Link>
      }
        </li>
      </ul>

      </div>
      :
      <Link to='/login' >
     
    <button className="border mr-2 p-3 rounded-lg border-teal-500 text-teal-400">Login</button>
    </Link>
    }
     <Link to='/register'>
    <button className="btn ml-3 bg-teal-300 text-white">Register</button>
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
  <label className="cursor-pointer ml-3 grid place-items-center">
  <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</div>
    );
};

export default Navbar;