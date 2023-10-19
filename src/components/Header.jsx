import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-teal-700 text-white sticky top-0 z-10 ">
        <section className="max-w-full mx-auto p-4 flex justify-between items-center px-20 sm:px-9">
          <h1 className="text-3xl font-medium">
            <a href="#hero"> 🚀 Acme Rocket</a>
          </h1>
          <div>
            <button
              id="#mobile-open-button"
              onClick={() => setOpen(!open)}
              className="text-3xl sm:hidden focus:outline-none hover:bg-teal-600 rounded-full w-10 h-10 flex place-content-center "
            >
               {!open ? (<>&#9776;</>) : (<>&times;</>)}
            </button>
            <nav
              className="hidden sm:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                our rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                contact
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
          >
            <a
              href="#hero"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full py-6 text-center hover:opacity-90"
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
