import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:80/';

export default {
  namespaced: true,
  state: {
    logged: false,
    token: '',
    username: '',
  },
  mutations: {
    sign(state, data) {
      state.logged = true;
      state.username = data.username;
      state.token = data.token;
      console.log(data.token);
      localStorage.setItem('token', state.token);
      localStorage.setItem('username', state.username);
      localStorage.setItem('logged', true);
      console.log(state);
    },
    signOut(state) {
      state.logged = false;
      state.username = '';
      state.token = '';
      localStorage.setItem('token', state.token);
      localStorage.setItem('username', state.username);
      localStorage.setItem('logged', false);
    },
  },
  actions: {
    async signIn(context, credentials) {
      let result = '';
      if (credentials.login && credentials.password) {
        const formCredentials = credentials;
        if (formCredentials.login.includes('@')) {
          formCredentials.email = formCredentials.login;
          delete formCredentials.login;
        }
        try {
          const response = await axios.post('http://localhost:80/auth/', formCredentials);
          if (response.data && response.data.token) {
            context.commit({
              type: 'sign',
              username: response.data.username,
              token: response.data.token,
            });
            result = { isSigned: true };
            return result;
          }
          result = { isSigned: false, error: 'No token generated' };
          context.commit('signOut');
          return result;
        } catch (e) {
          result = { isSigned: false, error: e };
          context.commit('signOut');
          return result;
        }
      } else {
        result = { isSigned: false, error: 'No login or password provided' };
        context.commit('signOut');
        return result;
      }
    },
    async signUp(context, credentials) {
      if (credentials.login && credentials.email && credentials.password) {
        const formCredentials = credentials;
        try {
          const response = await axios.post('http://localhost:80/users/', formCredentials);
          return response.data;
        } catch (e) {
          return e;
        }
      } else {
        const error = 'No login, email or password provided';
        return error;
      }
    },
    async verifyToken(context, token) {
      let result = '';
      console.log(context.state);
      if (token) {
        console.log(token);
        try {
          const headers = {
            'Content-Type': 'application/json',
            Authorization: token,
          };
          /* eslint-disable-next-line */
          const response = await axios.post('http://localhost:80/auth/verify', { token: token }, { headers: headers });
          console.log(response);
          if (response.data) {
            context.commit({
              type: 'sign',
              token: response.data.token,
            });
            result = { isSigned: true };
            return result;
          }
          result = { isSigned: false, error: 'Token Not Valid' };
          context.commit('signOut');
          return result;
        } catch (e) {
          result = { isSigned: false, error: e };
          context.commit('signOut');
          return result;
        }
      } else {
        result = { isSigned: false, error: 'No Token provided' };
        context.commit('signOut');
        return result;
      }
    },
    signOut(context) {
      let result = '';
      try {
        context.commit('signOut');
        result = { isSigned: false };
        return result;
      } catch (e) {
        result = { isSigned: true, error: 'Can\'t log out for some reason' };
        return result;
      }
    },
  },
};
