import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="w-full justify-center flex items-center  ">
      <header className="bg-[#1f1f28] border border-green-900 text-gray-300  rounded-md  w-full max-w-screen-xl z-50 shadow-md">
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
              "About me",
              "Experience",
              "Expertise",
              "Education",
              "Portfolio",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                // href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="hover:text-white transition duration-200 cursor-pointer"
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

            <span
              onClick={() => navigate("/login")}
              className="text-xs border border-green-900 px-3 py-2 rounded-md bg-green-900 cursor-pointer font-bold"
            >
              Join us
            </span>
            <span
              onClick={() => navigate("/dashboard")}
              className="text-xs border border-green-900 px-3 py-2 rounded-md bg-green-900 cursor-pointer font-bold"
            >
              Profile
            </span>
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
