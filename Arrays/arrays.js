// var a=[10,"FSB Batch",true,undefined,null]
// console.log(a);
// console.log(a[3]);
// console.log(a.length-1);
// console.log(a.length);


// let myName = "Shankar";
// let place = "Chennai";


// console.log( "My name is " + myName + " im from" +" "+ place );

// // Syntax : `String ${variable_name}`

// console.log( `My name is ${myName} im from ${place}  `  ); // Template Literal - Back Tick

// for(i=0;i<=a.length-1 ; i++)
// {
//     console.log(a[i]);
// }

// var a = "kesavan"

// var b = 2;

// var c = true ; 

// var d = [ a, 3, " 1,3,4,5" ]

// var e = { 
//     bike : " MT-150 ",
//     brand : "Yamaha",
//     prize : [ 175000, 190000, 20000  ]
//  }

 let a = [1,2,3,4,5,6,7];

    a.length = 4;

 console.log(a);


//WAFT print all the values of an array

// function printAll(arr) 
// {
//    for(i=0; i<=arr.length-1; i++)
//    {
//     console.log(arr[i]);
//    }    
// }
// printAll([10,20,30,40,50])

// function printCountOf5(a) {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//        if( a[i]==5 ){
//          count++;
//        }
        
//     }
//     console.log( "5 is repeated for "+count+" times" ); 

// }
// printCountOf5([ 1,5,2,3,5,7,8 ]) 

//print all the even values of an array

// function printEven(a) 
// {
//     for (let i = 0; i < a.length; i++) 
//     {
//         if (a[i]%2==0) 
//         {
//            console.log(a[i]);    
//         }
        
//     }
// }
// printEven([10,11,12,13,14])

// //print all the odd values of an array

// function printOdd(b) 
// {
//     for (let j = 0; j < b.length; j++) 
//     {
//         if (b[j]%2==1) 
//         {
//            console.log(b[j]);    
//         }
        
//     }
// }
// printOdd([10,11,12,13,14])

//-------------------------------------------------------

//print the sum of all the values in an array

// function printAllSum(c) 
// {
//     let sum=0;
//     for (var i = 0; i < c.length; i++) 
//     {
//         sum  =sum + c[i];
//     }
  
//     // console.log(sum);
// }
// printAllSum([1,2,3,4,5,6]);
// printAllSum([1,4,3])

//---------------------------------------------------------

//print the product of all the values in an array

// function printAllMult(d) 
// {
//     let pro=1;
//     for (let i = 0; i < d.length; i++) 
//     {
//         pro  =pro * d[i];
//     }
//     console.log(pro);
// }
// printAllMult([1,2,3,4,5,6]);
// printAllMult([1,4,3])

//--------------------------------------------------------------

//print the count number of even numbers and odd numbers in an given numbers.

// function countEvenOdd(eo) 
// {
//   let countEven=0;
//   let countOdd=0;
//   for (let i = 0; i < eo.length; i++) 
//   {
//     if (eo[i]%2==0) 
//     {
//        countEven++;    
//     }
//     else
//     {
//         countOdd++;
//     }
//     //eo[i]%2==0? countEven++: countOdd++;
//   }
//   console.log(`The given array has ${countEven} even number`);
//   console.log(`The given array has ${countOdd} odd number`);
// }
// countEvenOdd([1,45,66,77,88,99,100,111,120])

//---------------------------------------------------------------------

//print the maximum value in an array

// function max(max,value) 
// {
//    let result=false;

//    for (let i = 0; i < max.length; i++) 
//    {
//     //  if (max[i]==value) 
//     //  {
//     //    console.log(max[i]);
//     //    break; 
//     //  }

//         if (max[i]==value) 
//         {
//            result=true;
//           break;
//         }
    
//    } 
//    console.log(result);
// }
// max([1,2,3,5,4,5],5);
// max([1,2,3,10,4,5,15],15)

//----------------------------------------------------------------

//print the value in an array

// function find(find,val) 
// {
//    let result=-1;

//    for (let i = 0; i < find.length; i++) 
//    {
//     //  if (max[i]==val) 
//     //  {
//     //    console.log(max[i]);
//     //    break; 
//     //  }

//         if (find[i]==val) 
//         {
//            result=i; 
//         }
    
//    } 
//    console.log(result);
// }
// find([1,2,3,5,4,5],6)

//----------------------------------------------------

//print the max value 

// function findMax(maxi) 
// {
//     let num=0;
//     for (let i = 0; i < maxi.length; i++)
//     {
//         if (maxi[i]>num) 
//         {
//            num=maxi[i]   
//         }       
//     }
//     console.log(num);
    
// }
// findMax([2,5,8,4,3])

// //print the min value

// function findMin(mi) 
// {
//   let min=2;
//   for (let i = 0; i < mi.length; i++) 
//   {
//     if(mi[i]<min)
//     {
//         min=mi[i];
//     }
//   }
//   console.log(min);  
// }
// findMin([5,4,3,2,8])

//----------------------------------------------------------------------

//print the sort from less to high of the given arrray

// function sortLess(s) 
// {
//     for(let i=0; i<s.length; i++)
//     {
//        for(j=i+1; j<s.length; j++)
//        {
//          if(s[i]>s[j])
//          {
//            var temp=s[i];
//            s[i]=s[j];
//            s[j]=temp;
//          }
//        }
//     } 
//     console.log(s);
// }
// sortLess([5,1,6,3,2])
//----------------------------

//print the sort from high to less of the given arrray

// function sortHigher(h) 
// {
//     for(let i=0; i<h.length-1; i++)
//     {
//        for(j=i+1; j<h.length; j++)
//        {
//          if(h[i]<h[j])
//          {
//            var temp=h[i];
//            h[i]=h[j];
//            h[j]=temp;
//          }
//        }
//     } 
//     return h;
// }
// console.log(sortHigher([3,1,4,5,2]));

// function nthLarge(s,n) 
// { 
//     var x=sortLess(s);
//     console.log(x);
//     var maximum= x[x.length-1];
//     console.log(max);
//     return n;
// }
// console.log(nthLarge([s,n]));

//-----------------------------------------

//print the array in reverse

// function sortReverse(rev) 
// {
//   for(let i=0;i<(rev.length)/2;i++)
//   {    
//     var temp=rev[i];
//     rev[i]=rev[rev.length-1-i];
//     rev[rev.length-1-i]=temp;
//   }
//   console.log(rev);
// }
// sortReverse([1,2,3,4]);
// sortReverse([1,2,3,4,5])
// sortReverse([1,2,3,4,5,6])

// ------------------------------------------

// function sortReverse(rev) 
// {
//   for(let i=0,j=rev.length-1;i<(rev.length)/2,j<0; i++,j--)
//   {
//     // var temp=rev[0];
//     // rev[0]=rev[rev.length-1];
//     // rev[rev.length-1]=temp;

//     // var temp1=rev[1];
//     // rev[1]=rev[rev.length-2];
//     // rev[rev.length-1]=temp1;
//     var temp=rev[i];
//     rev[i]=rev[j];
//     rev[j]=temp;


//   }
//   console.log(rev);
// }
// sortReverse([1,2,3,4]);
// sortReverse([1,2,3,4,5])

//POP method
// var p = [1,2,3,4,5];

// p.pop();  //pop is used to delete the last element
// p.pop();

// console.log(p);



// var maxNum = ["Kesavan","Brother","i","j","Sibling"];

// var [a,b,c,d,e] = maxNum ;

// console.log(Math.max(a,b,c,d,e));

// console.log(maxNum.sort());

//----------------------------------------------------

// function findMax(a) 
// {
//   let max = 0 ;
//   for (let i = 0; i < a.length; i++) 
//   {
//     if (a[i]>max) 
//     {
//       max = a[i];
//     }  
//   }
//   console.log(max);
// }
// findMax([1,2,3,40,5,10,30])


// function findMin(a) 
// {
//   let min = 1000 ;
//   for (let i = 0; i < a.length; i++) 
//   {
//     if (a[i]<min) 
//     {
//       min = a[i];
//     }  
//   }
//   console.log(min);
// }
// findMin([1,2,3,40,5,10,30])

//TO DELETE DUPLICATE ELEMENTS===========================>

// const arr = [1,2,3,4,1,2,5,5,6,7,5,10,10];

//const arr2 = [...new Set(arr) ];

// const arr2 = arr.filter((val,ind)=>  
//                                 {
//                                     return arr.indexOf(val) == ind ;
//                                 })
// console.log(arr2);

//----------------------------------------------

// let str1 = "My name is Kesavan";
7
// console.log( str1.replace( "kesavan", "K7"  ) );

//------------------------------------------------

// let rupees = 'Rs.250'

// console.log( rupees.padEnd( 7, '0' ) );
// console.log( rupees.padEnd( 9, '0' ) );
// console.log( rupees.padEnd( 7, '4' ) );
// console.log( rupees.padEnd( 9, '4' ) );
// console.log( rupees.padStart( 9, '4' ) );



