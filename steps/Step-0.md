# Step 0 - ES6 Features

Javascript has many unique features, and before we start building our Pokedex, we will go over some common Javascript feautures used in our application.

## 🥇 Goal

The goal of this step is to practice some commonly used Javascript features that we will be using in the Pokedex app.

## 🎬 Concepts

- Understanding how some Javascript features work

## 📚 Tasks

### Template Strings

This is just a way to combine variables and strings together. For more information take a look at [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

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

### Ternary if statements

This is just a fancy word to make if statements more concise. [More info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

Old Way:

```javascript
var myBool = true;

if (mybool) {
  console.log('Hello');
} else {
  console.log('Bye');
}
```

New Way:

```javascript
let myBool = true;

myBool ? console.log('Hello') : console.log('Bye');
```


### Arrow Functions

This is just a new way to write functions very quickly. You can look more into this feature by looking at [this](https://www.w3schools.com/js/js_arrow_function.asp)

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

[Array and object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

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

## 👉🏾 Next Step

Go to [Step 1 - JSX](https://github.com/wongband/react-pokedex-workshop/blob/master/steps/Step-1.md)
