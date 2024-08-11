import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';
import logo_1 from "../Website Data/logo.png";

const Navbar = () => {
  const { isDropdownOpen, toggleDropdown, activeLink, setActiveLink } = useContext(NavbarContext);
  const [scrolled, setScrolled] = useState(false);
  const [teamsDropdownOpen, setTeamsDropdownOpen] = useState(false); // State for Teams dropdown

  const location = useLocation(); // Get the current location

  const navbarRef = React.useRef(null);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to update activeLink based on current path
  useEffect(() => {
    const path = location.pathname.split('/')[1] || 'Home';
    const normalizedPath = path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');
    setActiveLink(normalizedPath);
  }, [location, setActiveLink]);

  // Handle link click
  const handleLinkClick = (page, section) => {
    setActiveLink(page);
  };

  // Determine the active link and hash
  const getActiveLinkClass = (page) => {
    return activeLink === page ? 'underline' : '';
  };

  // Toggle Teams dropdown
  const toggleTeamsDropdown = () => {
    setTeamsDropdownOpen(!teamsDropdownOpen);
  };


  return (
    <>
      <nav ref={navbarRef} className={`fixed top-0 left-0 right-0 border-gray-200 dark:border-gray-700 z-50 ${scrolled ? 'bg-gray-900' : 'bg-transparent'} transition-colors duration-300`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo_1} className="h-14" alt="Logo" />
            <span className="self-center md:text-2xl sm:text-xl font-semibold whitespace-nowrap dark:text-white">
              SA Gardens Football Club
            </span>
          </Link>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isDropdownOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">

              {/* Home Link */}
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-gray-900 lg:border-0 lg:p-0 dark:text-white relative hover:underline transition-all duration-300 ease-in-out ${getActiveLinkClass('Home')}`}
                  onClick={() => handleLinkClick('Home')}
                >
                  Home
                </Link>
              </li>

              {/* About Us Link */}
              <li>
                <Link
                  to="/about-us"
                  className={`block py-2 px-3 text-gray-900 lg:border-0 lg:p-0 dark:text-white relative hover:underline  transition-all duration-300 ease-in-out ${getActiveLinkClass('About Us')}`}
                  onClick={() => handleLinkClick('About Us')}
                >
                  About Us
                </Link>
              </li>

              {/* Academy Link */}
              <li>
                <Link
                  to="/academy"
                  className={`block py-2 px-3 text-gray-900 lg:border-0 lg:p-0 dark:text-white relative hover:underline  transition-all duration-300 ease-in-out ${getActiveLinkClass('Academy')}`}
                  onClick={() => handleLinkClick('Academy')}
                >
                  Academy
                </Link>
              </li>

              {/* Teams Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleTeamsDropdown}
                  className="py-2 px-3 text-gray-900 lg:border-0 lg:p-0 dark:text-white relative hover:underline transition-all duration-300 ease-in-out flex items-center"
                  style={{ zIndex: teamsDropdownOpen ? 60 : 'auto' }} // Add z-index conditionally
                >
                  Teams
                  <svg className="ml-1 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`${teamsDropdownOpen ? 'block' : 'hidden'} absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700`}
                  style={{ zIndex: 50 }} // Ensure the dropdown has a higher z-index
                >
                  <Link
                    to="/football-players"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => setTeamsDropdownOpen(false)}
                  >
                    Football
                  </Link>
                  <Link
                    to="/futsal-players"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => setTeamsDropdownOpen(false)}
                  >
                    Futsal
                  </Link>
                  <Link
                    to="/management"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => setTeamsDropdownOpen(false)}
                  >
                    Management
                  </Link>
                </div>
              </li>

              {/* Price Link */}
              <li>
                <Link
                  to="/academy#price"
                  className={`block py-2 px-3 text-gray-900 lg:border-0 lg:p-0 dark:text-white relative hover:underline transition-all duration-300 ease-in-out ${getActiveLinkClass('Academy', 'price')}`}
                  onClick={() => handleLinkClick('Academy', 'price')}
                >
                  Price
                </Link>
              </li>

              {/* Join Us Link */}
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-gray-900 lg:border-0 lg:p-0 dark:text-white relative hover:underline transition-all duration-300 ease-in-out ${getActiveLinkClass('Join Us')}`}
                  onClick={() => window.open("https://forms.gle/yAiXP1DDUbivTDcg7", "_blank")}
                >
                  Join Us
                </Link>
              </li>

              {/* Our Partners Link */}
              <li>
                <Link
                  to="/our-partners"
                  className={`block py-2 px-3 text-gray-900 lg:border-0 lg:p-0 dark:text-white relative hover:underline transition-all duration-300 ease-in-out ${getActiveLinkClass('Our Partners')}`}
                  onClick={() => handleLinkClick('Our Partners')}
                >
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
