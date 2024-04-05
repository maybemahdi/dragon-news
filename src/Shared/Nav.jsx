import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-black no-underline p-2 text-white hover:bg-black"
              : "no-underline"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-black no-underline p-2 text-white hover:bg-black"
              : "no-underline"
          }
          to={"/login"}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-black no-underline p-2 text-white hover:bg-black"
              : "no-underline"
          }
          to={"/register"}
        >
          Register
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged Out Successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn -ml-8 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content -ml-8 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user?.photoURL ? (
          <img className="w-10 rounded-full" src={user.photoURL} alt="" />
        ) : (
          <FaUserCircle size={45} />
        )}
        {user ? (
          <button onClick={handleLogOut} className="bg-black no-underline px-3 py-3 cursor-pointer transition-all duration-300 text-white border-0 hover:bg-[#232323]">
            Log Out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="bg-black no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-white hover:bg-[#232323]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
