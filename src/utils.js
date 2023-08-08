export function isNumber(val) {
    return typeof val === "number";
}

export function isLessThanMaxLength(val, limit) {
    return val.toString().length <= limit;
}
