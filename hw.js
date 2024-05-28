// Question 1.

let dog_string = "Hello Max, my name is Dog, and i have purple eyes!";
let dog_names = ["Max", "HAS", "PURPLE", "dog"];
console.log(findWords(dog_string, dog_names));

function findWords(dog_string, dog_names) {
  let result = [];
  dog_names.forEach((name) => {
    if (dog_string.includes(name)) {
      result.push(name);
    }
  });
  return result;
}

// Question 2.
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log(replaceEvens(arr));

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr.splice(i, 1, "even index");
    }
  }
  return arr;
}
