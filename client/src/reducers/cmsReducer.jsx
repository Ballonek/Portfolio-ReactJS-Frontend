import { PAGE_LOADED, PAGE_LOADING } from '../actions/types';

const initialState = {
    isLoading: false,
    body: {
        lang: '',
        nav: {
            menu: [{}],
            social: [{}]
        },
        header: {

        },
        sections: [{
            name: '',
            description: '',
            knowledge: [{}]
        }],
        footer: {

        }
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PAGE_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case PAGE_LOADED:
            return {
                ...state,
                isLoading: false,
                body: {
                    lang: action.payload.lang,
                    nav: action.payload.nav ,
                    header: action.payload.header ,
                    sections: action.payload.sections,
                    footer: action.payload.footer
                }
            }
        default:
            return state;
    }
}