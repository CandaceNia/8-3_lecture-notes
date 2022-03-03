/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */
const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";

const names = {
  first,
  middle, 
  last,
};

/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */
// cannot change value of variable in the object is a limitation and a benefit its 
/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */
function greet(names) {
  let result = "";
  if (names) {
    result = `Welcome to NASA, ${names}!`;
  } else {
    result = "Welcome to NASA, space cadet!";
  }
  return result;
}

greet("Jessica"); //> "Welcome to NASA, Jessica!"
greet(); //> "Welcome to NASA, space cadet!"

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */
