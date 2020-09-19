# Step 0 - ES6 Features

Javascript has many unique features, and before we start building our Pokedex, we will go over some common Javascript feautures used in our application.

## 🥇 Goal

- Practice some commonly used Javascript features

## 🎬 Concepts

- Understanding how some Javascript features work

## 📚 Tasks

### Template Strings

This is just a way to combine variables and strings together.

Old Way:

```javascript
var first = 'Bryan';
var name = 'Hi, my name is ' + first + ' ' + '.';
```

New Way:

We can use `${NAME}` inside the string instead

```javascript
var first = 'Bryan';
var name = 'Hi, my name is ${first} .';
```

### Arrow Functions

This is just a new way to write functions very quickly without worrying about any uneccessary mutations.

Old Way:

```javascript
function sayHello() {
  console.log('hello');
}
```

New Way:

```javascript
const sayHello = () => {
  console.log('hello');
};
```

### Array and Object destructuring

Old Way:

```javascript
function returnNums() {
  return [1, 2];
}

const nums = returnNums();
const num1 = nums[0];
const nums2 = nums[1];

console.log(nums[0], nums[1]);
```

```javascript
const nums = {
  firstValue: 1,
  secondValue: 2
};

const firstValue = nums['firstValue'];
const secondValue = nums['secondValue'];
console.log(firstValue, secondValue);
```

New Way:

```javascript
const returnNums = () => {
  return [1, 2];
};

const [num1, num2] = returnNums();
console.log(num1, num2);
```

```javascript
const nums = {
  firstValue: 1,
  secondValue: 2
};

const { firstValue, secondValue } = nums;
console.log(firstValue, secondValue);
```
