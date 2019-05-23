import actions from './actions';

const initState = {
    news: []
};

const _handleUpdateListNews = (state, news) => {
    let listNews = [];

    for(let index = 0; index < news.length; index++){
        const url = news[index].url.slice(-10);
        const url2 = news[index].url.substring(0, 23);

        // console.log(index);
        // console.log("url2 : ", url2);
        // console.log("Ok : ", (url2 == "https:\/\/edition.cnn.com"))

        // if (url2 == "https:\/\/edition.cnn.com") 
        //     continue;

        if (url == "index.html")
            listNews = listNews.concat(news[index]);
    }

    state = {
        ...state,
        ...{
            news: listNews,
            startIndex: 0,
            endIndex: 3
        }
    }
    return state;
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case actions.type.LOAD_LIST_NEWS:
            return state;

        case actions.type.LOAD_LIST_NEWS_SUCCESS:
            return _handleUpdateListNews(state, action.payload.news);

        default:
            return state;
    }
}

export default reducer;