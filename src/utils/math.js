import { isValidNumbers } from './validator'

export const floor = (num) => {
  const result = Math.trunc(num)
  return result === 0 ? 0 : result
}

export const sum = (numA, numB) => {
  isValidNumbers(numA, numB)
  return numA + numB
}

export const subtract = (numA, numB) => {
  isValidNumbers(numA, numB)
  return numA - Math.abs(numB)
}

export const multiply = (numA, numB) => {
  isValidNumbers(numA, numB)
  return numA * numB
}

export const divide = (numA, numB) => {
  isValidNumbers(numA, numB)
  return numA / numB
}