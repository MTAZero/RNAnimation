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
import {summarizeText, summarizeNews, getContent} from '../../services/api/summarize.api';

function* saga_LoadListNews(){
    try {
        const news = yield getNews();
        yield put(
            actions.action.loadListNewsSuccess(news.articles)
        );
    }
    catch (ex){
    }
}

function* saga_SummarizeText(action){
    try {
        const text = action.payload.text;
        const lang = yield select((state) => state.home.language);
        const mode = yield select((state) => state.home.mode);
        const res = yield summarizeText(mode, lang, text);
        
        yield put(
            actions.action.summarizeSuccess(res)
        );
    }
    catch (ex){
    }
}


function* saga_SummarizeNews(action){
    try {
        const url = action.payload.url;
        const lang = yield select((state) => state.home.language);
        const mode = yield select((state) => state.home.mode);

        const text = yield getContent(url);
        yield put(
            actions.action.updateText(text)
        );

        const res = yield summarizeNews(mode, lang, url);
        
        yield put(
            actions.action.summarizeSuccess(res)
        );
    }
    catch (ex){
    }
}

function* saga_ChangeInputText(action){
    try {
        const text = action.payload.text;
        
        yield put(
            actions.action.summarizeText(text)
        );
    }
    catch (ex){
    }
}

function* saga_ChangeLanguage(){
    try{
        const lastAction = yield select((state) => state.home.lastAction);
        if (lastAction == 0){
            // summarize text
            const text = yield select((state) => state.home.lastText);
            yield put(
                actions.action.summarizeText(text)
            );
        }
        else {
            // summarize news
            const url = yield select((state) => state.home.lastUrl);
            yield put(
                actions.action.summarizeNews(url)
            );
        }
    }
    catch (ex){
    }
}

function* saga_ChangeMode(action){
    try{
        const lastAction = yield select((state) => state.home.lastAction);
        if (lastAction == 0){
            // summarize text
            const text = yield select((state) => state.home.lastText);
            yield put(
                actions.action.summarizeText(text)
            );
        }
        else {
            // summarize news
            const url = yield select((state) => state.home.lastUrl);
            yield put(
                actions.action.summarizeNews(url)
            );
        }
    }
    catch (ex){
    }
}

function* listen(){
    yield takeEvery(actions.type.LOAD_LIST_NEWS, saga_LoadListNews);
    yield takeEvery(actions.type.SUMMARIZE_TEXT, saga_SummarizeText);
    yield takeEvery(actions.type.SUMMARIZE_NEWS, saga_SummarizeNews);
    yield takeEvery(actions.type.CHANGE_INPUT_TEXT, saga_ChangeInputText);
    yield takeEvery(actions.type.CHANGE_LANGUAGE, saga_ChangeLanguage);
    yield takeEvery(actions.type.CHANGE_MODE, saga_ChangeMode);
}

export default function* homeSaga(){
    yield all([
        fork(listen)
    ]);
}