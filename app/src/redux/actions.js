import {
    GET_ARTICLE
} from "./actionTypes";

export const getArticle = (id) => ({
    type: GET_ARTICLE,
    payload: {
        content: {
            id: id
        }
    }
});
