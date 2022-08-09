const flatten = (arr: any[]): any[] => {
  let result: any[] = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });

  return result;
};

export default flatten;
