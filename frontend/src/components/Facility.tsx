import {
  FaBath,
  FaCar,
  FaCocktail,
  FaConciergeBell,
  FaShuttleVan,
  FaSwimmingPool,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShuttleVan size={32} />,
    title: "Free Shuttle Service",
    description:
      "We provide complimentary shuttle service to and from the airport for our guests.",
  },
  {
    icon: <FaCar size={32} />,
    title: "Free Car Service",
    description:
      "We provide complimentary car service to and from the airport for our guests.",
  },
  {
    icon: <FaCocktail size={32} />,
    title: "Free Cocktail Service",
    description: "We provide complimentary cocktail service to our guests.",
  },
  {
    icon: <FaBath size={32} />,
    title: "Free Bath Service",
    description: "We provide complimentary bath service to our guests.",
  },
  {
    icon: <FaConciergeBell size={32} />,
    title: "Concierge Service",
    description:
      "Our concierge service is available 24/7 to assist you with any needs or requests.",
  },
  {
    icon: <FaSwimmingPool size={32} />,
    title: "Swimming Pool",
    description: "We have a beautiful swimming pool for our guests to enjoy.",
  },
];

const Facility = () => {
  return (
    <div className="bg-[#f8f0eb] py-16 px-4 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 ">
          <p className="text-sm tracking-widest uppercase text-gray-500">
            Services
          </p>
          <h2 className="text-4xl font-serif font-semibold text-gray-800">
            Facilities & Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start space-y-3">
              <div className="bg-lime-400 rounded-full p-5 text-black">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-500 max-w-xs text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
