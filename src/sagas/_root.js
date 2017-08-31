import { takeLatest } from "redux-saga";
import { race, call, put, fork, take } from "redux-saga/effects";

// IMPORT YOUR ACTION TYPES
import { FETCH_TIME, TOGGLE_MODE } from "../action"

// IMPORT YOUR SIDE EFFECTS
import { fetchTime, monitorToggleMode } from "./calculator";

// root saga generators
export function* sagas() {
  yield [
    // REGISTER YOUR SIDE EFFECT SAGAS BELOW
    fork(takeLatest, FETCH_TIME, fetchTime),
    monitorToggleMode(),
    
  ];
}

export function* logAction(action) {
  console.log("logAction: "+action.type);
}