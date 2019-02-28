(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (global.demo = global.demo || {}, global.demo.js = factory()));
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var _ = {};

  _.type = function (obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
  };

  _.isArray = function isArray(list) {
    return _.type(list) === 'Array';
  };

  _.slice = function slice(arrayLike, index) {
    return Array.prototype.slice.call(arrayLike, index);
  };

  _.truthy = function truthy(value) {
    return !!value;
  };

  _.isString = function isString(list) {
    return _.type(list) === 'String';
  };

  _.each = function each(array, fn) {
    for (var i = 0, len = array.length; i < len; i++) {
      fn(array[i], i);
    }
  };

  _.toArray = function toArray(listLike) {
    if (!listLike) {
      return [];
    }

    var list = [];

    for (var i = 0, len = listLike.length; i < len; i++) {
      list.push(listLike[i]);
    }

    return list;
  };

  _.setAttr = function setAttr(node, key, value) {
    switch (key) {
      case 'style':
        node.style.cssText = value;
        break;

      case 'value':
        var tagName = node.tagName || '';
        tagName = tagName.toLowerCase();

        if (tagName === 'input' || tagName === 'textarea') {
          node.value = value;
        } else {
          node.setAttribute(key, value);
        }

        break;

      default:
        node.setAttribute(key, value);
        break;
    }
  };

  var Test =
  /*#__PURE__*/
  function () {
    function Test(name) {
      _classCallCheck(this, Test);

      this.name = name;

      if (_.isArray(arguments.length <= 1 ? undefined : arguments[1])) {
        console.log('-------测试数组:' + (arguments.length <= 1 ? undefined : arguments[1]));
      }
    }

    _createClass(Test, [{
      key: "print",
      value: function print() {
        // console.log(this.name);
        return this.name;
      }
    }]);

    return Test;
  }();

  var mycode = {
    demo: Test
  };
  window.mycode = mycode;

  return mycode;

}));
