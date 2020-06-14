//                             chapter#1
// // 1. Write a script to greet your website visitor using JS alert box.
 
// alert("Asslam O Alaikum")

// // 2. Write a script to display following message on your web page:

// alert("Error! Please enter a valid password")

// // 3. Write a script to display following message on your web page: (Hint : Use line break)

// alert("Welcome to JS Land... \r\nHappy Coding!")

// // 4. Write a script to display following messages in sequence:

// alert("Welcome to JS Land...")
// alert("happy Coding!")

// // 5. Generate the following message through browser’s developer console:

// console.log("Hello... Ican run JS through my web browser's console")



//                              CHAPTER # 2
// // 1. Declare a variable called username.
// var username;

// // 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName=("Mudassir Mukhtar")

// // 3. Write script to
// // a) Declare a JS variable, titled message.
// var titled;
// // b) Assign “Hello World” to variable message.
// titled=("Hello World");
// // c) Display the message in alert box.
// alert(titled);

// // 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// alert(myName)
// var age=22 + "years old";
// alert(age);
// var application=("Ceritified Mobile application Development");
// alert(application);

// // 5. Write a script to display the following alert using one JS variable:
// var pizza=("PIZZA")
// for (let i = pizza.length; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         document.write( pizza[j]);
//     }
//     document.write("<br/>")
// }


// // 6. Declare a variable called email and assign to it a string that
// // represents your Email Address(e.g. example@example.com).
// // Show the blow mentioned message in an alert box.(Hint: use
// // string concatenation)
// var email=("mudassirmukhtar4@gmail.com");
// alert("My email adress is "+email);

// // 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
// var book =("A smarter way to learn JavaScript");
// alert("I am trying to learn from the Book"+book);

// // 9. Store following string in a variable and show in alert and browser through JS
// // “ ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ”
// var design = (" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ");
// alert(design);






// //                           CHAPTER #3
// // 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
// var age = 22;
// alert("I am "+age+" years old")

// // 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

// var visitorNum=1;
// alert ("You have visited this site "+visitorNum +"times")

// // 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// var birthYear= 1998;
// document.write("My birth year is "+birthYear +"<br/>")
// document.write("Data type of my declared variable is "+ typeof birthYear +"<br/><br/><br/>")

// // 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// // a. Visitor’s name
// var VisitorName ="John Doe"
// // b. Product title
// var ProductTitle="5 T-shirt(s)"
// // c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// var Quantity=("XYZ")
// document.write(VisitorName+" ordered "+ProductTitle+" on "+Quantity+" Clothing store")


////                           CHAPTER #5
// // 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var num1=3;
// var num2=5;
// var sum;
// sum=num1+num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum);
// document.write("<br/><br/><br/>");

// // 2. Repeat task1 for subtraction, multiplication, division & modulus.
// subtraction=num1-num2;
// document.write("subtraction of "+num1+" and "+num2+" is "+subtraction +".<br/>");
// multiplication=num1*num2;
// document.write("multiplication of "+num1+" and "+num2+" is "+multiplication+".<br/>");
// division=num1/num2;
// document.write("division of "+num1+" and "+num2+" is "+division+".<br/>");
// modulus=num1%num2;
// document.write("modulus of "+num1+" and "+num2+" is "+modulus+".<br/>");

// document.write("<br/><br/><br/>");

// // 3. Do the following using JS Mathematic Expressions
// // a. Declare a variable.
// var num3;
// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is: ??")
// document.write("<br/>")

// // c. Initialize the variable with some number.
// num3=5;

// // d. Show the value of variable in your browser like “Initial value: 5”.
// document.write("Initial value: "+num3);
// document.write("<br/>")

// // e. Increment the variable. 
// num3=++num3;

// // f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.write("Value after increment is: "+num3);
// document.write("<br/>")

// // g. Add 7 to the variable.
// num3=num3+7;


// // h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write("Value after addition is: "+num3);
// document.write("<br/>")

// // i. Decrement the variable.
// num3=++num3;

// // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("Value after addition is: "+num3);
// document.write("<br/>")


// // k. Show the remainder after dividing the variable’s value by 3.
// var remainder= num3/3

// // l. Output : “The remainder is : 0”.
// document.write("The remainder is : 0"+remainder);
// document.write("<br/>")
// document.write("<br/><br/><br/>");

// // 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// var ticket=600;
// var buyTicket=5;
// cost=buyTicket*ticket;
// document.write("Total cost to buy "+buyTicket+"tickets to a movie is "+cost+"PKR.");
// document.write("<br/><br/><br/>");


// // 5. Write a script to display multiplication table of any number in your browser. E.g

// var table=4
// for (let i = 1; i < 11; i++) {
//     document.write(table+"*"+i+"="+table*i+".<br/>");
// }
// document.write("<br/><br/><br/>");
// // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// // a. Store a Celsius temperature into a variable.
// var Celsius =25;

// // b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// var Fahrenheit;
// Fahrenheit=(Celsius*9/5)+32;
// document.write( Celsius+'\xB0C is ' + Fahrenheit + ' \xB0F.<br/>');

// // c. Now store a Fahrenheit temperature into a variable.
// var Fahrenheit=70;


// // d. Convert it to Celsius & output “NN o F is NN o C”.
//  Celsius = (Fahrenheit - 32) * 5 / 9;

// document.write(Fahrenheit+'\xB0F is ' + Celsius + '\xB0C.');

// document.write("<br/><br/><br/>");
// document.write("<h3>Shopping Cart</h3>");
// // 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// // a. Price of item 1
// var Price1= 650;
// document.write("Price of item 1 is "+Price1+".<br/>");
// // b. Price of item 2
// var Price2=100;
// document.write("Price of item 2 is "+Price2+".<br/>");
// // c. Ordered quantity of item 1
// var quantity1=3;
// document.write("Quantity of item 2 is "+quantity1+".<br/>");
// // d. Ordered Quantity of item 2
// var quantity2=7;
// document.write("Quantity of item 2 is "+quantity2+".<br/>");
// // e. Shipping charges
// var charges=100;
// document.write("Shipping charges is "+charges+".<br/>");
// // Compute the total cost & show the receipt in your browser.
// var total_cost=Price1*quantity1+Price2*quantity2+100
// document.write("Total cost of your order is "+total_cost+".<br/>");
// document.write("<br/><br/><br/>");

// document.write("<h3>Marks Sheet</h3>");
// // 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// var total_marks=980;
// document.write("Total Marks is:"+total_marks+".<br/>");
// var marks_obtained=805;
// document.write("Marks Obtained is:"+marks_obtained+".<br/>");
// var percentage=(marks_obtained/total_marks )*100;
// document.write("Percentage is:"+percentage+"%"+".<br/>");
// document.write("<br/><br/><br/>");


// // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// // Perform all calculations in a single expression.
// // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// // and 1 Saudi Riyal = 28 Pakistani Rupee)
// var US_Dollar = 104.80 ;
// var Saudi_Riyal = 28 ;
// var T_US_Dollar = US_Dollar*10;
// var T_Saudi_Riyal =Saudi_Riyal*25;
// total_currency=T_US_Dollar+T_Saudi_Riyal;
// document.write("<h3>Currency in PKR</h3>");
// document.write("Total Currency in PkR: " +total_currency);
// document.write("<br/><br/><br/>");

// // 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// var num4=786;
// // a. Add 5
// // b. Multiply by 10
// // c. Divide the result by 2
// // Perform all calculations in a single expression
// num4=((num4+5)*10)/2;

// // 11. The Age Calculator: Forgot how old someone is?
// // Calculate it!
// document.write("<h3>Age Calculator</h3> ");
// // a. Store the current year in a variable.
// var cyear=2020;
// document.write("Current Year :" + cyear+".<br/>");
// // b. Store their birth year in a variable.
// var byear=1998;
// document.write("Birth Year :" + byear+".<br/>");
// // c. Calculate their 2 possible ages based on the stored values.
// var age;
// age = cyear-byear;
// // Output them to the screen like so: “They are either NN or NN years old”.
// document.write("Your Age is:" + age+".<br/>");
// document.write("<br/><br/><br/>");


// // 12. The Geometrizer: Calculate properties of a circle.
// document.write("<h3>The Geometrizer</h3> ");
// // a. Store a radius into a variable.
// var radius=20;
// document.write("Radius of a circle:  is"+radius+".<br/>");
// // b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// // (Hint : Circumference of a circle = 2 π r , π = 3.142)
// var Circumference =2* 3.142 *radius;
// document.write("The circumference is:"+Circumference+".<br/>");

// // Calculate the area based on the radius, and output “The area is NN”. 
// // (Hint : Area of a circle = π r 2 , π = 3.142)

// var area =3.142*radius*radius;
// document.write("The area is:"+area+".<br/>");
// document.write("<br/><br/><br/>");



// // 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// document.write("<h3>The Lifetime Supply Calculator</h3> ");
// // a. Store your favorite snack into a variable
// var snack=("chocolate chip");
// // b. Store your current age into a variable.
// var age=15;
// document.write("Current age: "+age+".<br/>");
// // c. Store a maximum age into a variable.
// var mage=65;
// document.write("Estimated maximum age: "+mage+".<br/>");
// // d. Store an estimated amount per day (as a number).
// var msnack=3;
// document.write("Snack amount per day: "+msnack+".<br/>");
// // e. Calculate how many would you eat total for the rest of your life.
// var nsnack =mage-age;
// nsnack=nsnack*365;
// nsnack=nsnack*3;
// // Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// document.write("You will need "+nsnack+" to last you until the ripe old age of "+mage+".<br/>");


















