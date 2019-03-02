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
   */
  describe(key) {
    return this.httpClient.get(`/categories/${key}`);
  }

}

exports.Client = Client;