function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-left -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                COMPANY INFO
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Carrier
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    We are hiring
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Blog
                  </span>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LEGAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Carrier
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    We are hiring
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Blog
                  </span>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                FEATURES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Business Marketing
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    User Analytic
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Live Chat
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Unlimited Support
                  </span>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                RESOURCES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    IOS & Android
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Watch a Demo
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Customers
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">API</span>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                GET IN TOUCH
              </h2>
              <nav className="list-none mb-10">
                <li className="md:flex">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-[130px] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded">
                    Subscribe
                  </button>
                </li>
                <li className="mt-4 text-gray-500">Lore imp sum dolor amit.</li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 Bandage —
              <span className="text-gray-600 ml-1" rel="noopener noreferrer">
                @bandage
              </span>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Made With Love By Finland All Right Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;