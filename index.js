
export default (items, key, reverse) => {
  const lookup = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const value = item[key];

    if (reverse) {
      lookup[value] || (lookup[value] = []);
      lookup[value].push(item);
    } else {
      lookup[value] = item;
    }
  }

  return lookup;
};
