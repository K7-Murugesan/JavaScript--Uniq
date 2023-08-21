//Write a function to count  the word in the string

// function printCount(str) 
// {
//     str = str + " ";
//     let word=0;
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i] == " ")
//         {
//            word++;
//         }  
//     }
//     //console.log(str!=""? word+1: word);
//     console.log(word);
    
// }
// printCount("My name is Kesavan")

// //WAFT print the words in the string

// function printWord(str1)
// {
//     str1= str1+" ";
//     let word="";
    
//   for (let i = 0; i < str1.length; i++) 
//   {
//     if(str1[i]!=" ")
//     {
//         word=word+str1[i];
        
//     }
//     else
//     {
//         console.log(word);
//         word="";
//     }
//   }
    
// }
// printWord("My name is Kesavan")

// //WAFT check where the position of the substring is present..

// function printSame(a,same) 
// {
//   var count=1;
//   //var res = false;  
//   var res="word is not present" //instead of false give "word is not present"
//   a=a+" ";
//   let w ="";
//   for (let i = 0; i < a.length; i++) 
//   {
//     if (a[i]!=" ")      //not a space concat
//     {
//        w=w+a[i];    
//     }
//     else                //char is space so word has formed
//     {
//        if (w==same)     //formed word is it same as given word
//        {
//           //res=true;  
//           res=`word is present in ${count} position` //instead of true give "word is present"
//           break;
//         }
//        w=""             //each time reassigning w to empty
//        count++;   // count the number of word//for count a value 
//     }
//   }
//   console.log(res);
// }
// printSame("white board marker pen","marker")
// printSame("white board marker pen","white")
// printSame("white board marker pen","k7")

//==================================================================================================
//WAFT find the given sub string in the string

// function find(str,subStr) 
// {
//   let res=false;
  
//   for (let i = 0; i < str.length; i++) 
//   {
//     let conc="";
//     for (let j = i ; j < (i+subStr.length); j++) 
//     {
//       conc=conc+str[j];
//     }
//     //console.log(conc);
//     if (conc==subStr) 
//     {
//       res=true;

//     }
    
//   }
  
//   console.log(res); 
// }
// find("my name is k7","me is");
// find("my name is k7","name");
// find("my name is k7","nme");

//===================================================================

// //WAFT find the position of substring where it is started in the given parameter

// function indposition(str,subStr) 
// {
//   let res="not found";
  
//   for (let i = 0; i < str.length; i++) 
//   {
//     let conc="";
//     for (let j = i ; j < (i+subStr.length); j++) 
//     {
//       conc=conc+str[j];
//     }
//     if (conc==subStr) 
//     {
//       res=`The given substring "${subStr}"is strats from ${i} index position`;

//     }
    
//   }
  
//   console.log(res); 
// }
// indposition("my name is k7","me is");
// indposition("my name is k7","name");
// indposition("my name is k7","nme");


//WAFT find the largest word in the given string

// function max(str) 
// {
//   str=str+" ";
//   var maxword="";
//   var maxlen=0 ;
//   var word="";
//   for (let i = 0; i < str.length; i++) 
//   {
//     if(str[i]!="")
//     {
//         word=word+str[i];
//     }
//     else
//     {
//         if (word.length>maxlen) 
//         {
//            maxlen=word.length;
//            maxword=word;  
//         }
//         word="";
//     }  
//   }
//   console.log(maxword);
// }
// max("my name is Kesavan")

// STRING INBUILT METHODS

// var str = "My name is Kesavan"
// console.log(str.substring(3));
// console.log(str.substring(2,6));
// console.log( str.substr(2,7)  ); 
// // console.log( str.substr(3)  );
// console.log(str.endsWith("m"));
// console.log(str.startsWith("M"));
// console.log(str.repeat(3));
// console.log(str.replace("Kesavan","K7"));
// // console.log(str.toLowerCase());
// // console.log(str.toUpperCase());
// // console.log(str.trim());
// // console.log(str.trimEnd());
// // console.log(str.trimStart());
// console.log(str.charCodeAt(4));
// // console.log(str.charAt(1));
// console.log(str.concat("...I'm gonna start the race"));

// var a =[1,2,3,4,5]
// var b=[...a];
// a[2]=6;

// console.log(a);
// console.log(b);

//  var str = " Kesa va n "

//  console.log(str.trim());
//  console.log(str.trimEnd());
//  console.log(str.trimLeft());

// let str = "Kes*av*an" ;
let str = "Kes,av,an" ;

// console.log(str.repeat(2));

// console.log(str.split(",").join());
// console.log(str.split("*"));


// let str = "My name is Kesavan"

// str = str + " Murugesan"


// console.log(str);

//TO DELETE DUPLICATE ELEMENTS===========================>

const arr = [1,2,3,4,1,2,5,5,6,7,5,10,10];

const arr2y = [...new Set(arr) ];

console.log( arr2y );

// const arr2 = arr.filter((val,ind)=>  
//                                 {
//                                     return arr.indexOf(val) == ind ;
//                                 })
// console.log(arr2);
// console.log(arr2y);



// var str = "Me Kesavan";

// console.log(str.substring(2,5));

// console.log(str.substr(2,5));



let d1 = new Date();

console.log(d1.toString());
console.log(d1);



