(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.lookup = factory());
}(this, function () { 'use strict';

  function index (items, key, reverse) {
    var lookup = {};

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var value = item[key];

      if (reverse) {
        lookup[value] || (lookup[value] = []);
        lookup[value].push(item);
      } else {
        lookup[value] = item;
      }
    }

    return lookup;
  }

  return index;

}));