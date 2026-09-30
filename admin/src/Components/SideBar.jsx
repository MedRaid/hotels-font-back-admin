import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

// @ts-ignore
export const SideBar = ({ setToken }) => {
  return (
    <div className="w-[45%] lg:w-[22%] min-h-screen border-r-2 border-gray-100 bg-white">
      <div className="mt-4 px-6 ">
        <h2 className="text-[32px] font-bold">Delux hotel</h2>
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <NavLink
          to={"/add"}
          className="flex items-center gap-3 px-4 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-fuchsia-500 hover:text-white"
        >
          <IoMdAddCircleOutline className="text-[35px] text-black " />
          <p className="hidden sm:block text-base">Add Rooms</p>
        </NavLink>

        <NavLink
          to={"/list"}
          className="flex items-center gap-3 px-4 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-fuchsia-500 hover:text-white"
        >
          <MdFormatListBulleted className="text-[35px] text-black " />
          <p className="hidden sm:block text-base">List of Rooms</p>
        </NavLink>

        <NavLink
          to={"/reservation"}
          className="flex items-center gap-3 px-4 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-fuchsia-500 hover:text-white"
        >
          <MdHotel className="text-[35px] text-black " />
          <p className="hidden sm:block text-base">Reservation</p>
        </NavLink>

        <button
          className="flex items-center gap-3 px-4 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-fuchsia-500 w-full text-left"
          onClick={() => {
            setToken("");
          }}
        >
          <FiLogOut className="text-[35px] text-black " />
          <p className="hidden sm:block text-base">Logout</p>
        </button>
      </div>
    </div>
  );
};
