
export const EXAMPLE_ACTION = 'EXAMLE_ACTION';
export const CHANGE_NAME = 'CHANGE_NAME';

export const exampleAction = {
    type: EXAMPLE_ACTION
};

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value

});