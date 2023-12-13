var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
let helperAdd = function (chocolates, color, count) {
  let i = 0;
  while (i < count) {
    chocolates.unshift(color);
    i++;
  }
};

function addChocolates(chocolates, color, count) {
  return count <= 0
    ? 'Number cannot be zero/negative'
    : helperAdd(chocolates, color, count);
}

//Progression 2: Remove z chocolates from the top the dispenser
let helperRemove = function (chocolates, count) {
  let removedChocolates = [];
  for (let i = 0; i < count; i++) {
    removedChocolates.push(chocolates.shift());
  }
  return removedChocolates;
};
function removeChocolates(chocolates, count) {
  let lengthOfChocolatesStore = chocolates.length;
  return count <= 0
    ? 'Number cannot be zero/negative'
    : lengthOfChocolatesStore < count
    ? 'Insufficient chocolates in the dispenser'
    : helperRemove(chocolates, count);
}
//Progression 3: Dispense z chocolates
let helperDispense = function (chocolates, number) {
  let dispensedChocolates = [];
  for (let i = 0; i < number; i++) {
    dispensedChocolates.push(chocolates.pop());
  }
  return dispensedChocolates;
};

function dispenseChocolates(chocolates, number) {
  let lengthOfChocolatesStore = chocolates.length;
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  } else if (lengthOfChocolatesStore < number) {
    return 'Insufficient chocolates in the dispenser';
  } else {
    return helperDispense(chocolates, number);
  }
}
//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates, number, color) {
  return dispenseChocolates(chocolates, number);
}
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
const helperNoOfChocolates = function (chocolates) {
  const ans = [];
  const referenceChocolates = [
    'green',
    'silver',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink',
  ];
  referenceChocolates.forEach((refChocolate) => {
    let counter = 0;
    chocolates.forEach((chocolate) => {
      if (chocolate == refChocolate) {
        counter += 1;
      }
    });
    counter > 0 ? ans.push(counter) : null;
  });
  return ans;
};
function noOfChocolates(chocolates) {
  return helperNoOfChocolates(chocolates);
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
const helperSortChocolates = function (chocolates) {
  let ans = [];
  let store = {};
  chocolates.sort();

  for (let i = 0; i < chocolates.length; i++) {
    let counter = 0;
    for (let j = 0; j < chocolates.length; j++) {
      if (chocolates[i] == chocolates[j]) {
        counter += 1;
      }
    }

    store[chocolates[i]] = counter;
  }
  const sortable = Object.fromEntries(
    Object.entries(store).sort(([, a], [, b]) => b - a)
  );

  Object.keys(sortable).forEach((key) => {
    for (let i = 0; i < sortable[key]; i++) {
      ans.push(key);
    }
  });

  return ans;
};

function sortChocolateBasedOnCount(chocolates) {
  finalAns = helperSortChocolates(chocolates);
  return finalAns;
}

//Progression 7: Change z chocolates of x color to y color
const helperToChangeChocolateColor = function (
  chocolates,
  number,
  color,
  finalColor
) {
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  return chocolates;
};

function changeChocolateColor(chocolates, number, color, finalColor) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : color == finalColor
    ? "Can't replace the same chocolates"
    : helperToChangeChocolateColor(chocolates, number, color, finalColor);
}
//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  const changedColor = helperToChangeChocolateColor(
    chocolates,
    chocolates.length,
    color,
    finalColor
  );
  counter = 0;
  changedColor.forEach((chocolate) => {
    chocolate == finalColor ? (counter += 1) : (counter += 0);
  });
  return color == finalColor
    ? "Can't replace the same chocolates"
    : [counter, changedColor];
}

//Challenge 1: Remove one chocolate of x color from the top
const removeChocolateOfColor = (chocolates, givenColor) => {
  const position = chocolates.findIndex(
    (chocolate) => chocolate === givenColor
  );
  if (position !== -1) {
    chocolates.splice(position, 1);
  }
  return chocolates;
};
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
const dispenseRainbowChocolates = (chocolates) => {
  const store = chocolates.reduce((acc, chocolate) => {
    acc[chocolate] = (acc[chocolate] || 0) + 1;
    return acc;
  }, {});

  return Object.values(store)
    .map((count) => Math.floor(count / 3))
    .reduce((total, count) => total + count, 0);
};
