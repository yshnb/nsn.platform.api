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
   */
  list() {
    return this.httpClient.get('/colors');
  }

}

exports.Client = Client;