// Import Part class and helper functions
import Part from './Part.js';
import * as helpers from './HelperMethods.js';

// Make shelf
var shelf1 = helpers.makeShelf(3,4);
console.log(shelf1);

// Make part objects
var part0 = new Part("Arduino Uno REV3", "ARD_A000066", shelf1[0][0], 50, "note", "https...", "image-location.jpg", 20, 0o1);
var part1 = new Part("Arduino GIGA Display Shield", "ARD_A000166", shelf1[0][1], 40, "note", "https...", "image-location.jpg", 20, 0o2);
var part2 = new Part("Portenta Vision Shield - Ethernet", "ARD_A000266", shelf1[0][2], 30, "note", "https...", "image-location.jpg", 20, 0o3);
var part3 = new Part("Arduino MKR Mem Shield", "ARD_A000266", shelf1[1][0], 20, "note", "https...", "image-location.jpg", 20, 0o3);
var part4 = new Part("NodeMCU ESP8266", "ARD_A000266", shelf1[1][1], 10, "note", "https...", "image-location.jpg", 20, 0o3);

// Sort objects by name, alphabetical 
var partArr = [part0, part1, part2, part3, part4];
var partAlpha = helpers.sortAlpha(partArr);
console.log(partAlpha);
