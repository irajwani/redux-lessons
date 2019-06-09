const initialState = {
    a: 1,
    b: 1,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_A":
            return {
                ...state,
                a: state.a + 2
            }
            break;
        case "UPDATE_B":
            return {
                ...state,
                b: action.a + state.b
            }
            break;
        default:
            break;
    }
    return state
}

export default reducer