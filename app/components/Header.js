"use client";
import React from "react";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleClick() {
    //open/close the menu
    setIsOpen(!isOpen);
  }
  //const handleClick = () => { setIsOpen(!isOpen); };
  return (
    <div>
      <header className="bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-3 h-16 items-center justify-between">
            {/* Left - Logo */}
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <img
                  className="h-12"
                  src="https://firebasestorage.googleapis.com/v0/b/gdg-chula-web-dev.appspot.com/o/Coffee%20Cup.png?alt=media&token=d91e63d1-dc03-4ff1-ba1d-d39149fd5280"
                />
              </a>
            </div>
            {/* Center - Link menu*/}
            <div className="block w-fit justify-self-center">
              <nav>
                <ul className="hidden md:flex w-full items-center gap-8 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/order"
                    >
                      Order
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/stories"
                    >
                      Stories
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Right - Login,SignOut */}
            <div>
              <div className="flex items-center justify-end gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    Login
                  </a>
                </div>

                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-400"
                    onClick={handleClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <nav className="bg-gray-100">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="#"
              >
                Avatar
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="#"
              >
                Stories
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
