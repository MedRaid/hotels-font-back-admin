import { useParams } from "react-router-dom";
import { roomData } from "../assets/asset";

const HotelDetails = () => {
  const { id } = useParams();

  const room = roomData.find((r) => r.id === Number(id));

  if (!room) return <p>Chambre introuvable</p>;

  return (
    <div className="mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side */}
      <div className=" space-y-6 ">
        <div>
          <h1 className="text-3xl font-bold">{room.name}</h1>
          <p className="text-xl text-lime-500 mt-1">{room.price}</p>
        </div>
        <img src={room.image} alt="" className="w-full rounded-lg shadow-md" />
      </div>
      <div className="p-6 mt-18 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-4">Book your stay</h2>
        <div className="place-content-end">
          <form className="space-y-4 ">
            <input
              type="text"
              name=""
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded-lg "
            />
            <input
              type="email"
              name=""
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
            <input
              type="tel"
              name=""
              placeholder="Phone number"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
            <div>
              <label htmlFor="date" className="font-bold">
                Check-in
              </label>
              <input
                type="date"
                name=""
                id=""
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="date" className="font-bold">
                Check-out
              </label>
              <input
                type="date"
                name=""
                id=""
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="">Number of Guests</label>
              <select
                name=""
                id=""
                className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300"
              >
                {[...Array(3).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Guest(s)
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-300 transition"
            >
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
