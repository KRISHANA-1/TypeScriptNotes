// this interface note with example
/*
In TypeScript, interfaces  are a powerful way of defining contracts
 within your code as well as contracts with code outside of your project.
*/
function printLabel(labeledObject) {
    console.log(labeledObject.label);
}
var myObject = { size: 10, label: "size is 10" };
printLabel(myObject);
