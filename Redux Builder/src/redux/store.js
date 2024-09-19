import { combineReducers, legacy_createStore } from "redux";
import { reducer as Counterreducer } from "./counter/reducer";
import { reducer as Themereducer } from "./Theme/reducer";

const rootreduces=
combineReducers({Counterreducer,Themereducer})

export const store=legacy_createStore(rootreduces)