function findWhere(array, criteria) {
  return array.find(function (element) {
    var property = Object.keys(criteria)[0];

    return element[property] === criteria[property];
  });
}
