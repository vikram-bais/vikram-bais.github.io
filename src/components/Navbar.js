import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full navbar-bg-color shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold global-title-color">Vikram Bais</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {['about', 'experience', 'skills', 'projects', 'education', 'contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="text-lg capitalize cursor-pointer hover:global-title-color transition-colors"
                activeClass="global-title-color  border-blue-500"
                spy={true}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden global-title-color focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          {['about', 'experience', 'skills', 'projects', 'education', 'contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="text-lg capitalize cursor-pointer hover:global-title-color transition-colors"
                activeClass="global-title-color border-b-2 border-blue-500"
                spy={true}
                onClick={toggleMenu}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from 'react';
// import { Link } from 'react-scroll';

// function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-gray-800 shadow-md z-10">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold global-title-color">Your Name</h1>
//         <ul className="flex space-x-6">
//           {['about', 'experience', 'skills', 'projects', 'education', 'contact'].map((section) => (
//             <li key={section}>
//               <Link
//                 to={section}
//                 smooth={true}
//                 duration={500}
//                 className="hover:global-title-color cursor-pointer capitalize text-lg"
//               >
//                 {section}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;