import { TEST_CONST_1 } from "../constants/testConstants"


export const action1 = (data) => async (dispatch) => {
    try {
        dispatch({
            type: TEST_CONST_1
        })
        localStorage.setItem("test1", data)
    } catch(err) {
        dispatch({type: TEST_ERR, payload: err.response && err.response.data.message ? err.response.data.message : err.message})
    }
}