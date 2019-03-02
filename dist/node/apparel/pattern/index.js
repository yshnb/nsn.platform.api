"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../../core");

/**
 */
class Client extends _core.BaseClient {
  list(size = 10, offset = 0) {
    return this.httpClient.get('/apparel/patterns', {
      params: {
        size,
        offset
      }
    });
  }

}

exports.Client = Client;