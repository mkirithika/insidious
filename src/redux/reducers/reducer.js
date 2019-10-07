const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_DETAIL':
            return { ...state, userLoginDetails: action.userLoginDetails }
        default:
            return state;
    }
}

export default reducer;