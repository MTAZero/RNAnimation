const type = {
    LOAD_LIST_NEWS: 'HOME_LOAD_LIST_NEWS',
    LOAD_LIST_NEWS_SUCCESS: 'HOME_LOAD_SUCCESS',
};

const action = {
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
    }
 }

export default {
    type,
    action
}