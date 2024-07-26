// Activty 1
// Task 1
class Person {
  constructor(firstName, lastName, name, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Salut, mon nom est ${this.name} et je suis ${this.age} ans`;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated Age: ${this.age}`);
  }
  static staticGreeting() {
    return `Yo! I'm a person!`
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const victor = new Person("Vincent", 23)
console.log(victor.greet());

victor.updateAge(37)

// Activty 2
class Student extends Person {
    static studentCount = 0
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId
        Student.studentCount++
    }
    getStudentId() {
        return this.studentId
    }
    greet() {
        return `Salut, mon nom est ${this.name},je suis ${this.age} ans et mon etudiant ID est ${this.studentId}`;
    }
}
const sakura = new Student("Sakura", 18, "qw345r44")
console.log(`Stduent ID: ${sakura.getStudentId()}`);

console.log(sakura.greet());

// Activity 3
console.log(Person.staticGreeting())

const student1 = new Student("Ram", 20, "45");
const student2 = new Student("Shaym", 22, "46");
const student3 = new Student("BabuRao", 21, "47");

console.log("Total number of students:", Student.studentCount);

// Activty 4
const person = new Person('John', 'Doe', 30);
console.log(person.fullName); // John Doe

person.fullName = 'Jane Smith';
console.log(person.fullName); // Jane Smith

// Activity 5
class Account {
    #balance = 0;
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log('Insufficient funds or invalid amount');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // Task 10: Testing Account class
  const account = new Account();
  account.deposit(1000);
  account.withdraw(500);
  account.withdraw(700); // Should fail
  console.log(`Final balance: ${account.getBalance()}`);