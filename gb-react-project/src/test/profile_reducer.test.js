
import { EXAMPLE_ACTION, CHANGE_NAME } from '../store/profile/actions';
import profileReducer, { initionalState } from '../store/profile/reducer';

describe('test profile reducer', () => {
    it('EXAMPLE_ACTION', () => {

        const action = {
            type: EXAMPLE_ACTION,
        }
        expect(profileReducer(initionalState, action)).toEqual({
            ...initionalState,
            name: 'Mari',
            showName: true,

        })
    })

    it ('CHANGE_NAME', () => {

        const action = {
            type: CHANGE_NAME,
            payload: [1,2,3]
        }
        expect(profileReducer(initionalState, action)).toEqual({
            ...initionalState,
            showName: false,
            name: action.payload,
        })
    })
}) 
