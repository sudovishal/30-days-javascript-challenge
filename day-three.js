// Activity 1
num = -8
if (num > 0) {
    console.log("Positive")
} else if (num < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

age = 45
if (age >= 18){
    console.log(`You are eligible to vote`);
} else {
    console.log("You are a child, Not eligible to vote")
}

// Activity 2
num1 = 23
num2 = 10
num3 = 8
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater than ${num1} and ${num3}`);
} else {
    console.log(`${num3} is greater than ${num1} and ${num2}`);
}

// Activity 3
// Determine the day of the week based on a number (1-7)
dayNum = 4

switch (dayNum) {
    case 1:
        console.log("Monday"); 
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Day Number");
}

// Assign a grade based on a score
score = 88

switch (true) {
    case (score >= 90 && score <= 100):
        console.log('A');
        break;
    case (score >= 80 && score < 90):
        console.log('B');
        break;
    case (score >= 70 && score < 80):
        console.log('C');
        break;
    case (score >= 60 && score < 70):
        console.log('D');
        break;
    case (score >= 0 && score < 60):
        console.log('F');
        break;

    default:
        console.log("Invalid Score");
}

// Activity 4
number = 456
const result = (number % 2 === 0) ? "Even" : "Odd";
    console.log(result);

// Activity 5
year = 2040
isLeapYearOrNot = (year % 4 === 0)
isLeapYearOrNot = isLeapYear &&  (year % 100 != 0 || year % 400 == 0);

if (isLeapYear) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
// Feature Request 1
function numberCheck(num) {
    if (num > 0) {
        console.log("Positive")
    } else if (num < 0) {
        console.log("Negative")
    } else {
        console.log("Zero")
    }
}

// Feature Request 2
function voteEligibility(age){
    if (age >= 18){
        console.log(`You are eligible to vote`);
    } else {
        console.log("You are a child, Not eligible to vote")
    }
}

// Feature Request 3
function dayOfTheWeek(dayNum) {
    let dayName;

    switch(dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }

    console.log(dayName);
}

// Feature Request 4
function getGrade(score) {
    let grade;

    switch(true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }

    console.log(grade);
}

// Feature Request 5
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Year is divisible by 400, it's a leap year
            } else {
                return false; // Year is divisible by 100 but not by 400, it's not a leap year
            }
        } else {
            return true; // Year is divisible by 4 but not by 100, it's a leap year
        }
    } else {
        return false; // Year is not divisible by 4, it's not a leap year
    }
}