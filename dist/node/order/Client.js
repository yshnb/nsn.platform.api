"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../core");

/*  strict */

/**
 *
 * @class
 */
class Client extends _core.BaseClient {
  /**
   * List entries
   */
  list(size = 10, offset = 0) {
    return this.httpClient.get('/orders', {
      params: {
        size,
        offset
      }
    });
  }
  /**
   * Describe entry
   */


  describe(id) {
    return this.httpClient.get(`/orders/${id}`);
  }
  /**
   */


  register(params) {
    return this.httpClient.post('/orders', params);
  }
  /**
   */


  approve(id, params = {}) {
    return this.httpClient.post(`/orders/${id}/approve`, params);
  }
  /**
   */


  reject(id, params = {}) {
    return this.httpClient.post(`/orders/${id}/reject`, params);
  }

}

exports.Client = Client;