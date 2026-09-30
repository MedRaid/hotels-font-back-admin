import { useContext } from "react";
import { RoomContext } from "../context/RoomContextDefinition";

export function useRooms() {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error("useRooms must be used within a RoomContextProvider");
  }
  return context;
}
