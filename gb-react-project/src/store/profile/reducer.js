import { CHANGE_NAME, EXAMPLE_ACTION } from "./actions";

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
        
        case CHANGE_NAME:
            return {
                ...state,
                name:action.payload
                
            }    
        default:
            return state;
    }

}
export default profileReducer;