"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../core");

/**
 *
 */
class Client extends _core.BaseClient {
  /**
   * List brand entries
   */
  list(size = 10, offset = 0) {
    return this.httpClient.get('/brands', {
      params: {
        size,
        offset
      }
    });
  }
  /**
   * Describe the brand entry
   */


  describe(key) {
    return this.httpClient.get(`/brands/${key}`);
  }
  /**
   * List designers of the brand
   */


  listDesigners(key) {
    return this.httpClient.get(`brands/${key}/teams/designer/members`);
  }

}

exports.Client = Client;