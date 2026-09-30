const Footer = () => {
  return (
    <div className="flex flex-col gap-12 px-16 py-16 bg-black text-white">
      {/* Top section */}
      <div className="grid place-content-center gap-6 text-center">
        <h2 className="text-4xl font-bold">Sign up for offers</h2>
        <div className="flex justify-center  max-w-xl">
          <input
            type="email"
            placeholder="Enter your email"
            className=" px-8 py-3 border-2 border-r-0 border-lime-400 rounded-l-full outline-none"
          />
          <button className="bg-lime-400 text-white px-8 py-4 rounded-r-full font-bold">
            Join now
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col justify-between items-center text-center gap-6">
        <div>
          <h2 className="text-2xl font-bold">Delux hotels</h2>
        </div>
        <div>
          <ul className="flex gap-6 justify-center text-base font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Bookings</li>
            <li className="cursor-pointer">Room</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
