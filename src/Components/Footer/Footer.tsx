const Footer = () => {
  const socialLinks = [
    { icon: "ri-linkedin-box-fill", href: "#" },
    { icon: "ri-twitter-x-fill", href: "#" },
    { icon: "ri-github-fill", href: "#" },
  ];

  return (
    <div className="w-screen flex justify-center mt-5">
      <footer className="dark:border-green-900 w-7xl text-white p-10  border-t border-gray-700">
        {/* <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8"> */}
        {/* Logo/Name */}
        {/* <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-green-500">
              {"Prabin Kumar Mahato"}
            </h3>
          </div> */}

        {/* Navigation Links */}
        {/* <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div> */}

        {/* Social Media Icons */}

        {/* Copyright Notice */}
        <div className="text-center w-7xl flex  justify-between items-center  text-gray-500 text-sm">
          <span className=""> Prabin Kumar Mahato</span>
          <span className=""> © 2025 Prabin Kumar. All rights reserved.</span>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <i className={`${link.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
