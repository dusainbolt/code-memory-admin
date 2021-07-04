export const loginActionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
};

export const loginActions = {
    login: (payload) => ({
        type: loginActionTypes.LOGIN_REQUEST,
        payload
    }),
};
