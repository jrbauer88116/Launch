import { combineReducers } from "redux"

import menu from "./components/menu/reducer"
import overview from "./components/overview/reducer"

const Measurz = combineReducers({
    menu,
    overview
})

export default Measurz