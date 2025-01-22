const ContactSupport = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto text-center">
        <h1 className="text-xl font-bold mb-8 text-gray-600">
          VISIT OUR OFFICE
        </h1>
        <p className="text-6xl mb-12 text-gray-800">
          We help small businesses <br /> with big ideas
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <div className="flex flex-col justify-center text-black w-[270px] py-9 font-semibold">
            <div className="flex flex-col items-center gap-2">
              <img
                width="80"
                height="80"
                src="https://img.icons8.com/ios/50/228BE6/phone--v1.png"
                alt="phone--v1"
              />
              <p className="text-sm">
                georgia.young@example.com <br />
                georgia.young@example.com
              </p>
              <h1>Get support</h1>
              <button className="border-blue-400 rounded-full text-sm text-blue-400 px-5 py-2 border-2">
                Submit Request
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center text-white bg-black w-[270px] py-9 font-semibold">
            <div className="flex flex-col items-center gap-2">
              <img
                width="80"
                height="80"
                src="https://img.icons8.com/ios-filled/50/228BE6/marker.png"
                alt="phone--v1"
              />
              <p className="text-sm">
                georgia.young@example.com <br />
                georgia.young@example.com
              </p>
              <h1>Get support</h1>
              <button className="border-blue-400 rounded-full text-sm text-blue-400 px-5 py-2 border-2">
                Submit Request
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center text-black w-[270px] py-9 font-semibold">
            <div className="flex flex-col items-center gap-2">
              <img
                width="80"
                height="80"
                src="https://img.icons8.com/ios/50/228BE6/mail.png"
                alt="phone--v1"
              />
              <p className="text-sm">
                georgia.young@example.com <br />
                georgia.young@example.com
              </p>
              <h1>Get support</h1>
              <button className="border-blue-400 rounded-full text-sm text-blue-400 px-5 py-2 border-2">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>



        <div className="text-center mt-14">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            WE CANT WAIT TO MEET YOU
          </p>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            Lets Talk
          </h1>
          <button className="py-3 px-8 bg-[#23A6F0] rounded-md text-white mt-4">
            Try it for free
          </button>
        </div>
    </section>
  );
};

export default ContactSupport;
