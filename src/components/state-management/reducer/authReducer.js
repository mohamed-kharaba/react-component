const authReducer = (state, action) => {
    if (action.type === "LOGIN") return action.username;
    if (action.type === "LOGOUT") return "";
    return state;
};

export default authReducer;
