import { PAGE_LOADED, PAGE_LOADING } from './types';

export const loadPage = () => dispatch => {
    dispatch({ type: PAGE_LOADING });



    dispatch({
        type: PAGE_LOADED,
        payload: {
            nav: {},
            header: {},
            sections: [{}],
            footer: {}
        }
    })
}