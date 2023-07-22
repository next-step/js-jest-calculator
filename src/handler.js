import { ERROR_MESSAGE } from './constants/message'
import { PROTECTED_KEY } from './constants/app'


export const calculatorHandler = {
  get(target, key) {
    if (!Reflect.has(target, key)) {
      throw new Error(ERROR_MESSAGE.NOT_SUPPORT)
    }

    if (key === PROTECTED_KEY) {
      throw new Error(ERROR_MESSAGE.NOT_ACCESS_VALUE)
    }

    return Reflect.get(target, key)
  },
  set(_, key) {
    if (key === PROTECTED_KEY) {
      throw new Error(ERROR_MESSAGE.NOT_ACCESS_VALUE)
    }

    throw new Error(ERROR_MESSAGE.NOT_SUPPORT)
  }
}