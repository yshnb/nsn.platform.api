"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../core");

/**
 */

/**
 *
 */
class Client extends _core.BaseClient {
  /**
   *
   */
  list(size = 10, offset = 0, opt = {}) {
    const condition = { ...opt.condition
    };
    return this.httpClient.get('/apparel/designs', {
      params: {
        size,
        offset,
        ...condition
      }
    });
  }
  /**
   *
   */


  describe(id) {
    return this.httpClient.get(`/apparel/designs/${id}`);
  }
  /**
   *
   */


  register(entry) {
    return this.httpClient.post('/apparel/designs', entry);
  }
  /**
   *
   */


  update(id, params) {
    return this.httpClient.post(`/apparel/designs/${id}`, params);
  }
  /**
   *
   */


  archive(id, params = {}) {
    return this.httpClient.post(`/apparel/designs/${id}/archive`, params);
  }
  /**
   *
   */


  unarchive(id, params = {}) {
    return this.httpClient.post(`/apparel/designs/${id}/unarchive`, params);
  }
  /**
   * Order sample
   */


  order(id, params) {
    return this.httpClient.post(`/apparel/designs/${id}/order`, params);
  }
  /**
   *
   */


  productize(id, params = {}) {
    return this.httpClient.post(`/apparel/designs/${id}/productize`, params);
  }

}

exports.Client = Client;