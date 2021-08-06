let result = [];

const insertItem = (item) => {
  // insert item into result
  result.push(item);
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result

  // result might not contain item
  // the function does not have an effect in this case
  let index = result.indexOf(item);

  if (index > -1) {
    result.splice(index, 1);
  }

  return '';
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item
  let found = null;

  if (index > -1) {
    if (index < result.length) {
      found = result[index];

      result.splice(index, 1);
    }
  }

  return found;
};

const printItems = function () {
  // return a string of the concatenated item in result, separated by commas
  return result.join(', ');
};

// insertItem(1);
// insertItem(2);
// insertItem(3);
// insertItem(2);
// insertItem(1);
// console.log(printItems());
// // expected: '1, 2, 3, 2, 1'
// console.log(lookupItem(1));
// // expected: 2
// console.log(printItems());
// // expected: '1, 3, 2, 1'

// deleteItem(1);
// console.log(printItems());
// // expected: '3, 2, 1'
// console.log(lookupItem(2));
// // expected: 1
// console.log(printItems());
// // expected: '3, 2'

// deleteItem(-1);
// console.log(lookupItem(-1));
// // expected: null

insertItem(100);
insertItem(21);
insertItem(3);
insertItem(426);
insertItem(67);
insertItem(17.25);
console.log(printItems());
// 100, 21, 3, 426, 67, 17.25
console.log(lookupItem(1));
// 21
console.log(printItems());
// 100, 3, 426, 67, 17.25

deleteItem(100);
console.log(printItems());
// 3, 426, 67, 17.25
console.log(lookupItem(2));
// 67
console.log(printItems());
// 3, 426, 17.25

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
