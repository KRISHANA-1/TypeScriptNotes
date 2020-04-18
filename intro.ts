// basic tyoes demo important ones
let x: [string, number];
x = ["hello", 10]; // OK
//x = [10;"hello"]; error becasue first value is string n we are passing number
//console.log(x[0].substring(1));
//console.log(x[1].substring(1));error because x[1] is number not string so substring will create error 
// Enum example
enum color {red,green,yello}
let c :color = color.red;
//console.log("values are ",c);
enum Color {Red = 1, Green = 2, Blue = 4}// we can set the numeric vaues manully
let c1: Color = Color.Green;
//console.log("values are ",c1,c);
// any and object examples
let notSure:any =5;
notSure ="May be  string ";
notSure = false;
//let prettySure: object = 4; compile time checking 
//prettySure.toFixed(); 
let testlist:any[] = [1,false,"Free"];
//console.log(testlist[0]);// this will be the final output
// void method demo
function warning():void{
    console.log("void return type example");
}
//warning();// will print the messages
let unusable : void = undefined;
unusable = null;
// we can only assign null and undefined values to void variable type
// never 
function error(message:string): never{
throw Error(message);
}
function fail(){
    return error("hi i m returning never which will never come");
}
function infiniteloop():never{
    while(true){}
}
//infiniteloop();

