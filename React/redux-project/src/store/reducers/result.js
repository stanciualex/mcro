import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        return updateObject(state, {results: state.results.concat({
            value: action.result,
            id: new Date()
        })});
    }
    if (action.type === actionTypes.DELETE_RESULT) {
        return deleteResult(state, action);
    }
    return state;
};

export default reducer;