import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import logo from "../../../assets/ogragatiLogo.png";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#ffff") : setNavColor("transparent");
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
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
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
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full group-active:bg-orange-600"></span>

              <span className="relative font-medium text-orange-600 transition-colors group-hover:text-white">
                Log Out
              </span>
            </Link>
          </span>
        </>
      ) : (
        <>
          <Link
            className="group relative inline-block overflow-hidden border-b-4 px-8 py-2"
            to="/login"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full group-active:bg-orange-600"></span>

            <span className="relative font-medium text-xl text-orange-600 transition-colors group-hover:text-white">
              Login
            </span>
          </Link>
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
      className="navbar fixed top-0 z-10 rounded flex justify-between h-20 mx-auto container border-b border-orange-600"
    >
      <div className="">
        <div className="flex justify-center items-center gap-6 uppercase font-extrabold tracking-widest mx-auto text-center">
          <Link>
            <img className="w-20" src={logo} alt="" />
          </Link>
          <Link className="text-3xl text-orange-600 font-bold">
            <div>
              <p className="text- font-serif font-bold">অগ্রগতি</p>
              <p className="scale-150 text-sm font-extralight font-serif">
                সোসাইটি
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex items-center justify-between">
          <ul className="menu menu-horizontal px-1">{NavMenu}</ul>
        </div>

        <details className="dropdown dropdown-end lg:hidden ">
          <summary className="m-1 btn ">
            <HiMenu></HiMenu>
          </summary>
          <ul
            className="p-2 menu dropdown-content z-[1] bg-base-100 w-48 tabIndex={0}
            menu-compact bg-white mt-3 shadow-xl rounded-box items-center justify-between flex"
          >
            {NavMenu}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
