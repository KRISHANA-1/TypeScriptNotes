// this interface note with example
/*
In TypeScript, interfaces  are a powerful way of defining contracts
 within your code as well as contracts with code outside of your project.
*/
function printLabel(labeledObject : { label:string }){
    console.log(labeledObject.label);
}
let myObject = {size:10,label:"size is 10"};
printLabel(myObject);