``

//function sample() 
//{
//innerText / textContent - property used to display the text 
//var head = document.querySelector("h1");
//var x = head.innerText;
//console.log(x);

//value - property used to display the text inside input tag where user can give some input
//var input = document.querySelector("input");
//var x = input.value;
//console.log(x);
//}
function sample() {
    // var input = document.querySelector("input")



    // var inputValue = input.value;
    // head.innerHTML = input.value 
    // console.log( head );
    // head.innerText = input.value;
    // document.body.append(head);
    // document.body.prepend(head);

    //createElement("Tag Name")
    //append(Child name) -----> it will add at bottom 
    //prepend(Child name) -----> it will add at top

    //var input = document.querySelector("input");
    // var parentElement = document.querySelector("ol")
    // var list = document.createElement("li");

    // list.textContent = input.value ; 
    // // parentElement.append(list);
    // parentElement.appendChild(list);
    // parentElement.prepend(list);
    // document.querySelector("ol").append(list);


    // Insert before existing child:
    const newNode = document.createElement("li");
    newNode.innerText = "Water";
    const list = document.getElementById("myList");
    list.insertBefore(newNode, list.children[1]);

    //Using InsertBefore and removeChild

    const parentElement = document.getElementById("parent");

    // Using insertBefore()
    // const newElement = document.createElement("div");
    // newElement.textContent = "New Element using insertBefore";
    // const referenceElement = parentElement.childNodes[2]; // Third child
    // parentElement.insertBefore(newElement, referenceElement);
    //               //insertBefore( what, where )

    // Using removeChild()
    // const childToRemove = parentElement.childNodes[1]; // Second child
    // parentElement.removeChild(childToRemove);
    //removeChild( what, where )

    //-----Using replaceChild element--------//
    // Creating a new element
    const newElement = document.createElement("div");
    newElement.textContent = "New Element";
    // Getting the element to replace
    const oldElement = parentElement.childNodes[1]; // Second child
    // Replacing the old element with the new element
    parentElement.replaceChild(newElement, oldElement);

    //Using Remove
    // var head = document.querySelector("h1")
    // head.remove();


    // var list = document.createElement("li");

    // list.textContent = input.value

    // siblingElement.replaceChild( list, siblingElement[0] )
    // siblingElement.insertBefore( what, where )

    // var list1 = document.createElement("li");
    // list1.textContent=input.value ; 
    // document.querySelector("ol").prepend(list1);

    // var list2 = document.createElement("li");

    //list2.textContent = input.value;
    //document.querySelector("ol").appendChild(list2);






}