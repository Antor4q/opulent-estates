import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../routes/FirebaseContext";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)
    

    const handleLogOut = () => {
        logOut()
        .then()
        .catch()
    }

    const nav = <>
                <li className="text-lg"><NavLink  to="/">Home</NavLink></li>
                <li className="text-lg"><NavLink to="/updateProfile">Update Profile</NavLink></li>
                <li className="text-lg"><NavLink to="/contact">Contact Us</NavLink></li>
                 </>

    return (
        <div className="navbar bg-[#030712] lg:py-12 py-8 text-white lg:max-w-[1440px] mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {nav}
            </ul>
            </div>
            <Link to="/" className="btn btn-ghost  p-0 text-2xl lg:text-4xl font-bold"><span className="text-[#1DD100]">Opulent</span> Estates</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {nav}
            </ul>
        </div>
        <div className="navbar-end">
           {
            user ? 
            <div className="flex items-center  lg:gap-3">
                 <div tabIndex={0} role="button" className="btn tooltip   btn-ghost btn-circle avatar" data-tip={user.displayName || "Ahmed Antor"}>
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL|| "https://lh3.googleusercontent.com/a/ACg8ocKmhEEOY7xJfi1QV0Puf78YQnKeX5Xku1nRC9e--m6yTK711Cs=s96-c"} />
                </div>
                </div>
                <button onClick={()=>handleLogOut()} className="btn  bg-[#1DD100] lg:px-8 px-2 border-none text-white lg:text-lg">Sign Out</button>
            
            </div>
            :
            <Link to="/login" className="btn bg-[#1DD100] lg:px-10 px-5 border-none text-white lg:text-lg">Login</Link>
           }
        </div>
        </div>
    );
};

export default Navbar;