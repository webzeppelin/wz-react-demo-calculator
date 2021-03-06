// This file defines the action type constants and provides action creators

export const DIGIT_KEY_PRESS = "DIGIT_KEY_PRESS";
export function digitKeyPress(digit) {
    return {
        type: DIGIT_KEY_PRESS,
        digit: digit,
    };
}

export const DECIMAL_KEY_PRESS = "DECIMAL_KEY_PRESS";
export function decimalKeyPress() {
    return {
        type: DECIMAL_KEY_PRESS,
    };
}

export const OPERATOR_KEY_PRESS = "OPERATOR_KEY_PRESS";
export function operatorKeyPress(operation) {
    return {
        type: OPERATOR_KEY_PRESS,
        operation: operation,
    };
}

export const EQUAL_KEY_PRESS = "EQUAL_KEY_PRESS";
export function equalKeyPress() {
    return {
        type: EQUAL_KEY_PRESS,
    };
}

export const CLEAR_ENTRY_KEY_PRESS = "CLEAR_ENTRY_KEY_PRESS";
export function clearEntryKeyPress() {
    return {
        type: CLEAR_ENTRY_KEY_PRESS,
    };
}

export const CLEAR_ALL_KEY_PRESS = "CLEAR_ALL_KEY_PRESS";
export function clearAllKeyPress() {
    return {
        type: CLEAR_ALL_KEY_PRESS,
    };
}

export const TOGGLE_MODE = "TOGGLE_MODE";
export function toggleMode() {
    return {
        type: TOGGLE_MODE,
    };
}

export const FETCH_TIME = "FETCH_TIME";
export function fetchTime() {
    return {
        type: FETCH_TIME,
    };
}

export const RECEIVE_TIME = "RECEIVE_TIME";
export function receiveTime(time) {
    return {
        type: RECEIVE_TIME,
        time: time,
    };
}

export const TICK_TOCK = "TICK_TOCK";
export function tickTock() {
    return {
        type: TICK_TOCK,
    }
}
