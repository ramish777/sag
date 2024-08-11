import React from 'react';
import logo_1 from "../Website Data/logo.png";

const Footer = () => {
  return (
    <div className="relative flex-col lg:flex-col w-full bg-black">
      <div className="flex flex-col lg:flex-row">
        <footer className="bg-white w-screen dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid lg:mr-8 lg:ml-8 grid-cols-1 gap-32 px-6 py-6 lg:py-8 lg:grid-cols-4 md:py-8 md:grid-cols-2">
              <div className="flex-col ">
                <h1 className="text-center mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  SA Gardens Football Club
                </h1>
                <img src={logo_1} className="px-4" alt="Logo" />
                {/* Social Media Icons */}
                <div className="flex w-full justify-center space-x-4">
                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com/share/FYg3JUjQ9djDWPFw/?mibextid=LQQJ4d" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 8 19"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>

                    {/* Instagram Icon */}
                    <a href="https://www.instagram.com/sagardensfc?igsh=Zzg4dHJ5YnB0ZWR3&utm_source=qr" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                      </svg>

                    </a>

                    {/* YouTube Icon */}
                    <a href="https://www.youtube.com/@SAGardenspk" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.499 6.273a2.94 2.94 0 0 0-2.065-2.078C19.338 3.636 12 3.636 12 3.636s-7.338 0-9.434.559a2.94 2.94 0 0 0-2.065 2.078C0 8.246 0 12 0 12s0 3.754.501 5.727a2.94 2.94 0 0 0 2.065 2.078c2.096.559 9.434.559 9.434.559s7.338 0 9.434-.559a2.94 2.94 0 0 0 2.065-2.078C24 15.754 24 12 24 12s0-3.754-.501-5.727zM9.691 15.617v-7.234l6.426 3.617-6.426 3.617z" />
                        </svg>
                    </a>
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Mega Arena
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">DHA Phase 5, Jammu Chowk, E 40 Bedian Rd, Jamun</li>
                  <li className="mb-4">Lahore, Pakistan</li>
                  <li className="mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    <h1 className="mr-2"> +92 332 4966181</h1>
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    <h1 className="mr-2"> +92 321 7209053</h1>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Lion's Den
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">ISL Pine Avenue, 2 Al-Biruni Rd, off Pine Avenue, Edenabad</li>
                  <li className="mb-4">Lahore, Pakistan</li>
                  <li className="mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    <h1 className="mr-2"> +92 332 4966181</h1>
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    <h1 className="mr-2"> +92 321 7209053</h1>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Third Umpire
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2 lg:mb-8">Bahria Town, 
                  Superior Services Housing Society</li>
                  <li className="mb-4">Lahore, Pakistan</li>
                  <li className="mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    <h1 className="mr-2"> +92 332 4966181</h1>
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    <h1 className="mr-2"> +92 321 7209053</h1>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="px-4 py-6 w-full bg-gray-100 dark:bg-gray-700 lg:flex lg:items-center lg:justify-between">
        <span className="lg:mr-32 lg:ml-32 text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2023 SA GARDENS FC™. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
