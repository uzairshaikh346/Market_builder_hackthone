import Image from 'next/image';
import Banner from "@/app/imagess/contactImage/desktop-header-24.png";

const GetInTouchSection = () => {
  return (
    <section className="text-gray-600 body-font md:px-[150px] bg-white">
      <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Get in touch <br />
            today!
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-center md:justify-start items-end">
            <div className="relative md:mr-4 w-full md:w-auto">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-4">
                Phone: +451 215 215
              </h1>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-4">
                Fax: +451 215 215
              </h1>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-col mt-4">
            <button className="bg-slate-600 text-white px-8 py-3 rounded-md">
              Message us!
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={Banner}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
