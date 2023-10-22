import { configureStore } from "@reduxjs/toolkit";
import { contactListReducer } from "./redux/reducer/contactListReducer";

// import contactListReducer reducer 
export const store = configureStore({
  reducer: { contactListReducer },
//   middleware: [loggerMiddleware]
});
