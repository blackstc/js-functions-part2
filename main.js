function oldestPerson(persons) {
  var oldest = persons[0];

  // console.log(persons[0].age);

  for (i = 1; i < persons.length; i++){
      if (oldest.age < persons[i].age) {
        oldest = persons[i];
      }
  }
  return oldest.name;
}
ages = [
  {name: 'Charlie', age: 25},
  {name: 'Dominic', age: 32},
  {name: 'Stan', age: 12},
];
console.log(oldestPerson(ages))



function longestWord (string) {
  var noPunctuation = string.replace(punctuation, "");

  var words = noPunctuation.split(" ");

  var longest = "";

    for (var i = 0; i < words.length; i++) {
      if (longest.length < words[i].length){
        longest = words[i];
      }
    }
    return longest;
}
var testString = "Hello(*&()) how123!@# are, you. tod(*&(ay? Thursday!";
var punctuation = /[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g;

console.log(longestWord(testString));



function factorial(number) {
  var multiplier = number - 1;
  var total = number;

  while (multiplier > 1) {
    total *= multiplier;
    multiplier--;
  }

  return total;
}

console.log(factorial(4));


function palindrome(string) {
  var newString = string.split("");
  var reversedString = newString.reverse().join("");
  if (reversedString.toUpperCase() === string.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("racecar"));
