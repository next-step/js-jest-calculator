import { OUTPUT_VIEW_CONFIG } from "../constants/ouputView";

export const OutputView = {
  printResult(resultNumber) {
    const result = resultNumber.toFixed(OUTPUT_VIEW_CONFIG.FIXED_POSITION);

    console.log(result);
  },

  printError(errorMessage) {
    console.log(errorMessage);
  },
};
