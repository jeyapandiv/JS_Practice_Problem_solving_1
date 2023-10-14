"use strict"


// ------------------------1------------

// let sum = 0;

// num([1,2,"13","4","645",true,false,NaN,89]);

// function num(x) 
// {
//     for (let i = 0; i < x.length; i++) 
//     {
//         if (x[i] === Number(x[i]))
//         {
//             sum = sum+x[i];
//         }
//     }
//     return sum;
// }

// console.log("sum of the numbers in the given array = " + sum);

// ------------------------2-----------

// let arr = sec([99,23,33,100,199,255,8]);

// function sec(x) {
// for(let i=0; i<x.length; i++)
// {

//     for(var j=i+1; j<x.length; j++)
//     {
//         if(x[i]<x[j])
//         {
//             let less = x[i];
//             x[i] = x[j];
//             x[j] = less;
//         }
//     }
// }
// let des_arr = x.splice(1,1);
// console.log(des_arr[0]+" is the second largest number");
// }


// -----------------or------------------


// function sec(x) {
// let large = 0;
// let sec_large = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] > large) {
//             sec_large = large;
//             large = x[i];
//         }
//         else if (x[i] > sec_large) {
//             sec_large = x[i]
//         }
//     }
//     console.log(sec_large+" is the seond largest number")
// }

// -------------------------3-----------



// let object_1 = objectToarray({D:1,B:2,C:3})


// function objectToarray(ob){
//     console.log(ob)
//         let new_array = []
//         for(let i in ob){
//             console.log(i)
//             new_array [i] =[i,ob[i]] 
//             console.log(ob[i]);
//         }
//         return new_array
// }

// console.log(object_1);

// -------------------------4------------


// let input_asc = order([22,99,1,8,100],"Asc");
// let input_des = order([22,99,1,8,100],"Des");
// let input_non = order([22,99,1,8,100],"Non");

// function order(x,order) 
// {
//     if (order == "Asc") 
//     {
//         let asc = x;
//         for (let i = 0; i < asc.length; i++) 
//         {
//             for (var j = i + 1; j < asc.length; j++) 
//             {
//                 if (asc[i] > asc[j]) 
//                 {
//                     let less = asc[i];
//                     asc[i] = asc[j];
//                     asc[j] = less;
//                 }
//             }
//         }
//         console.log(x)
//     }
//     else if (order == "Des") 
//     {
//         let des = x;
//         for (let i = 0; i < des.length; i++) 
//         {
//             for (var j = i + 1; j < des.length; j++) 
//             {
//                 if (des[i] < des[j]) 
//                 {
//                     let less = des[i];
//                     des[i] = des[j];
//                     des[j] = less;
//                 }
//             }
//         }
//         console.log(x)
//     }

//     else {
//         console.log(x)
//     }
// }

// -----------------------5-----------

// let arr =dub([1,2,2,3,4,5,4,5,5,9,"hi"]);


// function dub(x) {

//     let rem_arr = []

//     for (let i in x) 
//     {

//         if (rem_arr.indexOf(x[i]) === -1) 
//         {
//             rem_arr[i] = x[i]
//         }
//     }
//     rem_arr = rem_arr.filter(String);
//     return rem_arr
// }

// console.log(arr);





