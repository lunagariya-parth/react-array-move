
# react-array-move

> This package have methods to manipulate array elements for changing its position.



## Installation

>Install my-project with npm

```bash
  npm install react-array-move
  ```
    
## Documentation

> arrayMoveImmutable(array, pos1, pos2)
This method makes a copy of provided array and than changes the positions of array element form `array[pos1] <->array[pos2]`. Basically swap elements and return new modified array `immumutable array`.

> arrayMoveImmutable(array, pos1, pos2)
This will modifies given array `mutable array`.

## array
Type: `Array`

## pos1
Type: `number`

The index of item to move.
If negative, it will begin that many elements from the end.

## pos2
Type: `number`

The index of where to move the item.
If negative, it will begin that many elements from the end.


## Usage/Examples
```javascript
import {arrayMoveImmutable} from 'react-array-move';

const nums = [1, 2, 3];

const num1 = arrayMoveImmutable(nums, 1, 2);
console.log(num1);
//=> [1 ,3 ,2]

const num2 = arrayMoveImmutable(nums, -1, 0);
console.log(num2);
//=> [3 ,1 ,2]

const num3 = arrayMoveImmutable(nums, -2, -3);
console.log(num3);
//=> ['2 ,1 ,3]


```
## Badges



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

