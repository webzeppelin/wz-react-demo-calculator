// IMPORT ACTION TYPES
import { DIGIT_KEY_PRESS, DECIMAL_KEY_PRESS, OPERATOR_KEY_PRESS,
  EQUAL_KEY_PRESS, CLEAR_ENTRY_KEY_PRESS, CLEAR_ALL_KEY_PRESS } from "../action"
import { OperatorState, CalculatorOps } from "../model";

export const defaultCalculatorState = {
  mem: 0.0,
  acc: 0.0,
  entry: 0.0,
  entryFixed: true,
  decimalPlaces: 0,
  op: null,
}

export function reduceCalculator(state = defaultCalculatorState, action) {
  switch (action.type) {
    // USE CASE STATEMENTS TO REDUCE ACTIONS
    case DIGIT_KEY_PRESS:
      if (getEntryLength(state) > 8) return state;
      let baseEntry = state.entryFixed ? 0.0 : state.entry;
      let signFactor = Math.sign(baseEntry);
      if (signFactor == 0) signFactor = 1;
      let nextEntry = state.decimalPlaces == 0 ?
        baseEntry*10 + action.digit :
        baseEntry + signFactor*Math.pow(0.1, state.decimalPlaces)*action.digit;
      let nextDecimalPlaces = state.decimalPlaces == 0 ? 0 : state.decimalPlaces + 1;
      return {
        ...state,
        entry: nextEntry,
        decimalPlaces: nextDecimalPlaces,
        entryFixed: false,
      };
    case DECIMAL_KEY_PRESS:
      if (getEntryLength(state) > 8) return state;
      let entry = state.entryFixed ? 0.0 : state.entry;
      return {
        ...state,
        entry: entry,
        decimalPlaces: state.decimalPlaces == 0 ? 1 : state.decimalPlaces,
        entryFixed: false,
      };
    case OPERATOR_KEY_PRESS:
      if (action.operation.accumulate) {
        return evaluateOperation(state, state.op ? state.op : CalculatorOps.assign, action.operation);
      } else {
        return evaluateOperation(state, action.operation, state.op);
      }
    case EQUAL_KEY_PRESS:
      return evaluateOperation(state, state.op ? state.op : CalculatorOps.assign, null);
    case CLEAR_ENTRY_KEY_PRESS:
      return {
        ...state,
        entry: defaultCalculatorState.entry,
        decimalPlaces: defaultCalculatorState.decimalPlaces,
      }
    case CLEAR_ALL_KEY_PRESS:
      return defaultCalculatorState;
    default:
      return state;
  }
}

function evaluateOperation(state, operation, nextOperation) {
  let opInState = new OperatorState(state.mem, state.acc, state.entry);
  let opOutState = operation.func(opInState);
  return {
    mem: opOutState.mem,
    acc: opOutState.acc,
    entry: opOutState.entry,
    entryFixed: true,
    decimalPlaces: 0,
    op: nextOperation,
  }
}

function getEntryLength(state) {
  if (state.entryFixed) return 1;
  return state.entry >= 0.0 ?
    Math.trunc(state.entry).toString().length + state.decimalPlaces :
    Math.trunc(state.entry).toString().length -1 + state.decimalPlaces;
}
