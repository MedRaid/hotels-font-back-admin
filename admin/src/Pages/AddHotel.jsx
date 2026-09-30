import { useState } from "react";
// @ts-ignore
import placeHolderUpload from "../assets/placeHolderUpload.png";
import axios from "axios";
import { backendUrl } from "../App";
// @ts-ignore
export const AddHotel = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  // @ts-ignore
  const roomAdding = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", desc);
      formData.append("price", price);

      if (image) formData.append("image", image);

      const response = await axios.post(
        `${backendUrl}/api/hotel/add`,
        formData,
        { headers: { token } },
      );

      if (response.data.success) {
        console.log(response.data.message);
        console.log("success");

        setName("");
        setDesc("");
        setPrice("");
        // @ts-ignore
        setImage("");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log("fail");
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={roomAdding}>
        <div>
          <p>Upload Image</p>
          <div>
            <label htmlFor="image">
              <img
                src={!image ? placeHolderUpload : URL.createObjectURL(image)}
                alt=""
                className="w-32 cursor-pointer "
              />
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  const img = e.currentTarget?.files?.[0];
                  if (img) {
                    // @ts-ignore
                    setImage(img);
                  }
                }}
                hidden
              />
            </label>
          </div>
        </div>
        <div className="w-full">
          <p className="mb-2 text-[22px]">Room name</p>
          <input
            type="text"
            placeholder="Enter room name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full max-w-125 p-4 border border-gray-300 rounded"
          />
        </div>

        <div className="w-full">
          <p className="mb-2 text-[22px]">Room description</p>
          <input
            type="text"
            placeholder="Enter room description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="w-full max-w-125 p-4 border border-gray-300 rounded"
          />
        </div>

        <div className="w-full">
          <p className="mb-2 text-[22px]">Room price</p>
          <input
            type="number"
            placeholder="40"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
            min="0"
            className="w-full max-w-125 p-4 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer mt-6 px-20 py-3 bg-fuchsia-600 rounded text-white"
        >
          Validate
        </button>
      </form>
    </div>
  );
};
