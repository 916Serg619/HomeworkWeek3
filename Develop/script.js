

// Assignment Code
var get = document.querySelector("#generate");

// Declare variables//
var start;
var confirmNum;
var confirmChar;
var lowerCase;
var upperCase;

// This variable allows all choices to be linked together//
var choice;




// Add event listener to generate button
get.addEventListener("click", function () {
  pw = generatePassword();
  document.getElementById("password").placeholder.pw;
});

// Strings containing variables for password selection//
char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "t", "U", "V", "W", "X", "Y", "Z"]; 




//  This function will start the variable selection process.//
function generatePassword () {
  start = parseInt(prompt("How long would you like your password to be?  You can choose a length between 8 and 128 characters"));
  // Validates if the User's first choice fits the criteria set below.//
  if (!start) {
    alert("Choose a value between 8 and 128 characters");
  } else if (start < 8) {
    // Alert message letting User know that selected value is too low.//
    // Redirects User back to initial prompt.//
    alert("The value you have chosen is too low.");
    start = parseInt(prompt("Please choose a value between 8 and 128"));
  } else if (start > 128) {
        // Alert message letting User know that selected value is too high.//
        // Redirects User back to initial prompt.//
    alert("This value is too high.");
    start = parseInt(prompt("Please choose a value between 8 and 128"));
  
    //Confirm messages once User has determined proper length of password.//
  } else {
    confirmNum = confirm("Do you want your password to contain numbers?");
    confirmChar = confirm("Do you want your password to contain any special characters?");
    lowerCase = confirm("Do you want lower case letters in your password?");
    upperCase = confirm("Do you want upper case letters in your password?");
  };
  
  // If User chooses 4 'Cancel' on all 4 options, an Alert message will pop up, saying the User's choices were invalid.//
  //'Location.reload()' is used to refresh the page after the alert, so the User can try again on a clean slate.//
  if (!confirmNum && !confirmChar && !lowerCase && !upperCase) {
      choice = alert("The choices you made were invalid. Your password was not generated.");
      location.reload();
  }
  // If User accepts all 4 options, each string will be linked together.//
  else if (confirmNum && confirmChar && lowerCase && upperCase) {
      choice = char.concat(num, lower, upper);
  }


  // If User accepts 3 out of 4 options, each string will be linked together.//
  else if (confirmChar && confirmNum && lowerCase) {
    choice = char.concat(num, lower);
  }
  else if (confirmChar && confirmNum && upperCase) {
    choice = char.concat(num, upper);
  }
  else if (confirmChar && lowerCase && upperCase) {
    choice = char.concat(lower, upper);
  }
  else if (confirmNum && lowerCase && upperCase) {
    choice = num.concat(lower, upper);
  }
  
  // If User accepts 2 out of 4 options, each string will be linked together.//
  else if (confirmChar && confirmNum) {
    choice = char.concat(num);
  }
  else if (confirmChar && lowerCase) {
    choice = char.concat(lower);
  }
  else if (confirmChar && upperCase) {
    choice = char.concat(upper);
  }
  else if (confirmNum && lowerCase) {
    choice = num.concat(lower);
  }
  else if (confirmNum && upperCase) {
    choice = num.concat(upper);
  }
  else if (lowerCase && upperCase) {
    choice = lower.concat(upper);
  }
  
  
  // If User accepts 1 out of 4 options, each string will be linked together.//
  else if (confirmChar) {
    choice = char;
  }
  else if (confirmNum) {
    choice = num;
  }
  else if (lowerCase) {
    choice = lower;
  }
  else if (upperCase) {
    choice = upper;
  }
  // If statements had to cascade down, starting from most options chosen, to least options chosen, in order for all strings to be properly linked and randomized.  Program would not work when written in opposite order.// 
  

  // This variable is a placeholder for when the User chooses a specific length of password.//
  var password = [];
  
  // Random selection of all desired variables.//
  for (var c = 0; c < start; c++) {
    var choiceChosen = choice[Math.floor(Math.random() * choice.length)];
    password.push(choiceChosen);
  };

   // Joins the random elements together in a string.//
   var pw = password.join("");
       UserInput(pw);
       return pw;

  
}
//  The randomized password will be send back in to the "Your secure Password" textbox.//
//  The randomized password is logged in to the console, as well.//
function UserInput(pw) {
  document.getElementById("password").textContent = pw;
  console.log(pw);
}






