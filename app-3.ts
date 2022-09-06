import { contadorReducer } from "./app-2";
import { incrementadorAction, multiplicarAction } from "./contador/contador.actions";
import { Action, Reducer } from "./nxrx-fake/ngrx";

class Store<T> {

  constructor(private reducer: Reducer<T>, private state: T) {

  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action)
  }
}

const store = new Store(contadorReducer, 10)

console.log(store.getState());

store.dispatch(incrementadorAction);
console.log(store.getState());


store.dispatch(multiplicarAction);
console.log(store.getState());