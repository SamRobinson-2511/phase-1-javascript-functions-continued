// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`

}

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}




//FUNCTION-LEVEL SCOPE AND SCOPE CHAIN
// function outer(greeting, msg = "It's a fine day to learn") {
//     // 2
//     const innerFunction = function (name, lang = "Python") {
//       // 3
//       return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     };
//     return innerFunction("student", "JavaScript"); // 5
//   }
  
//   outer("Hello"); // 1
//   //=> "Hello, student! It's a fine day to learn JavaScript"

// function outer(greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
//   }
// outer("Hello")("student", "JavaScript");
// //=> "Hello, student! It's a fine day to learn JavaScript"

// const storedFunction = outer("Hello");
// storedFunction("student", "JavaScript");
// //=> "Hello, student! It's a fine day to learn JavaScript"

// function wrapAdjective(adj = '*'){
//     const inner = function (x = 'special'){
//         return `Your are ${adj}${x}${adj}`;
//     }
//     return inner;
// }

// wrapAdjective('%')('a dedicated programmer');

// function outer(greeting, msg = 'It\'s a fine day to learn'){
//     const innerFunction = function (name, lang = 'Python'){
//         return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction('student', 'JavaScript');
// }

// outer('Hello');

// function outer(greeting, msg = 'It\'s a fine day to learn'){
//     const innerFunction = function(name, lang = 'Python'){
//         return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
// }

// outer('Hello')('student', 'JavaScript');

// const storedFunction = outer('Hello');
// storedFunction('student', 'JavaScript');

function wrapAdjective(x = '*'){
    return function(special = 'special'){
        return `You are ${x}${special}${x}!`;
    }
}
const encouragingPromptFunction = wrapAdjective("||")("awful");