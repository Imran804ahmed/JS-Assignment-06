// *************************************************************************************
//                           Assignment No# 06
// *************************************************************************************
// -----------------------------------------------------------------------------------
// Chapter 21 t0 25
// -----------------------------------------------------------------------------------

// Question No# 01
// var fname = prompt("Enter your first name: ");
// var lname = prompt("Enter your last name: ");
// var fullname = fname + " " +  lname;
// document.write("Hello! " + fullname);

// Question No# 02

// var a = prompt("Enter your favorite phone details: ");
// var b = a.length;
// document.write("My favorite phone is: " + a + "<br>Length of a string: " + b)

// Question No# 03

// var str = "Pakistani";
// var ind = str.indexOf("n");
// document.write("String is: " + str + "<br> Index of 'n' is: " + ind)

// Question No# 04

// var str = "Hello World";
// var ind = str.lastIndexOf("l")
// document.write("String is: " + str + "<br> Index of 'n' is: " + ind)

// Question No# 05

// var str = "Pakistani";
// document.write("String is: " + str + "<br> Character at 3 index: " + str[3])

// Question No# 06

// var fname = prompt("Enter your first name: ");
// var lname = prompt("Enter your last name: ");
// document.write("Hello! " + fname + " " + lname);

// Question No# 07

// var city = "hyderabad";
// var rep = city.replace('hyder','Islam');
// document.write("City: " + city + " <br> After repalcement: " + rep)

// Question No# 08

// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// var rep1 = message.replace(/and/g,'&');

// Question No# 09

// var a = "472";
// var b = parseInt(a);
// document.write("Value: " + a + "<br> Type: String" + "<br> Value: " + b + "<br> Type: Number")

// Question No# 10

// var a = prompt("Enter a word: ")
// var b = a.toUpperCase();
// document.write("User input: " + a + "<br> Upper case: " + b)

// Question No# 11

// var text = prompt("Enter your word: ")
// var b = text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
// document.write("User input: " + text + "<br> Title case: " + b)

// Question No# 12

// var num = 35.36;
// var con = num.toString();
// var rep = con.replace(".","");
// document.write("Number: " + num + "<br> Convert into string: " + rep);

// Question No# 13

// var a = prompt("Enter Your Name: ");
// if ((a.includes('@')) || (a.includes('$')) || (a.includes('!')) || (a.includes('.')) || (a.includes(','))){
//     alert("Don't used special character [@.$,!]");
// }
// else{
//     alert("Sucess!!")
// }

// Question No# 14

// var a = prompt("Enter the name which you have to found: ");
// var b = a.toLowerCase();
// var c = ";"
// console.log(b)
// var arr = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// switch(b){
//     case arr[0]:
//        document.write(b + " are available at index 0 in our bakery!")
//         break;
//     case arr[1]:
//         document.write(b + " are available at index 1 in our bakery!")
//         break;
//         case arr[2]:
//         document.write(b + " are available at index 2 in our bakery!")
//         break;
//         case arr[3]:
//         document.write(b + " are available at index 3 in our bakery!")
//         break;
//         case arr[4]:
//         document.write(b + " are available at index 4 in our bakery!")
//         break;
//     default:
//         document.write("Sorry " + b + " is not available in our bakery!")
// }

// Question No# 15

// var inputtxt = "Imran804ahmed";
// // var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
// // var b = passw;
// if(inputtxt.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/g)) 
// { 
// alert('Correct, try another...')

// }
// else
// { 
// alert('Wrong...!')
// }


// Question No# 16   

// var a = "University of karachi";
// var b = a.split("")
// for( var i=0; i<b.length; i++){
//     document.write(b[i] + "<br>")
// }

// Question No# 17

// var str = "Pakistan";
// var ind = str.slice(-1)
// document.write("User input: " + str + "<br> Last character of input: " + ind)

// Question No# 18

// var temp = "The quick brown fox jumps over the lazy dog";
// var count = (temp.match(/the|The/g) || []).length;
// console.log(count);

// -----------------------------------------------------------------------------------
// Chapter 26 t0 30
// -----------------------------------------------------------------------------------

// Question No# 01

// var a = +prompt("Enter a positive integer number: ");
// document.write("Number: " + a)
// var b = Math.round(a);
// document.write("<br> Round off value: " + b)
// var c = Math.floor(a)
// document.write("<br> Floor value: " + c)
// var d = Math.ceil(a)
// document.write("<br> Ceil value: " + d)

// Question No# 02

// var a = +prompt("Enter a negative floating point number: ");
// document.write("Number: " + a)
// var b = Math.round(a);
// document.write("<br> Round off value: " + b)
// var c = Math.floor(a)
// document.write("<br> Floor value: " + c)
// var d = Math.ceil(a)
// document.write("<br> Ceil value: " + d)

// Question No# 03

// var a = +prompt("Enter a negative value: ");
// var b = Math.abs(a)
// document.write("The absolute value of " + a + " is = " + b)

// Question No# 04

// var a = Math.random() * 10;
// var b = Math.floor(a);
// console.log(a)
// console.log(b)
// document.write("Random dice value: " + b);

// Question No# 05

// var a = Math.random() * 2;
// var b = Math.floor(a);
// console.log(a)
// console.log(b)
// if (b == 1){
//     document.write("Random coin vlaue: Heads");
// }
// else{
//     document.write(" Random coin vlaue: Tails");
// }

// Question No# 06

//  var a = Math.floor(Math.random() * 100) + 1
//  console.log(a)
//  document.write(" Random number between 1 to 100 =  " + a);

// Question No# 07

// var a = prompt("Enter your weight in kilogram: ")
// var b = "";
// var c = "";
// if (a.includes("k")){
//     console.log(b=a.indexOf("k"))
//     c = a.slice(0,b)
//     alert("The weight of user is: " + c+  " kilogram")
// }
// else if (a.includes("K")){
//     console.log(b=a.indexOf("K"))
//     c = a.slice(0,b)
//     alert("The weight of user is: " + c+  " kilogram")
// }
// else if (a.includes("")){
//     console.log(b=a.indexOf())
//     c = a.slice()
//     alert("The weight of user is: " + c+  " kilogram")
// }
// else{
//     alert("Something is wrong!!")
// }

// Question No# 08

// var a = +prompt("Enter a number from 1 to 10: ");
// var b = Math.floor(a);
// var c = Math.floor(Math.random() * 10) + 1
//  console.log(b)
//  console.log(c)
//  if (b == c){
//      alert("congratulate your value is same!!")
//  }
//  else{
//      alert("Your value is not same!!")
//  }
 
// -----------------------------------------------------------------------------------
// Chapter 35 t0 38
// -----------------------------------------------------------------------------------

// Question No# 01

// var date = new Date();
// document.write(date)

// Question No# 02

// var month = ['Jan' , 'Feb' , 'Mar' , 'April' , 'May' , 'June' , 'July' , 'Augest' , 'Sept' , 'Nov' , 'Dec'];
// var d = new Date();
// var n = d.getMonth();
// var che = month == n;
// document.write("Current Month: " + month[n])

// Question No# 03

// var days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
// var day = new Date();
// var curday = day.getDay();
// var che = days[curday].slice(0 , 3);
// document.write("Today is " + che)

// Question No# 04

// var days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
// var day = new Date();
// var curday = day.getDay();
// var che = days[curday].slice(0 , 3);
// if (che == "Sun" || che == "Sat"){
//     alert("It's a Fun day!!");
// }
// else{
//     alert("It's not a Fun day!!\n Because today is not a Sunday or Saturday")
// }

// Question No# 05

// var date  = new Date();
// var d = date.getDate();
// if (d <= 14){
//     alert("First Fifteen Day of the month")
// }
// else if (d == 15){
//     alert("Last Day of the month")
// }
// document.write(d)

// Question No# 06

// var da = new Date();
// var dob = new Date("Jan 01, 1970");
// var dobmilli = dob.getTime();   
// var mili = (dobmilli * (60*60*1000));
// var min = (dobmilli * (60*60));
// document.write("Current Date: " + da)
// document.write("<br> Elapsed millisecond since January 01, 1970: " + mili)
// document.write("<br> Elapsed minutes since January 01, 1970: " + min)

// Question No# 07

// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// if (today.getHours() > 12){
//     alert("It's PM")
// }
// else if (today.getHours() < 12){
//     alert("It's AM")
// }
// console.log(time)

// Question No# 07

// var today = new Date();
// var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, -15);
// document.write(lastDayOfMonth)

// Question No# 08

// var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
// var firstDate = new Date(2020, 5, 12);
// var secondDate = new Date(2020, 6, 22);

// Question No# 09

// var diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
// document.write(diffDays+" days have passed since 1st Ramadan,2020")

// Question No# 10

// var g = new Date();
// var a = new Date ("January 01, 2020");
// var b = a.getTime();
// var c = b / (1000*60)
// document.write("On referenceing date is : " + g + "<br>" + c + " seconds had passed since beginning of 2020")

// Question No# 11

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
// var time1 = (today.getHours()-1) + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
// var dateTime1 = date+' '+time1;
// document.write("Current Date: " + dateTime + " GMT+0500 (PKT)");
// document.write("<br> 1 hour ago,it was: " + dateTime1 + " GMT+0500 (PKT)");

// Question No# 12

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var date1 = (today.getFullYear()-100)+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' ' +time;
// var dateTime1 = date1+' '+time;
// document.write("Current Date: " + dateTime + " GMT+0500 (PKT)");
// document.write("<br> 100 years back,it was: " + dateTime1 + " GMT+0500 (PKT)");

// Question No# 13

// var dob = new Date( prompt("Enter your Date of birth", "March 10, 1997"));
// // var dob = new Date("March 10, 1997");
// var b = dob.getFullYear();
// var dobmilli = dob.getTime();   
// console.log(dobmilli)
// var today = new Date();
// var todaymilli = today.getTime();
// console.log(todaymilli)
// var diff = todaymilli - dobmilli;
// console.log(diff)
// var accuAge = Math.floor(diff/(1000*60*60*30*24*12));
// document.write("Your age is : " + accuAge);
// document.write("<br> Your birthday year is : " + b);

// Question No# 14

// var custname = "Imran Ahmed";
// var month0 = ['Jan' , 'Feb' , 'Mar' , 'April' , 'May' , 'June' , 'July' , 'Augest' , 'Sept' , 'Nov' , 'Dec'];
// var month = new Date();
// var c = month.getMonth();
// console.log(month0[c]);
// var unit = 410;
// var charg = 16;
// var net = unit * charg;
// console.log(net);
// var lcharg = 350;
// var gross = net + lcharg;
// console.log(gross)
// document.write("Customer Name: " + custname);
// document.write("<br> Month: " + month0[c]);
// document.write("<br> Number of unit: " + unit);
// document.write("<br> Charges per unit: " + charg);
// document.write("<br><br> Net amount payable(within Due date): " + net);
// document.write("<br> Late payment surcharge: " + lcharg);
// document.write("<br> Gross amount payable(after Due Date): " + gross);

// -----------------------------------------------------------------------------------
// Chapter 35 t0 38
// -----------------------------------------------------------------------------------

// Question No# 01

// function Currdate(){
//     var a = new Date();
//     document.write(a)
// }
// Currdate()

// Question No# 02

// function name(){
// var fname = "Imran ";
// var lname = "Ahmed";
// document.write("Welcome to " + fname + lname)}
// name()

// Question No# 03

// function sum(){
// var a  = +prompt("Enter a First number: ");
// var b = +prompt("Enter a Second number: ");
// var total = a+b;
// document.write(total)
// }
// sum();

// Question No# 04

// var a = prompt("Enter the equation");
// console.log(a);
// var b = 0;
// if (a.includes('+') ){
//     console.log(b=a.indexOf("+"))
//     var c = a.slice(b+1)
//     var conv2 = parseInt(c)
//     console.log(c)
//     var d = a.slice(0 ,b)
//     var conv1 = parseInt(d)
//     console.log(d)
//     var total = conv1+conv2;
//     alert("The sum of equation is = " + total)
// }
// else if (a.includes('-') ){
//     console.log(b=a.indexOf("-"))
//     var c = a.slice(b+1)
//     var conv2 = parseInt(c)
//     console.log(c)
//     var d = a.slice(0 ,b)
//     var conv1 = parseInt(d)
//     console.log(d)
//     var total = conv1-conv2;
//     alert("The sum of equation is = " + total)
// }
// else if (a.includes('*') ){
//     console.log(b=a.indexOf("*"))
//     var c = a.slice(b+1)
//     var conv2 = parseInt(c)
//     console.log(c)
//     var d = a.slice(0 ,b)
//     var conv1 = parseInt(d)
//     console.log(d)
//     var total = conv1*conv2;
//     alert("The sum of equation is = " + total)
// }
// else if (a.includes('/') ){
//     console.log(b=a.indexOf("/"))
//     var c = a.slice(b+1)
//     var conv2 = parseInt(c)
//     console.log(c)
//     var d = a.slice(0 ,b)
//     var conv1 = parseInt(d)
//     console.log(d)
//     var total = conv1/conv2;
//     alert("The sum of equation is = " + total)
// }
// else{
//     alert("Some thing wrong!!!")
// }

// Question No# 05

// function power(){
// var x = prompt("Enter the number; ");
// var y= prompt("Enter the Power of number; ");
// var z = Math.pow(x, y);
// document.write(x +  ' power of ' + y + " = " + z)}
// power();

// Question No# 06

// function factorial(n){
// var n = +prompt("Enter a factorial number = ")
// var res = 0;
// for (var i = n-1; i>=1; i-- ){
//     console.log(res += n * i )}
//    document.write("The factorial " + n + " is = " + res)}
//    factorial()

// Question No# 07

// var sta = +prompt("Enter a start number:")
// var end = +prompt("Enter a end number: ")
// if (sta < end && end > sta){
// for (var i = sta; i<=end; i++){
//     document.write(i + "<br>")
// }}
// else{
//     alert("something is wrong!!")
// }

// Question No# 08

// function outer() {
//     var b = +prompt("Enter the base: ");
//     var p =+prompt("Enter the Perpendicular:")
//        function inner() {
//         document.write("The Hypotenuse = " + Math.hypot(b, p));
//         }
//        return inner;
//     }
//     var X = outer();
//     X();

// Question No# 09

// function add(a,b){
//     var z = a*b;
//     return z;
// }
// var x= 14;
// var y =5;
// var f = add(x,y,);
// document.write("The area of a triangle (using variable) is = " + f)
// var g = add(14,5)
// document.write("<br>The area of a triangle (using values) is = " + g)

// Question No# 10

// function palindrome(){
// var word = prompt("Enter a word: ")
// var check = "";
// for (var i = word.length -1; i>=0; i--){
//    check += word[i]
// }
// console.log(word[1],check[1])
// if (word === check){
//     alert("This word is palindrome " + word)
// }
// else{
//     alert("This word is not palindrome " + word)}
// }
// palindrome();


// Question No# 11

// function capitalize(text){
// var text = prompt("Enter the sentence: ");
// var b = text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
// document.write("The input sentence is: " + text + "<br> The output sentence is: " + b)}
// capitalize()

// Question No# 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web3 Development Tutorial'));

// Question No# 13

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
      
//       }
//   }
//   return letter_Count;
// }
// console.log(char_count("Imran Ahmed", 'm'));

// Question No# 14

// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));
