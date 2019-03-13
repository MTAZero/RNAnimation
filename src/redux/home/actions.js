const type = {
    SAY_HELLO: 'HOME_SAY_HELLO',
    LOAD_LIST_NEWS: 'HOME_LOAD_LIST_NEWS',
    LOAD_LIST_NEWS_SUCCESS: 'HOME_LOAD_SUCCESS',
    CHANGE_LANGUAGE: 'HOME_CHANGE_LANGUAGE',
    CHANGE_MODE: 'HOME_CHANGE_MODE',
    CHANGE_INPUT_TEXT: 'HOME_CHANGE_INPUT_TEXT',
    UPDATE_TEXT: 'UPDATE_TEXT',
    SUMMARIZE_TEXT: 'HOME_SUMMARIZE_TEXT',
    SUMMARIZE_NEWS: 'HOME_SUMMARIZE_NEWS',
    SUMMARIZE_SUCCESS: 'HOME_SUMMARIZE_SUCCESS',
    PRESS_LEFT_BUTTON: 'HOME_PRESS_LEFT_BUTTON',
    PRESS_RIGHT_BUTTON: 'HOME_PRESS_RIGHT_BUTTON'
};

const action = {
    sayHello: () => {
        return {
            type: type.SAY_HELLO,
            payload:{
            }
        }
    },
    loadListNews: () => {
        return {
            type: type.LOAD_LIST_NEWS,
            payload: {
            }
        }
    },
    loadListNewsSuccess: (news) => {
        return {
            type: type.LOAD_LIST_NEWS_SUCCESS,
            payload: {
                news
            }
        }
    },
    changeLanguage: (language) => {
        return {
            type: type.CHANGE_LANGUAGE,
            payload: {
                language
            }
        }
    },
    changeMode: (mode) => {
        return {
            type: type.CHANGE_MODE,
            payload: {
                mode
            }
        }
    },
    changeInputText: (text) => {
        return {
            type: type.CHANGE_INPUT_TEXT,
            payload: {
                text
            }
        }
    },
    updateText: (text) => {
        return {
            type: type.UPDATE_TEXT,
            payload: {
                text
            }
        }
    }
    ,
    summarizeText: (text) => {
        return {
            type: type.SUMMARIZE_TEXT,
            payload: {
                text
            }
        }
    },
    summarizeNews: (url) => {
        return {
            type: type.SUMMARIZE_NEWS,
            payload: {
                url
            }
        }
    },
    summarizeSuccess: (result) => {
        return {
            type: type.SUMMARIZE_SUCCESS,
            payload: {
                result
            }
        }
    },
    pressLeftButton: () => {
        return {
            type: type.PRESS_LEFT_BUTTON,
            payload:{
            }
        }
    },
    pressRightButton: () => {
        return {
            type: type.PRESS_RIGHT_BUTTON,
            payload: {
            }
        }
    }
 }

export default {
    type,
    action
}