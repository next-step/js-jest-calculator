import { trunc, validator } from './utils'

export class Calculator {
  constructor() {
    this.value = 0
  }

  sum(num1, num2) {
    validator(num1, num2)
    this.value = trunc(num1 + num2)
  }
  subtract(num1, num2) {
    validator(num1, num2)
    this.value = trunc(num1 - num2)
  }
  multiple(num1, num2) {
    validator(num1, num2)
    this.value = trunc(num1 * num2)
  }
  divide(num1, num2) {
    validator(num1, num2)
    this.value = trunc(num1 / num2)
  }

  getValue() {
    return trunc(this.value)
  }
}
