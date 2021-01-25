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
      localStorage.setItem('token', state.token);
      localStorage.setItem('username', state.username);
      localStorage.setItem('logged', true);
    },
    signOut(state) {
      state.logged = false;
      state.username = 'logedout';
      state.token = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('logged');
    },
  },
  actions: {
    // ANCHOR Fonction de connexion
    async signIn(context, credentials) {
      let result = ''; // Message renvoyé au front, qui sera affiché si c'est une erreur
      // Si on récupère bien un login et un mot de passe
      if (credentials.login && credentials.password) {
        const formCredentials = credentials;
        if (formCredentials.login.includes('@')) { // Si le login utilisé est un fait un email
          formCredentials.email = formCredentials.login; // on le réatribue
          delete formCredentials.login;
        }
        try {
          // On check sur l'api si les infos correspondent
          const response = await axios.post('http://localhost:80/auth/', formCredentials);
          // Si on recoit bien un token, alors les infos correspondent
          if (response.data) {
            console.log('test');
            await axios.post('http://localhost:80/auth/refresh', formCredentials).then((tokensList) => {
              const tokens = tokensList.data;
              // On update le state
              context.commit({
                type: 'sign',
                username: response.data.username,
                token: tokens.access_token,
              });
              // On renvoit un résultat positif
              result = { isSigned: true, token: tokens.access_token };
              return result;
            }).catch(() => {
              // Si aucun token n'est renvoyé, alors on force le sign out (au cas où)
              result = { isSigned: false, error: 'No token generated' };
              context.commit('signOut');
            });
          } else {
            // Si pas de data, alors on force le sign out (au cas où)
            result = { isSigned: false, error: 'Can\'t authenticate as this user' };
            context.commit('signOut');
            return result;
          }
        } catch (e) {
          // Si l'api renvoie une erreur
          let errorList = e;
          if (e.response && e.response.data) errorList = e.response.data.errors;
          result = { isSigned: false, error: errorList };
          context.commit('signOut');
          return result;
        }
      // Si il mange le login ou le password
      } else {
        result = { isSigned: false, error: 'No login or password provided' };
        context.commit('signOut');
        return result;
      }
      return result;
    },
    // ANCHOR Fonction d'inscription
    async signUp(context, credentials) {
      let result = ''; // Message renvoyé au front, qui sera affiché si c'est une erreur
      if (credentials.login && credentials.email && credentials.password) {
        const formCredentials = credentials;
        try {
          const response = await axios.post('http://localhost:80/users/', formCredentials);
          if (response.data) return response.data;
        } catch (e) {
          console.log(e.response);
          result = { isSigned: false, error: e.response.data };
        }
      } else {
        result = { isSigned: false, error: 'No login, email or password provided' };
      }
      return result;
    },
    // ANCHOR Fonction de vérification du token
    async verifyToken(context, token) {
      let result = '';
      if (context.state.token) {
        try {
          const headers = {
            'Content-Type': 'application/json',
            Authorization: token,
          };
          /* eslint-disable-next-line */
          const response = await axios.post('http://localhost:80/auth/verify', { token: token }, { headers: headers });
          if (response.data.verified) {
            result = { isSigned: true };
          } else {
            result = { isSigned: false, error: 'Token is not valid' };
            // ANCHOR Regénérer un token via refresh
            context.commit('signOut');
          }
        } catch (e) {
          result = { isSigned: false, error: e };
          context.commit('signOut');
        }
      } else {
        result = { isSigned: false, error: 'No Token provided' };
        context.commit('signOut');
      }
      return result;
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
