import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToElement = (href: string) => {
    const element = document.querySelector(`#${href}`);
    if (element) {
      const offset = (element as HTMLElement).offsetTop - 130;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (item: string) => {
    scrollToElement(item);
    setOpen(false); // Close sidebar after clicking a link
  };

  return (
    <div className="w-full justify-center flex items-center">
      <header className="bg-[#1f1f28] border border-green-900 text-gray-300 rounded-md w-full max-w-screen-xl z-50 shadow-md relative">
        <div className="mx-auto px-6 py-5 flex items-center justify-between">
          {/* Left: Menu Icon + Logo */}
          <div className="flex items-center gap-4">
            <button
              className="text-2xl text-white lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <i className="ri-menu-line"></i>
            </button>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-semibold text-white"
            >
              <i className="ri-code-line text-lime-400 text-2xl" />
              <span>Prabin.dev</span>
            </a>
          </div>

          {/* Middle: Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 text-sm font-medium">
            {[
              "About me",
              "Education",
              "Experience",
              "Expertise",
              "Portfolio",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                className="hover:text-white transition duration-200 cursor-pointer"
                onClick={() =>
                  handleClick(item.toLowerCase().replace(/\s/g, ""))
                }
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/iprabin/"
              target="_blank"
              className="hover:text-white transition"
            >
              <i className="ri-linkedin-box-fill" />
            </a>
            <a
              href="https://github.com/prabin012"
              target="_blank"
              className="hover:text-white transition"
            >
              <i className="ri-github-fill" />
            </a>
            <a
              href="https://www.facebook.com/iprabin01"
              target="_blank"
              className="hover:text-white transition"
            >
              <i className="ri-facebook-circle-fill" />
            </a>
            <a
              href="https://www.instagram.com/i_prabin01"
              target="_blank"
              className="hover:text-white transition"
            >
              <i className="ri-instagram-line" />
            </a>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#1f1f28] border-l border-green-900 text-gray-300 transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 p-6 lg:hidden`}
        >
          <button
            className="text-2xl text-white mb-8"
            onClick={() => setOpen(false)}
          >
            <i className="ri-close-line"></i>
          </button>
          <nav className="flex flex-col gap-6 text-base font-medium">
            {[
              "About me",
              "Education",
              "Experience",
              "Expertise",
              "Portfolio",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                className="hover:text-white transition duration-200 cursor-pointer"
                onClick={() =>
                  handleClick(item.toLowerCase().replace(/\s/g, ""))
                }
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Background overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-transparent bg-opacity-10 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
