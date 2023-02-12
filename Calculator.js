const screen = document.querySelector(".screen");
console.log(screen.value);
let display="";

const btn=document.querySelectorAll(".btn");

btn.forEach((i)=>{
    i.addEventListener('click',()=>{
        if(i.textContent==="Clear"){
            screen.value=display;
        }
        else if(i.textContent==="Delete"){
            // let exp=screen.value;
            screen.value=screen.value.slice(0,(screen.value.length-1));
        }
        else if(i.textContent==="="){
            screen.value=eval(screen.value);
        }
        else{
            screen.value+=i.textContent;
        }
    });

    
    
});

// function insert(num) {
//     let display="";
//     screen=screen + num;
//     // console.log(screen);
// }

// // Use equal() function to return the result based on passed values.  
// function equal() {
//     var exp = screen;
//     if (exp) {
//         screen = eval(exp)
//     }
// }

// /* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
// function backspace() {
//     var exp = screen;
//     screen = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
// }
