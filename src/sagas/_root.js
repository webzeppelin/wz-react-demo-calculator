import { race, call, put, fork, take, spawn } from "redux-saga/effects";
import { delay } from 'redux-saga'

// IMPORT YOUR SIDE EFFECTS
import calculatorSaga from "./calculator";

const makeRestartable = (saga) => {
  return function* () {
    yield spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          console.error("Unexpected root saga termination.", saga);
        } catch (e) {
          console.error("Saga error, the saga will be restarted", e);
        }
        yield delay(3000);
      }
    })
  };
};

const rootSagas = [
  calculatorSaga,
].map(makeRestartable);

export function* sagas() {
  yield rootSagas.map(saga => call(saga));
}
