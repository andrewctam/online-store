import { createContext } from "react";
import { ItemBody } from "./types";

type CartContextType = { cart: ItemBody[], setCart: (cart: ItemBody[]) => void };
const defaultValue = { cart: [], setCart: () => { } };
export const CartContext = createContext<CartContextType>(defaultValue);

export const UserContext = createContext<string>("");
