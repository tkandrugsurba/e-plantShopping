import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Import cartReducer from CartSlice.jsx

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign cartReducer to the cart slice of the state
  },
});

// Export the configured Redux store
export default store;
