import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:80/';

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: {
  },
  actions: {
    async signIn(_, credentials) {
      if (credentials.login && credentials.password) {
        const formCredentials = credentials;
        if (formCredentials.login.includes('@')) {
          formCredentials.email = formCredentials.login;
          delete formCredentials.login;
        }
        try {
          const response = await axios.post('http://localhost:80/auth/', formCredentials);
          return response.data;
        } catch (e) {
          return e;
        }
      } else {
        const error = 'No login or password provided';
        return error;
      }
    },
    async signUp(_, credentials) {
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
    async verifyToken(_, token) {
      if (token) {
        try {
          const headers = {
            'Content-Type': 'application/json',
            Authorization: token,
          };
          /* eslint-disable-next-line */
          const response = await axios.post('http://localhost:80/auth/verify', { token: token }, { headers: headers });
          return response.data;
        } catch (e) {
          return e;
        }
      } else {
        const error = 'Token Not Valid';
        return error;
      }
    },
  },
};
