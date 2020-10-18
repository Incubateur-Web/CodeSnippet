
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

const paramConverter = require('jquery-param');

const BASE_URL = process.env.VUE_APP_API_BASE_URL;

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: false,
  params: {}, // In need if you want to add new params.
});

const addParam = ({ ...rest } = {}) => {
  const result = {
    ...rest,
  };
  return result;
};

export default {
  async getData(action, query = {}, requestParams = {}) {
    let urlToCall = action;
    if (!isEmpty(query)) {
      urlToCall += `?${paramConverter(query)}`;
    }
    const result = await httpClient.get(urlToCall, addParam(requestParams));
    return result;
  },

  async postData(action, data, requestParams = {}) {
    const results = await httpClient.post(action, data, addParam(requestParams));
    return results;
  },

  async putData(action, data) {
    const results = await httpClient.put(action, data);
    return results;
  },

  async deleteData(action) {
    const results = await httpClient.delete(action);
    return results;
  },

  async uploadloadFiles(action, data, requestParams = {}) {
    const results = await httpClient.post(
      action,
      data,
      addParam({
        ...requestParams,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    );
    return results;
  },
};

console.log('tot');
