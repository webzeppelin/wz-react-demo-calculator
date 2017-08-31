import { call, put, take, select, fork, race } from "redux-saga/effects";
import { fetchTime as fetchTimeAction, receiveTime, tickTock, TOGGLE_MODE } from "../action";
import TimeApi from "../api/time";

export function* fetchTime(action) {
  const timeObject = yield call(TimeApi.fetchLocalTime);
  // console.log(timeObject);
  let time = timeObject ? new Date(Date.parse(timeObject.currentDateTime)) : null;
  yield put(receiveTime(time));
}

export function* monitorToggleMode() {
  while(true) {
    yield take(TOGGLE_MODE);
    let mode = yield select(getMode);
    if (mode == 1) {
      yield put(fetchTimeAction());
      //console.log("Starting race");
      yield race([
        fork(tickTockTimer),
        take(TOGGLE_MODE)
      ]);
      //console.log("Race finished");
    }
  }
}

function* tickTockTimer() {
  while(true) {
    yield call(delayOneSecond);
    // this shouldn't be needed but the race in the monitor is exiting prematurely so it runs forever and starts duplicate timers
    let mode = yield select(getMode);
    if (mode == 0) break;
    yield put(tickTock());
  }
}

function delayOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), 1000)
  });
}

const getMode = (state) => state.calculator.mode

