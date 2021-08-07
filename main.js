

// var classAges = [24, 25, 34, 30, 20, 28];
// var minAge = classAges[0];
// var maxAge = classAges[0]
// var sumOfAges = classAges[0];
// var multiOfAges = classAges[0];

// var userInput = Number(prompt("Insert a number:"));
// for(var i=1; i<classAges.length; i++){
//     if(classAges[i]<minAge){
//         minAge = classAges[i];
//     }else if(classAges[i]> maxAge){
//         maxAge = classAges[i];
//     }
//     sumOfAges +=  classAges[i];
//     multiOfAges *= classAges[i];
//     if(userInput == classAges[0] || userInput == classAges[i]){
//         alert("you have a match");
//     }
// }

// console.log(minAge);
// console.log(maxAge);
// console.log(sumOfAges);
// console.log(sumOfAges / classAges.length);
// console.log(multiOfAges);

////// ex- 1.7 ////////


// for(var i=0; i<10; i++){
//     for(j=0; j<classAges.length; j++){
//         console.log(classAges[j]);
//     }
// }

/////////// exercise 2: /////////////


// var arrayOfItems = ["bonjor",24,"selam",45,"hello",88];
// var arrayOfstrings = [];
// var arrayOfNumbers = [];

// for (var i=0; i<arrayOfItems.length; i++ ){
//     if(Number(arrayOfItems[i])){
//         arrayOfNumbers.push(arrayOfItems[i]);
//     }else{
//         arrayOfstrings.push(arrayOfItems[i]);
//     }
// }
// console.log(arrayOfNumbers);
// console.log(arrayOfstrings);


///////////// exercise 3: ////////////


// var arrayOfcars = [56,"Lamborgini",23, 'BMW',67,"Mercedes","Feirari","Lexus"];

// var temp = arrayOfcars[0]
// var temp2 = arrayOfcars[1]
// var temp3 = arrayOfcars[arrayOfcars.length-1]
// arrayOfcars[0] = temp3;
// arrayOfcars[arrayOfcars.length-1] =temp;

// console.log(arrayOfcars);


///////////// exercise 4: /////////

// var newArray = [5,3,7,8,11];
// var sumOfArray = 0;

// for(var i=0; i<newArray.length; i++){
//     sumOfArray += newArray[i];
// }

// console.log(sumOfArray);
// console.log(sumOfArray /newArray.length);

///////////// exercise 5: /////////

// var names = ["guy","wase","melkamu","sharel","asaf"];

// for(var i=0; i<names.length; i++){
//     console.log(names[i]);
// }





///////////// exercise 6: /////////


// var newArray = [];

// for(var i=0; i<5; i++){
//     var userInput = (prompt("please insert a name:"));
//     newArray.push(userInput);
// }
// console.log(newArray);

///////////// exercise 7: /////////

// var namesOfCars = ["subaru","volvo","skoda","fiat","honda","kia","bmw","audi","nissan"];

// var userInput = prompt("please inert a name of a car company");

// var isAMatch = false;

// for(var i=0; i<namesOfCars.length; i++){
//     if (namesOfCars[i] == userInput){
//         isAMatch =true;
//         break;
//     }
    
// }

// if(isAMatch){
//     alert("there is amatch")
// }else{
//     alert("there is no match!")
// }


///////////// exercise 8: /////////

// var nums = [];
// var multiOfnums = 1;
// var sumOfnums = 0;

// for(var j=0; j<3; j++){
//     var userInput=Number(prompt("please Insert a number:"));
//     nums.push(userInput);
// }

// for(var i=0; i<nums.length; i++){
//     multiOfnums *= nums[i];
//     sumOfnums += nums[i];
//     if (nums[i]%2 == 0){
//         console.log("the number "+nums[i]+" is even");
//     }else{
//         console.log("the number "+nums[i]+" is not even");
//     }
// }
// console.log(multiOfnums);
// console.log(sumOfnums);


///////////// exercise 9: /////////

// for(var i=1; i<=10; i++){
//     for(var j=1; j<=10; j++){
//         console.log(i+"*"+j+"="+i*j);
//     }
// }

///////////// exercise 10: /////////

// var namesOfCars = ["subaru","volvo","skoda"];

// var numsOfUser =[];

// for (var i=0; i<namesOfCars.length; i++){
//     var userInput = Number(prompt("please inser a number:"));
//     numsOfUser.push(userInput);

// }

// for (var i=0; i<namesOfCars.length; i++){
//     for(var j=0; j<numsOfUser[i]; j++){
//         console.log(namesOfCars[i])
//     }
// }


///////////// exercise 11: /////////

// for(var i=1; i<=1000; i++){
//     if( i%7 == 0 || String(i).includes('7')){
//         console.log("BOOM!");
//     }else{
//         console.log(i);
//     }

// }