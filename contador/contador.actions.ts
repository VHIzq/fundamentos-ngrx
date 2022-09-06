import { Action } from "../nxrx-fake/ngrx";

export const incrementadorAction: Action = {
  type: "INCREMENTAR",
}

export const decrementadorAction: Action = {
  type: "DECREMENTAR",
}

export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 4,
}

export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 4,
}

export const resetAction: Action = {
  type: 'RESET'
}

export const potenciarAction: Action = {
  type: "POTENCIAR",
  payload: 5
}
