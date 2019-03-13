import actions from './actions';

const initState = {
    isLoading: false,
    isError: false,
    errorMessage: "",
    sayHello: false,
    news: [],
    startIndex: 0,
    endIndex: 3,
    language: 'en',//'en',
    mode: 'extractive', //abstractice
    text: "",
    result: "",
    lastText: "",
    lastUrl: "",
    lastAction: 0, // summarize text: 0, summarize news: 1
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

const _handlePressLeftButton = (state) => {
    if (state.startIndex > 0)
        state = {
            ...state,
            ...{
                startIndex: state.startIndex - 1,
                endIndex: state.endIndex - 1
            }
        }
    return state;
}

const _handlePressRightButton = (state) => {
    if (state.endIndex < state.news.length-1)
        state = {
            ...state,
            ...{
                startIndex: state.startIndex + 1,
                endIndex: state.endIndex + 1
            }
        }
    return state;
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case actions.type.SAY_HELLO:
            return {
                ...state,
                ...{
                    sayHello: !state.sayHello
                }
            }

        case actions.type.LOAD_LIST_NEWS:
            return state;

        case actions.type.LOAD_LIST_NEWS_SUCCESS:
            return _handleUpdateListNews(state, action.payload.news);

        case actions.type.CHANGE_LANGUAGE:  
            return {
                ...state,
                ...{
                    language: action.payload.language
                }
            }

        case actions.type.CHANGE_MODE:
            return {
                ...state,
                ...{
                    mode: action.payload.mode
                }
            }

        case actions.type.CHANGE_INPUT_TEXT:
            return {
                ...state,
                ...{
                    text: action.payload.text
                }
            }

        case actions.type.UPDATE_TEXT:
            return {
                ...state,
                ...{
                    text: action.payload.text
                }
            }

        case actions.type.SUMMARIZE_TEXT:
            return {
                ...state,
                ...{
                    lastAction: 0,
                    lastText: action.payload.text,
                    isLoading: true,
                    result: ""
                }
            }

        case actions.type.SUMMARIZE_NEWS:
            return {
                ...state,
                ...{
                    lastAction: 1,
                    lastUrl: action.payload.url,
                    isLoading: true,
                    result: ""
                }
            }

        case actions.type.SUMMARIZE_SUCCESS:
            return {
                ...state,
                ...{
                    result: action.payload.result,
                    isLoading: false
                }
            }

        case actions.type.PRESS_LEFT_BUTTON:
            return _handlePressLeftButton(state);

        case actions.type.PRESS_RIGHT_BUTTON:
            return _handlePressRightButton(state);

        default:
            return state;
    }
}

export default reducer;