import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import HotelDetails from "./pages/HotelDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:id" element={<HotelDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
