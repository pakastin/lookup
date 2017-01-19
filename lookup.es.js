var index = function (items, key, reverse) {
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
};

export default index;
