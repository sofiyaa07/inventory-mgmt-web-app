// Import Part class and helper functions
import Part from './Part.js';
import * as helpers from './HelperMethods.js';

// Make shelf
var shelf1 = helpers.makeShelf(3,4);
console.log(shelf1);

// Make part object
const myPart = new Part("Arduino Uno REV3", "ARD_A000066", shelf1[0][1], 50, "note", "https...", "image-location.jpg", 20, 100);

console.log(myPart);
console.log(myPart.name);

