import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistState", // unique ID to differentiate from other atoms/selectors
  default: null, //initial value
});

export const playlistIdState = atom({
  key: "playlistIdState", // unique ID (with respect to other atoms/selectors)
  default: "4LnTQT9pZuyXG96WS9RNzU",
});