const Navbar = () => {
  const scrollToElement = (href: string) => {
    console.log(href);
    const element = document.querySelector(`#${href}`);
    console.log(element);
    if (element) {
      const offset = (element as HTMLElement).offsetTop - 130;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  const handleClick = (item: string) => {
    console.log(item);
    scrollToElement(item);
  };
  return (
    <div className="w-screen justify-center flex items-center  ">
      <header className="bg-[#1f1f28] border border-green-900 text-gray-300  rounded-md  w-7xl z-50 shadow-md">
        <div className=" mx-auto px-6 py-5 flex items-center justify-between">
          {/* Left: Menu Icon + Logo */}
          <div className="flex items-center gap-4">
            <button className="text-2xl text-white lg:hidden">
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

          {/* Middle: Navigation Links */}
          <nav className="hidden lg:flex gap-6 text-sm font-medium">
            {[
              "Introduction",
              "Experience",
              "Expertise",
              "Education",
              "Portfolio",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                // href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="hover:text-white transition duration-200"
                onClick={() =>
                  handleClick(item.toLowerCase().replace(/\s/g, ""))
                }
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Social Icons + Theme Toggle */}
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-white transition">
              <i className="ri-linkedin-box-fill" />
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="ri-github-fill" />
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="ri-facebook-circle-fill" />
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="ri-twitter-x-line" />
            </a>

            {/* <button className="text-yellow-400 hover:text-yellow-300 text-xl ml-2">
              <i className="ri-sun-line"></i>
            </button> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
