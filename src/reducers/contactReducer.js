export const initialState = {
  name: "",
  email: "",
  occasion: "none",
  requirements: "",
};

export function contactReducer(state, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_OCCASION":
      return { ...state, occasion: action.payload };
    case "UPDATE_REQUIREMENTS":
      return { ...state, requirements: action.payload };
    case "SET_CONTACT_DATA":
      return { ...state, ...action.payload };
    case "RESET_CONTACT":
      return initialState;
    default:
      return state;
  }
}
