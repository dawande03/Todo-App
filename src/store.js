import { createStore } from "redux";
import rootreducers from "./redux/action/reducer/combine_reducer";

const store = createStore(
    rootreducers
)
export default store