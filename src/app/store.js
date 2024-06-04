import { configureStore } from "@reduxjs/toolkit";
import todo from "../Components/store/action"
export const store = configureStore({
	reducer: {
		todo:todo
	},
})
