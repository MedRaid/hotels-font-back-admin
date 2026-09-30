import { useEffect, useState } from "react";
import { Login } from "./Components/Login";
import { SideBar } from "./Components/SideBar";
import { AddHotel } from "./Pages/AddHotel";
import { Route, Routes } from "react-router-dom";
import { ListHotels } from "./Pages/ListHotels";
import { Reservation } from "./Pages/Reservation";
// import { TaosTContainer } from "react-toastify";
export const backendUrl = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-white min-h-screen">
      {/* <ToastContainer /> */}
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex w-full ">
          <SideBar setToken={setToken} />
          <div className="w-[70%] ml-[max(5vw,25px)] my-8 text-black text-base">
            <Routes>
              <Route path="/add" element={<AddHotel token={token} />} />
              <Route path="/list" element={<ListHotels />} />
              <Route path="/reservation" element={<Reservation />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
