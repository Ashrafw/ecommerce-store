import { create } from "zustand";
interface MyShopStore {
  userName: string;
}

const shopStore = create<MyShopStore>((set, get) => ({
  userName: "",
}));
