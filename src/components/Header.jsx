import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-teal-700 text-white sticky top-0 z-10 ">
        <section className="max-w-full mx-auto py-4 flex justify-between items-center px-5 sm:px-4 md:px-8">
          <h1 className="text-2xl sm:text-3xl font-medium">
            <a href="#hero"> 🚀 Acme Rocket</a>
          </h1>
          <div>
            <button
              id="#mobile-open-button"
              onClick={() => setOpen(!open)}
              className="text-3xl sm sm:hidden focus:outline-none hover:bg-teal-600 rounded-full w-10 h-10 flex place-content-center "
            >
              {!open ? <>&#9776;</> : <>&times;</>}
            </button>
            <nav
              className="hidden sm:block  space-x-3 md:space-x-10  sm:space-x-2  md:bg-red-500 capitalize text-xl"
                          aria-label="main"
                          
            >
              <a href="#hero" className="hover:opacity-90">
                home
              </a>
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90 ">
                Contact
              </a>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className={`top-68 justify-center absolute ${
            open ? "block" : "hidden"
          } w-full origin-top animate-open-menu flex-col bg-black text-5xl`}
        >
          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
            onClick={() => setOpen(false)}
          >
            <a
              href="#hero"
              className="w-full py-6 text-center hover:opacity-90"
              onClick={() => setOpen(false)}
              >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full py-6 text-center hover:opacity-90"
              onClick={() => setOpen(false)}
              >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full py-6 text-center hover:opacity-90"
              onClick={() => setOpen(false)}
              >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full py-6 text-center hover:opacity-90"
              onClick={() => setOpen(false)}
              >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full py-6 text-center hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Legal
            </a>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;
