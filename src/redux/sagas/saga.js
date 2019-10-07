import { put, takeLatest, all } from 'redux-saga/effects';
let userDetails;
function* checkUser() {
    yield fetch('https://5d99c13d5641430014051b46.mockapi.io/api/users')
        .then(res => {
            return res.json();
        }).then(userDetail => {
            userDetails = { isAuthenticated: true, userDetail };
        }).catch(error => {
            userDetails = { isAuthenticated: false };
        })
    yield put({ type: 'USER_LOGIN_DETAIL', userLoginDetails: userDetails })
}
function* loginWatcher() {
    yield takeLatest('LOGIN_CLICK', checkUser);
}
export default function* rootSaga() {
    yield all([
        loginWatcher()
    ])
}