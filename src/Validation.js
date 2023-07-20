export const validator = (a, b) =>{
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a and b must be numbers")
  }

  if (a > 999 || b > 999) {
    throw new Error("a and b must be less than 1000")
  }

  if (a < -999 || b < -999) {
    throw new Error("a and b must be greater than -1000")
  }

  return true
}
