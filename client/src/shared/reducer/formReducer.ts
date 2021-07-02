const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            return { ...state, [action.id]: action.value };
        default:
            return state;
    }
};

export default reducer;
