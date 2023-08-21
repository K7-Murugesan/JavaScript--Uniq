// //pop method
// let a=[1,[2,4,5,6,7,8],3,4,5];

// var b =[19,10,20,30]

// var c = [ ...a,...b ] // spread operator
//  let [one,two,...restVariable ] = a  //Destructuring & rest operator

//   console.log( restVariable)
//   console.log( c );

// a.pop();         
// console.log(a);

//push method
// var b=[1,2,3,4,5];
// b.push(6,7,8,"abc");
// console.log(b);

//shift method

// var c=[1,2,3,4,5]
// c.shift();
// console.log(c);

//unshift method

// var d =[1,2,3,4,5];
// d.unshift(-2,-1,0);
// d.push(6,7,8)
// console.log(d);

 //includes method
//  var a1 =[1,2,3,4,5];
//  console.log(a1.includes(4));  

 //indexOf method - is used to check the index value is present or not  and it occurs first repeated value.
// var a =[1,2,3,4,4,5];
// console.log(a.indexOf(6)); //if value is not  present it return -1
// console.log( a.lastIndexOf(4) );

// //lastIndexOf- is used to check the index value is present or not ^ it occurs last repeated values

//reverse method
// var b1=[1,2,3,4,5]
// b1.reverse();
// console.log(b1);

// // sort method

// var a2 = ["cat","Apple","Bat","Desk","Donkey"]
// var a3= [1,4,2,3,5,6,9,0]
// a2.sort();
// a3.sort();
// console.log(a2,a3);

// var a3=[2,3,4,5,1,6]
// a3.sort((a,b)=>{return b-a}) //Descending Order
// console.log(a3);

// var a4=[2,3,4,5,1,6]
// a4.sort((a,b)=>{return a-b}) //Asscending Order
// console.log(a4);

// //SLICE METHOD

// //slice(start,end)

// var b2= [1,2,3,4,5]
// console.log(b2.slice());  //It remains same 
// console.log(b2.slice(2)); //

// console.log(b2.slice(1,3)); //It will get the input from starting position of index 1 to
// console.log(b2.slice(0,3));                             //ending position of index 3(index position)-1

// //SPLICE METHOD-we can add,delete and replacing.

// //splice(start,count) 
// //splice(start,count,elements)
// var b3=[10,20,30,40,50];
// b3.splice(2)  //deleting the element
// console.log(b3);
// b3.splice(2,2)    //deleting the element 
// console.log(b3); 
// b3.splice(2,2,15,16,17) //replcing the element //First Values takes as index position and second value will delete the 
// console.log(b3)   //number of elements from  mentioned index position and third values used to replace the element
// b3.splice(2)      //using this we can add the valuse before the index position we mentioned
// console.log(b3)   //and also we can add it in first,middle & last element.

// //FILL METHOD

// // fill(values)
// // fill(value,start,end)

// var b4=[10,22,33,44,55] //Using this method, Using single values we can replace  all the elements


// let obj = {
//     "my name":"Kesavan",
//     id:1,
//     place:"Chennai"
// }
// console.log( obj[ "my name" ] );



// function HOD(acceptCallBack){
//     console.log("Im Higher order Function");
// };
// function callBack() {
//     console.log("Im call back");
// }

// HOD( callBack() );

//SORT METHOD

//  var c1= [5,2,4,3,1,6,10,12,34] ;

//  console.log( c1.sort() ); // Element sorted in ASCII order

// console.log(  c1.sort((a, b) => a - b) );
// console.log(  c1.sort((a, b) => b - a) );


//FOR EACH METHOD

// var c1= [1,2,3,4,5] ;

// c1.forEach( function(val,ind,arr){
//     console.log (val>1)
// }  )

// console.log( c1 );

// c1.forEach((y,x,z)=>{console.log(y,x,z);})

// var c2=[1,2,3,4,5];
// var sum=0;
//  c2.forEach((val,ind,a)=>{ sum = sum+val});
// console.log(sum);

// c2.forEach((val,ind,a)=>{ console.log(val*3)});


// var c3=[1,2,3,4,5];
// c3.push(6);

// var product=1;
// c3.forEach((val1,ind1,a1)=>{ product = product*val1});

// console.log(product);
//-------------------------------------------------------------->

//MAP METHOD
// var a = [1,2,3,4,5,6,7]

// let b =  a.map( (val,ind,arr)=>{
//     return(arr)
// }  )

// console.log( a );
// console.log( b );
//  a.map((v)=>{return parseInt(v/3)});  //this method is used to do some operation on array elements
// console.log(a);
// var c = a.map((v)=>{return v*2});
// console.log(c);
// var d = a.map((v)=>{return v%2==1});
// console.log(d);


//FILTER METHOD

// var a = [1,2,3,4,5,6,7]
//   var b = a.map((element) => {
//         console.log( element);
//     }); 
// console.log(b);

//  var b = a.filter((v)=>{return v%2==0});   
// console.log(b);
// // var c = a.filter((v)=>{return v%2==1});
// // console.log(c);
// var d = a.filter((v)=>{return v+0.1});
// console.log(d);


//FIND METHOD

// var a = [1,2,3,4,5,6,7]

// var c = a.find((v)=>{return v>4});
// console.log(c);  //it will return the first value which safisfies the condition
  
//   FILTER METHOD
// var a = [1,2,3,4,5,6,7]

// var b = a.filter( (val)=>{
//     return val%2==1
// } )

// console.log( b );

var studentMarks = [{name: "Kesavan" , marks : 450},
                    {name: "Shailesh" , marks : 470},
                    {name: "Ganapathi" , marks : 475},
                    {name: "Anil Bhat" , marks : 480}
                   ];
                                            //val = { }
    // var filterStudents = studentMarks.filter((val)=>{ return val.marks>460});
    //                 console.log(filterStudents);
    // var filterStudents = studentMarks.forEach((val)=>{ console.log(val);});

    //  var addingExtraMark = studentMarks.map((val)=>{ return( val.marks + 10 );});


// console.log(addingExtraMark);


//REDUCE METHOD

let number = [ 1,2,3,4,5,6 ];

// let add = number.reduce( (pre,val)=>{
//     return  (pre+val);
    
// }  )
let SOME = number.every( (val)=>{
    return  (val>0);
    
}  )
console.log( SOME );

//SOME METHOD


//SET METHOD

//PAF to remove dupliate elements......

// var arr=[1,2,3,4,5,6,5,4,3,2,4,6];
// var arr = [{brand:"Hp",model:1234,price:1000},
// {brand:"Hp",model:1234,price:1000}]

// function removeDuplicate(arr)
// {
//     return [...new Set(arr)]; //it will delete the repeated elements and set a new array
// }
// console.log(removeDuplicate(arr));

// TO STRING METHOD

// var arr = [1,2,3,"KEsavan",true,null,undefined]
// console.log(arr.toString());


////====================================////////////////

// var studentMarks = [{name: "Kesavan" , marks : 450},
//                     {name: "Shailesh" , marks : 470},
//                     {name: "Ganapathi" , marks : 475},
//                     {name: "Anil Bhat" , marks : 480}
//                    ];

// for (const key of studentMarks) 
// {
//     console.log(key.marks);
// }

// for (const key in studentMarks) {
//     console.log(studentMarks[key]);
// }

// var arr = [1,2,3,4,5,6,10] ;

// var arr1 = arr.find( (val,ind,a)=>{
//     console.log(val);
// })

// console.log(arr1);

// setTimeout(function(){console.log("Hello")},5000)
// console.log( "Im waiting" );

//UNDERSTAND VAR VS LET VS CONST ---> BLOCK & FUNCTION SCOPE


// function x() 
// {
//     for (let i = 0; i <=5 ; i++) 
//     {
//         // console.log(i);
//     }
//     console.log(i);
// }
// x();


// var a = [{name:10 , age:20},2,3,4,5];

// for (const key in a) {
// //    console.log(a[key]);
//    console.log(key);
// }
// console.log("--------");

// console.log("--------------");
// var b =[{name:10 , age:20},6,3,4,5];
// for (const element of b) 
// {
//     console.log( element );
//     // console.log(element);
// }
