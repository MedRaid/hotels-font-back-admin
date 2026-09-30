import { FaBath, FaBed, FaUserFriends, FaWifi } from "react-icons/fa";
import { useRooms } from "../hooks/useRooms";
import { Link } from "react-router-dom";

const ameneties = [
  { label: "1 - 2 persons", icon: <FaUserFriends className="text-gray-500" /> },
  { label: "Bathtub", icon: <FaBath className="text-gray-500" /> },
  { label: "King size bed", icon: <FaBed className="text-gray-500" /> },
  { label: "Free wifi", icon: <FaWifi className="text-gray-500" /> },
];

const HotelList = () => {
  const { rooms } = useRooms();
  console.log("Rooms", rooms);
  return (
    <div className="bg-[#f7f0eb] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
          Book your stay and <br /> enjoy the experience
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {rooms && rooms.length > 0 ? (
            rooms.map((room, index) => {
              const { id, image, name, price } = room;
              return (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <Link to={`/room/${id}`}>
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-80 object-cover"
                    />
                  </Link>
                  <div className="p-5">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                      {name}
                    </h3>
                    {/* <p>{description}</p> */}
                    <p className="text-gray-600 text-lg mb-4">
                      ${price.toFixed(2)}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-base text-gray-700">
                      {ameneties.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {amenity.icon}
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No rooms available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
