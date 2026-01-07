// Custom functionality

// Toggle Image element upon button click.
//Load image elements
const myImage = document.querySelector("img");

// ------------------------------------------------------------------------

// Create event listener on the image element.
myImage.addEventListener("click", () => {
  // Load the attribute src from the image element.
  const mySrc = myImage.getAttribute("src");

  // Create an if-else block for attribute src. (If src is images/firefox2.png)
  if (
    mySrc ===
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png"
  ) {
    // Set attribute of the element to images/firefox2.png
    myImage.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
    );
  } else {
    // Set attribute of the element to images/firefox-icon.png
    myImage.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png"
    );
  }
});

// ---------------------------------------------------------------------------------
// Load button elements

let myButton = document.querySelector("button");

// Load headings elements (H1)
let myHeading = document.querySelector("h1");

// ---------------------------------------------------------------------------------

// Create function block 'setUserName'
function setUserName() {
  // Prompt user to enter a name.
  // Assign value to a variable 'myName'.
  const myName = prompt("Please enter your name.");

  // Add if-else block
  if (!myName) {
    setUserName();
  } else {
    // Save myName to local storage as 'name'.
    localStorage.setItem("name", myName);
  }

  // Change text content of 'myHeading'.
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

// ------------------------------------------------------------------------------
// Create if-else block for local storage variable 'name'.

if (!localStorage.getItem("name")) {
  //Invoke function 'setUserName'.
  setUserName();
} else {
  // Store local storage variable 'name'.
  const storedName = localStorage.getItem("name");
  // Set text content of the element myHeading
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// ---------------------------------------------------------------------------------
// Add a click event listener block to myButton
myButton.addEventListener("click", () => {
  // Invoke function setUserName
  setUserName();
});

// ------------------------------------------------------------------------------------
