import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../context/Auth/AuthContext';
import ThemeContext from '../context/Theme/ThemeContext';
import logo from '/logo.svg';


const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const  {isDark, toggleTheme} = useContext(ThemeContext);

  // console.log(user)
  const handleLogout = () => {
    logoutUser();
  };

  const li = (
    <>
      <li>
        <Link className="text-base" to="/">Home</Link>
      </li>
      <li>
        <Link className="text-base" to="/find-tutors">Find Tutors</Link>
      </li>
      <li>
        <Link className="text-base" to="/add-tutor">Add Tutor</Link>
      </li>
      {
        user && <>
                  <li><Link className="text-base" to="/my-tutors">My Tutors</Link></li>
                  <li><Link className="text-base" to="/booked-tutors">My Booked Tutors</Link></li>
                </>
      }
      
    </>
  );

  return (
    <nav className="navbar shadow-sm sticky top-0 z-10 bg-base-100">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {li}
          </ul>
        </div>
        <Link to="/" className="flex gap-1 items-center">
          <img src={logo} className="w-6 aspect-square" alt="logo" /><span className="font-extrabold text-2xl">TutorHunt</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>

      <div className="navbar-end flex gap-4">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="toggle" // Add other DaisyUI toggle classes as needed e.g., toggle-primary, toggle-lg
          checked={isDark}
          onChange={toggleTheme}
        />
        {/* Conditionally display "Dark" or "Light" based on isDark state */}
        <span className="ml-2 text-sm font-semibold">
          {isDark ? 'Dark' : 'Light'}
        </span>
      </label>
    {
      user ? (
        <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to='/update-profile' className="justify-between" >
                   Update Profile
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>

      ) : (<><Link to="/login" className="btn">Log In</Link></> 
      )
    }
      </div>
    </nav>
  );
};

export default Navbar;
