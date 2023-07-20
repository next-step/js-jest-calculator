import { isValidNumbers } from './validator'

export const floor = (num) => {
  const isNegative = num < 0
  const decimalNumber = new RegExp(/[0-9]+\./).exec(Math.abs(num))
  const result = decimalNumber ? Number(decimalNumber[0].replace('.', '')) : Math.abs(num)

  return (isNegative && result !== 0) ? -result : result
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