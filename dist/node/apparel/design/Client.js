"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../core");

/*  strict */

/**
 */

/**
 *
 */
class Client extends _core.BaseClient {
  /**
   */
  get basepath() {
    return '/apparel/designs';
  }
  /**
   *
   */


  list(size = 10, offset = 0, opt = {}) {
    const condition = { ...opt.condition
    };
    return this.httpClient.get(this.relativePath(), {
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
    return this.httpClient.get(this.relativePath(id));
  }
  /**
   *
   */


  register(entry) {
    return this.httpClient.post(this.relativePath(), entry);
  }
  /**
   *
   */


  update(id, params) {
    return this.httpClient.post(this.relativePath(id), params);
  }
  /**
   *
   */


  archive(id, params = {}) {
    return this.httpClient.post(this.relativePath(id, 'archive'), params);
  }
  /**
   *
   */


  unarchive(id, params = {}) {
    return this.httpClient.post(this.relativePath(id, 'unarchive'), params);
  }
  /**
   * Order sample
   */


  order(id, params) {
    return this.httpClient.post(this.relativePath(id, 'order'), params);
  }
  /**
   *
   */


  productize(id, params = {}) {
    return this.httpClient.post(this.relativePath(id, 'productize'), params);
  }

}

exports.Client = Client;