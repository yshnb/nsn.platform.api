"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apparel = exports.provider = exports.material = exports.group = exports.color = exports.category = exports.brand = exports.util = void 0;

var util = _interopRequireWildcard(require("./core"));

exports.util = util;

var brand = _interopRequireWildcard(require("./brand"));

exports.brand = brand;

var category = _interopRequireWildcard(require("./category"));

exports.category = category;

var color = _interopRequireWildcard(require("./color"));

exports.color = color;

var group = _interopRequireWildcard(require("./group"));

exports.group = group;

var material = _interopRequireWildcard(require("./material"));

exports.material = material;

var provider = _interopRequireWildcard(require("./provider"));

exports.provider = provider;

var apparel = _interopRequireWildcard(require("./apparel"));

exports.apparel = apparel;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }