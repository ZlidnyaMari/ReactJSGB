import { API_URL_PUBLIC } from "../../constant/constant";

export const GET_GISTS = 'GET_GISTS';
export const GET_GISTS_REQUEST = 'GET_GISTS_REQUEST';
export const GET_GISTS_FAILURE = 'GET_GISTS_FAILURE';
export const GET_GISTS_SUCCESS = 'GET_GISTS_SUCCESS';

export const getGists = () => ({
    type: GET_GISTS
});

export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST
});

export const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err
});

export const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
});

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const res = await fetch(API_URL_PUBLIC);

        if(!res.ok) {
            throw new Error('error');
        }

        const result = await res.json();
        dispatch(getGistsSuccess(result));

    } catch(err) {
        dispatch(getGistsFailure(err.message))
    }
};






