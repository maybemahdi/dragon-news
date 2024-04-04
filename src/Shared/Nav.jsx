import { Link, NavLink } from "react-router-dom";

const Nav = () => {
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
        <NavLink className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-black no-underline p-2 text-white hover:bg-black"
              : "no-underline"
          } to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-black no-underline p-2 text-white hover:bg-black"
              : "no-underline"
          } to={"/career"}>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'} className="bg-black no-underline px-3 py-2 transition-all duration-300 text-white hover:bg-[#232323]">Login</Link>
      </div>
    </div>
  );
};

export default Nav;
