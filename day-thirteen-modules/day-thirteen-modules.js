import { addNums } from "./addNums.js";
import { Person } from "./person.js";
import greetingbitch from './functionDefault.js';
import { add, subtract, multiply } from './mathFunctions.js';
import * as activity3 from "./constAndFuncs.js"
import reverseString from "./constAndFuncs.js";
import axios from "axios";

import _ from 'lodash';
// Activity 1
// Task 1
const result = addNums(12,5);
console.log(result)
// Task 2
const { name, age, city } = Person
console.log(name, age, city)

// Activity 2
// Task 3
console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(2, 6));

// Task 4
console.log(greetingbitch("Emilie"));

// Activty 3
// Task 5
console.log(activity3.calculateCircleArea(2))
console.log(`The imported Constants are [${activity3.DAYS_OF_WEEK}], ${activity3.GRAVITY}, ${activity3.PI}`);
console.log(activity3.capitalizeString("ubuntu"));
console.log(activity3.generateRandomNumber(1,13));
console.log(reverseString("racecar"));

// Activity 4
// Task 6
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(_.uniq(array))
// Task 7
axios.get("https://api.freeapi.app/api/v1/public/randomusers/1")
.then(response => console.log(response.data))
.catch(error => console.error(error))

axios.post("https://api.freeapi.app/api/v1/todos/", {
    "description" : "To solve 13th Day Challenge",
    "title" : "Day Thirteen JS Challenege"
})
.then(response => console.log(response.data))
.catch(err => console.error(err))

;(async () => {
    try {
        const response = await axios.post("https://api.freeapi.app/api/v1/todos/", {
            "description" : "To solve Leetcode Merged Linkedlist",
            "title" : "leetcode problem"
        })
        console.log(response.data);
    } catch (error) {
        console.error(`Errror: ${error}`);
    }
})();