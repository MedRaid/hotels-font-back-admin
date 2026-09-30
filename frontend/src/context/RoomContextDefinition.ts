import { createContext, type Dispatch, type SetStateAction } from "react";
import type { RoomType } from "../Types/RoomType";

export type RoomContextType = {
  rooms: RoomType[];
  setRooms: Dispatch<SetStateAction<RoomType[]>>;
};

export const RoomContext = createContext<RoomContextType | undefined>(
  undefined,
);
