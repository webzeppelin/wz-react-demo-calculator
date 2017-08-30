import { takeLatest } from "redux-saga";
import { race, call, put, fork, take } from "redux-saga/effects";

// IMPORT YOUR ACTION TYPES
// import { ACTION_TYPE } from "../action"

// IMPORT YOUR SIDE EFFECTS
// import { doSideEffect } from "./home";

// root saga generators
export function* sagas() {
  yield [
    // REGISTER YOUR SIDE EFFECT SAGAS BELOW
    // fork(takeLatest, ACTION_TYPE, doSideEffect),
    // fork(takeLatest, ACTION_TYPE, logAction),
    
  ];
}

export function* logAction(action) {
  console.log("logAction: "+action.type);
}