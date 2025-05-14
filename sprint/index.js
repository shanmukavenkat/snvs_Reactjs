
function createDoElement(data){
let parentElemet   = document.getElementById("main-area");
parentElemet.innerHTML = "";
//help us to get the dive element with id = "main-area"

for (var i=0;i<data.length;i++){
    var childElemenet = document.createElement("div");

    var grandChildElement = document.createElement("span");
    grandChildElement.innerHTML = data[i].title

    var grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = data[i].description

    var grandChildElement3 = document.createElement("button");
    grandChildElement3.innerHTML = "Delete";

    childElemenet.appendChild(grandChildElement)
    childElemenet.appendChild(grandChildElement2)
    childElemenet.appendChild(grandChildElement3)

    parentElemet.appendChild(childElemenet)
}
}
// window.setInterval( ()=>{
//     createDoElement([{
//     title:'Hello World',
//     description:'Eat nutritious food',
//     }],1000)
// })

window.setInterval(()=>{
    let todos = [];
    for (let i = 0; i<Math.floor(Math.random()*100);i++){
        todos.push({
            title: 'Hello World',
            description: 'Eat nutritious food',
            id:i++
        }
                ,{
            title: 'Go to span',
            description: 'Go to react',
            id:2
            }
        )
    }
    createDoElement(todos);
})
//// all the websites like amazon, flipkart, etc.
// there are  --> dynamic Websites < --
// the html is not pre written
// the data that is coming from the backend is dynamic
// we can't written the pre html
// how many times we can refresh the data is same it is the static website
// and the data that is changing in the linkedin and other social media platforms are the dynamic websites
// this concept of including the html elements and the js elements are known as the state elements
// to manage the entire content we are using the javascript functions
// to create the elements dynamically
//------>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Reconciliation React Reconciliation refers to React’s process of comparing the current and previous states of the Virtual DOM and updating the DOM efficiently
// for example when you open the instagram and you see the feed that which is changing dynamically and data is coming from the backend
// ___________________________________________________
// the react also do the same thing and do it in the more efficient way
// state ==> if there is any change the react will make the dom elements operations
// and it will create the elements
