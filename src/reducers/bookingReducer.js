import { fetchAPI } from "../components/api/fetchAPI";

export const initialState = {
  date: "",
  time: "",
  guests: 1,
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
};

export function bookingReducer(state, action) {
  switch (action.type) {
    case "UPDATE_DATE":
      return { ...state, date: action.payload };
    case "UPDATE_TIME":
      return { ...state, time: action.payload };
    case "UPDATE_GUESTS":
      return { ...state, guests: isNaN(action.payload) ? 1 : action.payload };
    case "UPDATE_AVAILABLE_TIMES":
      if (action.payload) {
        return { ...state, availableTimes: fetchAPI(new Date(action.payload)) };
      }
      return state;
    case "RESET_BOOKING":
      return initialState;
    default:
      return state;
  }
}
