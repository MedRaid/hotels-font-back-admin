import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between p-[2rem] bg-black text-white">
        <Link to="/">
          <div>
            <h2 className="font-bold text-2xl">
              DELUXE <span className="text-lime-400">Hotels</span>
            </h2>
          </div>
        </Link>

        <div>
          <ul className="flex justify-between gap-[2rem]">
            <li className=" font-bold text-lg hover:text-lime-400 cursor-pointer">
              BOOKINGS
            </li>
            <li className=" font-bold text-lg hover:text-lime-400 cursor-pointer">
              ROOMS
            </li>
            <li className=" font-bold text-lg hover:text-lime-400 cursor-pointer">
              CONTACT
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
