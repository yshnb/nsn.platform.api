"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = exports.product = exports.material = exports.group = exports.core = exports.color = exports.category = exports.brand = exports.apparel = void 0;

var apparel = _interopRequireWildcard(require("./apparel"));

exports.apparel = apparel;

var brand = _interopRequireWildcard(require("./brand"));

exports.brand = brand;

var category = _interopRequireWildcard(require("./category"));

exports.category = category;

var color = _interopRequireWildcard(require("./color"));

exports.color = color;

var core = _interopRequireWildcard(require("./core"));

exports.core = core;

var group = _interopRequireWildcard(require("./group"));

exports.group = group;

var material = _interopRequireWildcard(require("./material"));

exports.material = material;

var product = _interopRequireWildcard(require("./product"));

exports.product = product;

var provider = _interopRequireWildcard(require("./provider"));

exports.provider = provider;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }