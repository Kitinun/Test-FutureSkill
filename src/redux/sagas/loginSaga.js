// // import { all, takeEvery, put } from "redux-saga/effects";
// // import * as helper from "../../utils/helper";
// // import * as actionTypes from "../actions/loginTypes";

// export default function* watchLoginSaga() {
//   yield all([
//     // takeEvery(actionTypes.LOG_IN, watchLogin),
//     // takeEvery(actionTypes.CHECK_LOGIN, watchCheckLogin),
//   ]);
// }

// function* watchLogin(payload) {
//   const { data, history, productCode } = payload.payload;
//   // helper.sessionSave("login", data);
//   // helper.sessionSave("token", data.token);
//   // console.log("data", data);
//   // if (productCode) {
//   //   history.push(`/change/branch/product/edit/${productCode}`);
//   // } else {
//   //   history.push("/home");
//   // }

//   // try {
//   //   yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: JSON.parse(data) });
//   // } catch (e) {
//   //   yield put({ type: actionTypes.LOG_IN_FAILED, payload: e });
//   // }
// }

// function* watchCheckLogin() {
//   // const items = yield helper.sessionGet("login");
//   // try {
//   //   if (items) {
//   //     yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: JSON.parse(items) });
//   //   }
//   // } catch (e) {
//   //   yield put({ type: actionTypes.LOG_IN_FAILED, payload: e });
//   // }
// }


