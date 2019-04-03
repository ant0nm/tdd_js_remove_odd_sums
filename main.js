function removeOddSum(list, key1, key2) {
  // const evenSums = [];
  // list.forEach((item) => {
  //   const sum = item[key1] + item[key2];
  //   if (sum % 2 === 0) {
  //     evenSums.push(item);
  //   }
  // });
  // return evenSums;
  return list.filter(item => (item[key1] + item[key2]) % 2 === 0);
}

module.exports = removeOddSum;
