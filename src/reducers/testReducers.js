import { TEST_CONST_1, TEST_CONST_2, TEST_ERR } from "../constants/testConstants";


export const testReducer1 = (state = {}, action) => {
    switch(action.type) {
        case TEST_CONST_1:
            return { ...state }
        case TEST_CONST_2:
            return { ...state }
        case TEST_ERR:
            return { ...state }
        default:
            return state
    }
}