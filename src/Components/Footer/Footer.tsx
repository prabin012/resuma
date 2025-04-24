const Footer = () => {
  const socialLinks = [
    { icon: "ri-linkedin-box-fill", href: "#" },
    { icon: "ri-twitter-x-fill", href: "#" },
    { icon: "ri-github-fill", href: "#" },
  ];

  return (
    <div className="w-full flex justify-center mt-5 ">
      <footer className="w-full max-w-screen-xl text-white py-6 md:py-10 border-t border-gray-700 dark:border-green-900">
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm gap-4 sm:gap-0 text-center sm:text-left">
          <span className="text-2xl text-green-500">Prabin Kumar Mahato</span>
          <span className="text-xs sm:text-sm">
            © 2025 Prabin Kumar. All rights reserved.
          </span>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <i className={`${link.icon} text-xl sm:text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
