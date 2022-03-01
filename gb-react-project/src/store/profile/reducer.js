import { EXAMPLE_ACTION } from "./actions";

const initionalState = {
    showName: false,
    name: 'Mari',

};

const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state;
    }

}
export default profileReducer;