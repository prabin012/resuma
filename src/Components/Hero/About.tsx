const HeroSection = () => {
  return (
    <div className="w-full flex justify-center mt-5">
      <section className="min-h-[50vh] p-10 w-full max-w-screen-xl flex border border-green-900 hover:border-r-green-500 hover:border-b-green-500 rounded-md hover:rounded-xl transition-all duration-500 ease-in-out items-center justify-center bg-white dark:bg-[#1f1f28] text-gray-800 dark:text-white">
        <div className=" w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="clip-hex  overflow-hidden max-w-[400px] mx-auto">
              <img
                src="/images/p4.png"
                alt="profile"
                className="rounded-full "
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-lime-500 text-white p-3 rounded-xl">
              <i className="ri-code-s-slash-line text-2xl"></i>
            </div>
          </div>

          <div className="text-left ">
            <p className="text-lg mb-2">
              <strong className="text-green-500">{`<span>`}</strong> Hey, I’m
              <span className="font-semibold"> Prabin </span>
              <strong className="text-green-500">{`</span>`}</strong>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Junior <span className="text-lime-500">{"{Full Stack}"}</span> Web
              & <br /> App developer
              <span className="text-lime-500">_</span>
            </h1>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              With expertise in cutting-edge technologies such as
              <span className="font-medium text-black dark:text-white">
                Full-stack developer experienced in Node.js, React, JavaScript,
                TypeScript, and MongoDB, building scalable MERN apps with clean
                UI, API integration, and database management.
              </span>
              <br />I deliver web solutions that are both innovative and robust.
            </p>
            <div className="flex md:items-end ">
              <div className="col-span-1 md:w-2/4 flex">
                <div className="overflow-hidden w-full">
                  <div className="marquee flex gap-4 whitespace-nowrap">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                      alt="NodeJS"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                      alt="TailwindCSS"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                      alt="Next.js"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                      alt="Firebase"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      alt="React"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />

                    {/* Repeat for smooth loop */}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                      alt="NodeJS"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                      alt="TailwindCSS"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                      alt="Next.js"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                      alt="Firebase"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      alt="React"
                      className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <span className="text-sm hidden md:block text-gray-500 dark:text-gray-400 ml-4">
                ...and more
              </span>
            </div>

            <div className="mt-10">
              <a
                href={`mailto:prabinmahato415@gmail.com?subject=Schedule Interview for Full Stack Role&body=Hi Prabin,%0D%0A%0D%0AI am interested in discussing a role opportunity with you. Let me know your available time for an interview.%0D%0A%0D%0ARegards,%0D%0A[Your Name] %0D%0A[Company name]`}
                className="inline-block mr-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Hire me
              </a>
              <a
                href="/images/PrabinResume.pdf"
                download
                className="inline-flex items-center gap-2  font-semibold "
              >
                <i className="ri-download-2-line text-xl text-lime-600" />[
                Download my CV ]
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
