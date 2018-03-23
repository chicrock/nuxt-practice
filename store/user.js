export const state = () => ({
    token: {
        access_token: null,
        refresh_token: null,
    },
});

export const mutations = {
    set_token(state, payload) {
        state.token = {
            access_token: payload.access_token,
            refresh_token: payload.refresh_token,
        };
    },
    remove_token(state) {
        state.token = {
            access_token: null,
            refresh_token: null,
        };
    },
};

export const getters = {
    isLogin: function(state) {
        return state.token.access_token && state.token.refresh_token ? true : false;
    },
};

export const actions = {
    doLogin: function(state, payload) {
        if (!payload.login || !payload.password) {
            return false;
        }

        let access_token = 'asdfasdfasdf';
        let refresh_token = 'zxcvzxvzxcv';

        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);

        state.commit('set_token', { access_token, refresh_token });
    },
    doLogout: function(state) {
        localStorage.removeItem('token');

        state.remove_token();
    },
};
