import { call, put, take, select, fork, race } from "redux-saga/effects";
import { takeLatest, delay } from "redux-saga";
import * as Action from "../action";
import TimeApi from "../api/time";

export default function* calculatorSaga() {
  yield takeLatest(Action.FETCH_TIME, fetchTime);
  yield fork(monitorToggleMode);
}

export function* fetchTime(action) {
  try {
    const timeObject = yield call(TimeApi.fetchLocalTime);
    let time = timeObject ? new Date(Date.parse(timeObject.currentDateTime)) : null;
    yield put(Action.receiveTime(time));
  } catch (e) {
    console.log("Could not get time from external API");
    console.error(e);
  }
}

export function* monitorToggleMode() {
  while(true) {
    yield take(Action.TOGGLE_MODE);
    let mode = yield select(getMode);
    if (mode == 1) {
      yield put(Action.fetchTime());
      //console.log("Starting race");
      yield race([
        fork(tickTockTimer),
        take(Action.TOGGLE_MODE)
      ]);
      //console.log("Race finished");
    }
  }
}

function* tickTockTimer() {
  while(true) {
    yield delay(1000);
    // this shouldn't be needed but the race in the monitor is exiting prematurely so it runs forever and starts duplicate timers
    let mode = yield select(getMode);
    if (mode == 0) break;
    yield put(Action.tickTock());
  }
}

const getMode = (state) => state.calculator.mode

