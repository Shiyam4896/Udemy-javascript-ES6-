function unique(array) {
  return array.reduce(function (acc, element) {
    var existingElement = acc.find(function (target) {
      return target === element;
    });

    if (!existingElement) {
      acc.push(element);
    }

    return acc;
  }, []);
}
