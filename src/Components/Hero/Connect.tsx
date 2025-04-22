const LetsConnect = () => {
  const contactInfo = [
    { icon: "ri-phone-fill", label: "Phone Number", value: "+977-9808676092" },
    {
      icon: "ri-mail-fill",
      label: "Email",
      value: "prabinmahato415@gmail.com",
    },
    { icon: "ri-phone-fill", label: "web", value: "prabinmahato.com.np" },
    {
      icon: "ri-map-pin-fill",
      label: "Address",
      value: "Kathmandu, Nepal",
    },
  ];

  return (
    <div className="w-screen flex justify-center mt-5">
      <div className="w-7xl text-left dark:bg-[#1f1f28] border border-green-900 rounded-lg text-white p-10">
        {/* Header Section */}
        <h2 className="text-2xl font-semibold text-green-500 mb-6">
          Let's connect
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="flex-1">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="flex-1 p-4 dark:bg-[#1f1f28] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="flex-1 p-4 dark:bg-[#1f1f28] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 p-4 dark:bg-[#1f1f28]  text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="flex-1 p-4 dark:bg-[#1f1f28] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full p-4 dark:bg-[#1f1f28] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
              ></textarea>
              <button
                type="submit"
                className="text-gray-400 flex items-center border px-4 py-2 rounded-sm hover:text-green-500"
              >
                <span>Send Message</span>
                <span className="ml-2">→</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i
                    className={`${item.icon} text-green-500 border p-1 rounded-md text-2xl mr-4`}
                  ></i>
                  <div>
                    <h4 className="text-gray-400 text-sm">{item.label}</h4>
                    <p className="text-white">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
