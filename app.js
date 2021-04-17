//    CHAPTER 1 (ALERTS)


// Q-1 =  Write a script to greet your website visitor using JS alert box . .

//  alert("Hey Welcome to my website");

//  Q-2 =  Write a script to display following message on your web  page:

//  alert("Please enter a valid password");

// Q-3 = . Write a script to display following message on your web  page: (Hint : Use line break) 

//   var str = "Welcome to JS Land...\n Happy Coding";
 
//   alert(str);

// Q- 4. Write a script to display following messages in sequence:
   
//  alert("Welcome to JS Land..");
//    alert("Happy Coding");

//Q- 5. Generate the following message through browser’s  developer console: 
   
    //  console.log("Hello... I can run JS through my web browser");
    //  document.write("Hello... I can run JS through my web browser");


//   CHAPTER 2 (VARIABLES FOR STRINGS)

// 1. Declare a variable called username.
  // var username
 
// 2. Declare a variable called myName & assign to it a string
//      that represents your Full Name.

 //  var myName = "Amna Khan";

//  3. Write script to
//  a) Declare a JS variable, titled message.
//  b) Assign “Hello World” to variable message
//  c) Display the message in alert box.

//  var message = "Hello World";
//   alert(message);


// 4. Write a script to save student’s bio data in JS variables and
//   show the data in alert boxes.

//   var name1 = "Jhone Doe";
//   var age = "15";
//   var certificate = "Certified Mobile Application Development";
//   alert( name1);
//   alert(age);
//   alert(certificate);


// 5. Write a script to display the following alert using one JS
//variable:

// var pizza = " Pizza \n Pizz \n Piz \n Pi \n P";
// alert(pizza);


// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

//   var email = "amnakhan8685@gmail.com";
//   alert("my email address is " + email);


// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

//  var book = " A smarter way to learn JavaScript."
//  alert("I am trying to learn javasript from the Book" + book);


// 9. Store following string in a variable and show in alert and
//  browser through JS
//  “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
  
      // var value = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
      // alert(value);


  // CHAPTER 3 - Variables for Numbers

  //  var age = "15";
  //  alert("my age is" + age + " years old");



  // 2. Declare & initialize a variable to keep track of how many
  // times a visitor has visited a web page. Show his/her
  // number of visits on your web page. For example: “You
  // have visited this site N times”.

  // var times_visited = 5;
  // alert("You have visited this site " + times_visited + " times")


  // 3. Declare a variable called birthYear & assign to it your
  // birth year. Show the following message in your browser:

  //  var birthYear = "1990 <br/> Data type of my declared variable is numbers"; 
  //  document.write("My birth year is" + birthYear );
  


  // 4. A visitor visits an online clothing store
  // www.xyzClothing.com . Write a script to store in variables
  // the following information:
  // a. Visitor’s name
  // b. Product title
  // c. Quantity i.e. how many products a visitor wants to
  // order
  // Show the following message in your browser: “John
  // Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

    // var visitorName =  " <b> John Doe </b>"; 
    // var productTitle = "<b> \n T-shirt(s) </b>";
    // var quantity = "<b>5</b>";
    //  document.write(visitorName  + " ordered " +  quantity  +  productTitle + " on XYZ Clothing store");



    // CHAPTER - 4 VARIABLE NAMES: LEGAL & ILLEGAL

    // 1. Declare 3 variables in one statement.
     
    // var person = "Ali ", age = 15, height = " 5ft" ;
    //  document.write(person + age + height);

    // CHAPTER - 5

    //1. Write a program that take two numbers & add them in a  new variable. Show the result in your browser. 
    //  var num = 3;
    //  var num2 = 5;
    //  var num3 = num + num2;
    //  document.write("The sum of " + num + " and " + num2 + " is "+ num3)

    // 2. Repeat task1 for subtraction, multiplication, division & modulus

      // var num = 5;
      // var num2 = 3;
      // var num3 = num - num2;
      // document.write("The sum of " + num + " and " + num2 + " is " + num3);

      // var num = 5;
      // var num2 = 3;
      // var num3 = num * num2;
      // document.write("The sum of " + num + " and " + num2 + " is " + num3);

      // var num = 5;
      // var num2 = 3;
      // var num3 = num / num2;
      // document.write("The sum of " + num + " and " + num2 + " is " + num3);

      // var num = 5;
      // var num2 = 3;
      // var num3 = num % num2;
      // document.write("The sum of " + num + " and " + num2 + " is " + num3);


      // Q-3
      // var num;
      // document.write("Value after variable declaration is ", num + "<br/>");
       // num = 10;
       // document.write("Initial value: ", num +"<br/>");
       // var a = ++num;
       // document.write("Num after increment is: ", a + "<br/>") ;
       // var a = a + 6;
       // document.write("Value after addition is:  ", a  + "<br/>");
       // var a = a -1;
       // document.write("Value after subtraction is:  ", a  + "<br/>");
       // var a = a  / 3 ;
       // document.write("The remainder is:  ", a  + "<br/>");

        //Q- 6. The Temperature Converter: It’s hot out! Let’s make a  converter based on the steps here. 
        // a. Store a Celsius temperature into a variable. 
        // b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 
      
        //  var c = 32;
        // f = (c*9/5)+32;
        // document.write( c +"oC" + " is "+ f+"oF" + "<br/>");

        // var f = 86;
        // c = ( f - 32) * 5 / 9;
        // document.write( f + "oF" +" is " + c + "oC");

       // 7. Write a program to implement checkout process of a  shopping cart system for an e-commerce website. Store  the following in variables..

       //   var price_of_item_1 = 600;
       //   var ordered_quantity_of_item_1 = 4;
       //   var price_of_item_2 = 1000;
       //   var ordered_quantity_of_item_2 = 2;
       //   var shipping_charges = 200;
       //  var total = (price_of_item_1 * ordered_quantity_of_item_1 + price_of_item_2 * ordered_quantity_of_item_2 + shipping_charges);
       //   document.write("Price of item 1 is "+price_of_item_1 + "<br/>" + "Ordered quantity of item 1 is  " + ordered_quantity_of_item_1 + "<br/>" + "Price of item 2 is  " + price_of_item_2 + "<br/>" +
       //   " Ordered quantity of item 2 is  " + ordered_quantity_of_item_2 + "<br/>" + "Shipping Charges  " + shipping_charges + "<br/>") ;

       //   document.write("Total cost of your order is: " + total);
      



       // 8. Store total marks & marks obtained by a student in 2  variables. Compute the percentage & show the result in  your browser
            
        // var marks_sheet = " <h1> Marks Sheet </h1> ";
        // document.write(marks_sheet + "<br/>" + "<br/>");

        // var total_marks = 1100;
        // var marks_obtained = 950;
        // var percentage = 950 / 1100 * 100;
        // document.write("Total marks: " + total_marks + "<br/>");
        // document.write("Marks obtained: " + marks_obtained + "<br/>");
        // document.write("Percentage is: " + percentage );

      
      

        
        

















