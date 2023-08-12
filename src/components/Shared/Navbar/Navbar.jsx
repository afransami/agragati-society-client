import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import logo from "../../../assets/ogragatiLogo.png";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navColor, setNavColor] = useState("transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setNavColor("rgb(30 41 59)")
      : setNavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    setIsAuthenticated(false);
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    toast.success("Oops logOut!");
  };

  const NavMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/members">Members</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <span>
            <img className="border-4 btn-circle " src={user?.photoURL} />
          </span>
          <span className="flex justify-center items-center mx-4 ">
            {user?.displayName}
          </span>
          <span className="flex justify-center items-center">
            <Link
              className="group relative inline-block overflow-hidden border-b-4 px-4 py-2"
              onClick={handleLogOut}
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-500 transition-all group-hover:h-full group-active:bg-orange-500"></span>

              <span className="relative font-medium text-orange-500 transition-colors group-hover:text-white">
                Log Out
              </span>
            </Link>
          </span>
        </>
      ) : (
        <>
          <li>
            <Link
            className="group relative inline-block overflow-hidden border-b-4 lg:px-2 rounded py-2"
            to="/login"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-500 transition-all group-hover:h-full group-active:bg-orange-500"></span>

            <span className="relative font-medium text-xl text-orange-500 transition-colors group-hover:text-white">
              Login
            </span>
          </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      style={{
        backgroundColor: navColor,
        transition: "all 1s",
      }}
      className="navbar fixed top-0 z-10 rounded flex justify-between h-0 lg:h-20 lg:px-10 px-4"
    >
      <div className="">
        <div className="flex justify-center items-center gap-6 uppercase font-extrabold tracking-widest mx-auto text-center">
          <Link>
            <img className="hidden lg:block w-20 bg-white rounded" src={logo} alt="" />
          </Link>
          <Link className="text-3xl text-orange-500 font-bold">
            <div className="">
              <p className="text-xl lg:text-3xl font-serif font-bold">অগ্রগতি</p>
              <p className="scale-150 text-sm font-semibold font-serif">
                সোসাইটি
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex items-center justify-between">
          <ul className="menu menu-horizontal px-1 text-orange-500 text-lg">
            {NavMenu}
          </ul>
        </div>      

        <details className="dropdown dropdown-end lg:hidden">
          <summary className="m-1 btn btn-sm bg-transparent">
            <HiMenu className="text-3xl text-white"></HiMenu>
          </summary>
          <ul
            className="p-2 menu dropdown-content z-[1] w-[100vw] tabIndex={0}
            menu-compact bg-slate-800 text-white pt-10 shadow-xl  items-start justify-between flex gap-4 text-lg"
          >
            {NavMenu}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
