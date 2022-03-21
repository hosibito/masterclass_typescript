import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",  // 유니크한이름
  default: false,   // 기본 
});

