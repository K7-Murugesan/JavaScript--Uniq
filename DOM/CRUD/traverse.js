function sample() 
        {
            //PARENT
            // let list1=document.querySelector("li");
            // // console.log(list1);
            // console.log(list1.parentElement); 
            // console.log(list1.parentNode);

            //CHILD
            //  let orderlist=document.querySelector("ol");

            //  console.log( orderlist.nextElementSibling );

            //  console.log(orderlist.children);
            // //  console.log(orderlist.childElementCount);
            //  console.log(orderlist.childNodes);          //property
            //  console.log(orderlist.firstChild);
            //  console.log(orderlist.firstElementChild);

            // console.log(orderlist.hasChildNodes()); // method

            //SIBLING
            let head = document.querySelector("h1");

            let hor = document.querySelector("hr")

            console.log( head.nextSibling );
            console.log( head.nextElementSibling );
            console.log( head.previousSibling);
            console.log( hor.previousElementSibling );

            // let li1=document.querySelector("li");
            //  console.log(li1.nextSibling);
            //  console.log(li1.previousSibling);
            //  console.log(li1.nextElementSibling);
            // console.log(li1.previousElementSibling);
        }
       // sample(); ------>