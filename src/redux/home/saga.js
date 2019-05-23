import {
    all,
    takeEvery,
    fork,
    put,
    select
}
from 'redux-saga/effects';
import actions from './actions';
import {getNews} from '../../services/api/news.api';

function* saga_LoadListNews(){
    try {
        var news = yield getNews();
        news = news.articles;
        yield put(actions.action.loadListNewsSuccess(news));
    }
    catch {

    }
}

function* listen(){
    yield takeEvery(actions.type.LOAD_LIST_NEWS, saga_LoadListNews);
}

export default function* homeSaga(){
    yield all([
        fork(listen)
    ]);
}