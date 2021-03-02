import { INCREMENT_ASYNC, INCREMENT } from '../constants';
import { call, put, takeEvery} from 'redux-saga/effects';

function* increase() {
    yield call(setTimeout(()=> {
        console.log('异步新增')
    },1000))
  yield put({ type: INCREMENT });
}

// 直接 export 函数，没有做整理
export function* add() {
  yield takeEvery(INCREMENT_ASYNC, increase);
}

