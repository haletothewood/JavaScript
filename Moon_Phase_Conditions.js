/* Using Case Statements instead
var moonPhase = "full"
var foggyNight = false


if (moonPhase === "full" || foggyNight) {
  console.log("Howwwwlll!!");
} else if (moonPhase === "mostly full") {
  console.log("Arms and legs are getting hairier");
} else if (moonPhase === "mostly new") {
  console.log("Back on two feet");
} else {
  console.log("Invalid moon phase");
}
*/

//Case Statements

var moonPhase = "full"

switch (moonPhase) {
  case "full":
    console.log("Howwwwlll!!");
    break;
  case "mostly full":
    console.log("Arms and legs are getting hairier");
    break;
  case "mostly new":
    console.log("Back on two feet");
    break;
  default:
    console.log("Invalid moon phase")
    break;
}
