import { isValidNumbers } from './validator'

export const sum = (numA, numB) => {
  isValidNumbers(numA, numB)
  return numA + numB
}

export const subtract = (numA, numB) => {
  isValidNumbers(numA, numB)
  return numA - numB
}

export const multiply = (numA, numB) => {
  isValidNumbers(numA, numB)
  return numA * numB
}

export const divide = (numA, numB) => {
  isValidNumbers(numA, numB)
  return numA / numB
}