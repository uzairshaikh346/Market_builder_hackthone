const FreeTrialSection = () => {
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Start your 14 days free trial
            </h1>
            <p className="mb-8 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent.
            </p>
            <div className="flex justify-center mb-4">
              <button className="inline-flex text-white bg-[#23A6F0] border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Try it free now
              </button>
            </div>
            <div className="flex justify-center space-x-4 mt-5">
              <a className="text-gray-500" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="text-gray-500" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="text-gray-500" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
              <a className="text-gray-500" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 01-12 0A6 6 0 0116 8zm-6 6h0a6 6 0 016 6v4h-2v-4h-1.5v4h-2v-4H8v-4zm2-2h0A2 2 0 1010 8a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FreeTrialSection;
  