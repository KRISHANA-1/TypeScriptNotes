// basic tyoes demo important ones
var x;
x = ["hello", 10]; // OK
//x = [10;"hello"]; error becasue first value is string n we are passing number
//console.log(x[0].substring(1));
//console.log(x[1].substring(1));error because x[1] is number not string so substring will create error 
// Enum example
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["yello"] = 2] = "yello";
})(color || (color = {}));
var c = color.red;
//console.log("values are ",c);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {})); // we can set the numeric vaues manully
var c1 = Color.Green;
//console.log("values are ",c1,c);
// any and object examples
var notSure = 5;
notSure = "May be  string ";
notSure = false;
//let prettySure: object = 4; compile time checking 
//prettySure.toFixed(); 
var testlist = [1, false, "Free"];
//console.log(testlist[0]);// this will be the final output
// void method demo
function warning() {
    console.log("void return type example");
}
//warning();// will print the messages
var unusable = undefined;
unusable = null;
// we can only assign null and undefined values to void variable type
// never 
function error(message) {
    throw Error(message);
}
function fail() {
    return error("hi i m returning never which will never come");
}
function infiniteloop() {
    while (true) { }
}
infiniteloop();
