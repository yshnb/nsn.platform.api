"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseClient = exports.AuthenticationError = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticationError extends Error {
  constructor(error) {
    super(`Authentication Fault: ${error.code ? error.code : ''} : ${error.message} : ${error.request._header}`);
    this.error = error;
    this.request = error.request;
    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(this.message).stack;
    }
  }

  get errorCode() {
    return this.error.code ? this.error.code : '';
  }

}
/**
 */


exports.AuthenticationError = AuthenticationError;

class BaseClient {
  /**
   */
  constructor(params = {}) {
    if (params.httpClient && params.httpClient instanceof _axios.default) {
      this.httpClient = params.httpClient;
    } else {
      this.httpClient = _axios.default.create(params.httpClient);
    }

    this.httpClient.interceptors.response.use(response => response, error => {
      // eslint-disable-next-line no-console
      console.log(`ERROR: (res = ${JSON.stringify(error.response)}, status = ${error.response ? error.response.status : ''} )`); // eslint-disable-next-line no-console

      console.log(`ERROR: ${JSON.stringify(error.message)}`);

      if (error.response && 401 == error.response.status) {
        return Promise.reject(new AuthenticationError(error));
      } else {
        return Promise.reject(error);
      }
    });
  }

}

exports.BaseClient = BaseClient;