// задание 1
function pickPropArray(arr, prop) {
    return arr.filter(obj => obj.hasOwnProperty(prop)).map(obj => obj[prop]);
}
  
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];
  
const result = pickPropArray(students, 'age');
console.log(result); // вывод [ 20, 20, 20, 20, 20, 40 ]
  
  
  // задание 2
function createCounter() {
    let count = 0;
    
    return function () {
      count++;
      console.log(count);
    };
}
  
const counter1 = createCounter();
counter1();
counter1();
// вывод 1 2

const counter2 = createCounter();
counter2();
counter2();
counter2();
// вывод 1 2 3
  

// задание 3
function spinWords(str) {
    return str.split(' ').map(word => {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        }
        return word;
        }).join(' ');
    }
    
const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL

const result2 = spinWords("This is a test");
console.log(result2); // This is a test
  

// задание 4
function findSumPairIndices(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
        return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
    }
    
const nums = [2, 7, 11, 15];
const target = 13;
console.log(findSumPairIndices(nums, target)); // вывод [0, 2]


// задание 5
// вариант1: ищет макисмальное общее окончание
function CommonEnding(strs) {
    if (strs.length === 0) return "";
    
    for (let len = Math.min(...strs.map(s => s.length)); len >= 2; len--) {
        const ending = strs[0].slice(-len);
        if (strs.every(s => s.endsWith(ending))) {
            return ending;
        }
    }
    return "";
}

// вариант2: ищет макисмальную общую подстроку
function CommonSubstring(strs) {
    if (strs.length === 0) return "";
    
    const first = strs[0];
    let longest = "";
    
    for (let i = 0; i < first.length; i++) {
        for (let j = i + 2; j <= first.length; j++) {
            const substr = first.substring(i, j);
            if (substr.length > longest.length && 
                strs.every(s => s.includes(substr))) {
                longest = substr;
            }
        }
    }
    
    return longest;
}

console.log(CommonEnding(["цветок","поток","хлопок"])); // вывод "ок"
console.log(CommonSubstring(["цветок","поток","хлопок"])); // вывод "ок"

console.log(CommonEnding(["собака","гоночная машина","машина"])); // вывод ""
console.log(CommonSubstring(["собака","гоночная машина","машина"])); // вывод ""