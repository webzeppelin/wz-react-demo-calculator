// IMPORT ACTION TYPES
// import { ACTION_TYPE } from "../../action"

export const defaultHomeState = {
  // DEFINE YOUR DEFAULT HOME PAGE STATE
  // stateVar: "State Var Value",
}

export function reduceHome(state = defaultHomeState, action) {
  switch (action.type) {
    // USE CASE STATEMENTS TO REDUCE ACTIONS
    // case ACTION_TYPE:
    //   return {
    //     ...state,
    //     stateVar: action.arg1,
    //   };
    default:
      return state;
  }
}
