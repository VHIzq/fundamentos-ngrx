import { Action } from "./nxrx-fake/ngrx"
import {
  incrementadorAction,
  decrementadorAction,
  multiplicarAction,
  dividirAction,
  resetAction,
  potenciarAction,
} from "./contador/contador.actions"

 export function contadorReducer(state = 10, action: Action) {
  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1)

    case "DECREMENTAR":
      return (state -= 1)

    case "MULTIPLICAR":
      return state * action.payload

    case "DIVIDIR":
      return state / action.payload

    case "RESET":
      return (state = 0)
    
    case "POTENCIAR":
      return (state * action.payload) * action.payload
    

    default:
      return state
  }
}


