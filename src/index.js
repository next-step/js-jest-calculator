import { ERROR_MSG, OPERAND_LIMIT, OPERATOR } from "./constants";
import { isLessThanMaxLength, isNumber} from "./utils";

export class Calculator {
    #value;
    constructor() {
        this.#value = 0;
    }

    validate(operand1, operand2, operator) {
        if (!isNumber(operand1) || !isNumber(operand2)) {
            throw new Error(ERROR_MSG.OPERAND_TYPE);
        }
        if (!isLessThanMaxLength(operand1, OPERAND_LIMIT) || !isLessThanMaxLength(operand2, OPERAND_LIMIT)) {
            throw new Error(ERROR_MSG.OPERAND_MAX_LENGTH);
        }
        if (!Object.values(OPERATOR).includes(operator)) {
            throw new Error(ERROR_MSG.OPERATOR_TYPE);
        }
        if (operator === OPERATOR.DIVIDE && operand2 === 0) {
            throw new Error(ERROR_MSG.SECOND_OPERAND_NOT_ZERO);
        }
    }

    calculate(operand1, operand2, operator) {
        try {
            this.validate(operand1, operand2, operator);

            switch (operator) {
                case OPERATOR.SUM:
                    this.#value = operand1 + operand2;
                    break;
                case OPERATOR.SUBTRACT:
                    this.#value = operand1 - operand2;
                    break;
                case OPERATOR.MULTIPLY:
                    this.#value = operand1 * operand2;
                    break;
                case OPERATOR.DIVIDE:
                    this.#value = operand1 / operand2;
                    break;
                default:
                    break;
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    getValue() {
        return Math.floor(this.#value);
    }

    clearValue() {
        return this.#value = 0;
    }
}
