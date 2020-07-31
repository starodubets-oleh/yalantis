import { GET_DATA } from '../actions/action'

const reducer = (state = {}, { type, payload }) => {
    switch (type) {
        case GET_DATA: {
            return {
                ...state,
                data: payload
            }
        }
        default:
            return state
    }
}

export default reducer;