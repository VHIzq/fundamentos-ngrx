import { createStore, Store } from "redux";
import { contadorReducer } from './app-2';
import { incrementadorAction } from "./contador/contador.actions";

const store: Store = createStore(contadorReducer)

store.subscribe(() => {
  console.log('subs:', store.getState());
})

store.dispatch(incrementadorAction)
store.dispatch(incrementadorAction)
store.dispatch(incrementadorAction)
store.dispatch(incrementadorAction)

