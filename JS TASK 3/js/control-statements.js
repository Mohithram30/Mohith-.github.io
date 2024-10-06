// if Conditions
let num = 10;

if (num > 5) {
  console.log("Number is greater than 5");
}

let no = 3;

if (no > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}

/// Loops
// While loop
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

   // do while loop
   let a = 0;

do {
  console.log(a);
  a++;
} while (a< 5);

 // for in loop
 let myDetials={
    name:"Mohith",agr:"23",gender:"male"
   }
   for(let detials in myDetials){
    console.log(detials+" = "+myDetials[detials]);
   }

   // for of loop
   let color=['red','blue','green']
    for (const colour of color) {
        console.log(colour);
        
    }
    // forEach loop
    let values=[1,2,3,4,5];
    values.forEach((values)=>{
        console.log(values);
        
    })

        // switch case
        let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:s
    console.log("Unknown day");
}