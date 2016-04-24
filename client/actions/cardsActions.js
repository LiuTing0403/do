import { CALL_API } from '../middlewares/api';
import { CARD } from '../schemas';
import * as types from '../constants/actionTypes';

export function createCard(listId, text) {
    return {
        [CALL_API]: {
            types: [
                types.CARDS_CREATE_REQUEST,
                types.CARDS_CREATE_SUCCESS,
                types.CARDS_CREATE_ERROR
            ],
            endpoint: `/api/lists/${listId}/cards`,
            schema: CARD,
            request: {
                method: 'post',
                body: {
                    text
                }
            }
        }
    };
};

export function removeCard(id) {
    return {
        [CALL_API]: {
            types: [
                types.CARDS_REMOVE_REQUEST,
                types.CARDS_REMOVE_SUCCESS,
                types.CARDS_REMOVE_ERROR
            ],
            endpoint: `/api/cards/${id}`,
            request: {
                method: 'delete'
            }
        }
    };
};

export function updateCard(id, props) {
    return {
        [CALL_API]: {
            types: [
                types.CARDS_UPDATE_REQUEST,
                types.CARDS_UPDATE_SUCCESS,
                types.CARDS_UPDATE_ERROR
            ],
            endpoint: `/api/cards/${id}`,
            schema: CARD,
            request: {
                method: 'put',
                body: props
            }
        }
    };
};