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
          console.log('we got user');
          console.log(response.data.user);
        } catch (e) {
          console.log('wrong pass loser');
        }
      }
    },
  },
};
