// IMPORT ACTION TYPES
// import * as Action from "../../action";

export const defaultHomeState = {
  // DEFINE YOUR DEFAULT HOME PAGE STATE
  // stateVar: "State Var Value",
}

export function reduceHome(state = defaultHomeState, action) {
  switch (action.type) {
    // USE CASE STATEMENTS TO REDUCE ACTIONS
    // case Action.ACTION_TYPE:
    //   return {
    //     ...state,
    //     stateVar: action.arg1,
    //   };
    default:
      return state;
  }
}
