import { validator } from "./Validation"

export const Calculator = {
  sum : (a, b) => {
    if(validator(a, b)) {
      return Math.floor(a + b)
    }
  },
  
  sub : (a, b) => {
    if(validator(a, b)) {
      return Math.floor(a - b)
    }
  },

  mul : (a, b) => {
    if(validator(a, b)) {
      return Math.floor(a * b)
    }
  },

  div : (a, b) => {
    if(validator(a, b)) {
      return Math.floor(a / b)
    }
  }
}

