import { useState, type ReactNode } from "react";
import type { RoomType } from "../Types/RoomType";
import { roomData } from "../assets/asset";
import { RoomContext } from "./RoomContextDefinition";

const RoomContextProvider = ({ children }: { children: ReactNode }) => {
  const [rooms, setRooms] = useState<RoomType[]>(roomData);

  return (
    <RoomContext.Provider value={{ rooms, setRooms }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
