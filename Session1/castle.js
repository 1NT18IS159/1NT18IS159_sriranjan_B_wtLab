const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
let flag = false;
b1.addEventListener('mouseenter', ()=>{
    console.log("Entered the free land");
});
b2.addEventListener('mouseenter', ()=>{
    console.log("You're in the moat!");
});
b3.addEventListener('mouseenter', ()=>{
    console.log("Witness the beautiful cityscapes");
});
b4.addEventListener('mouseenter', ()=>{
    console.log("You have entered the castle! Click to fight or leave only to be slain!");
});
b4.addEventListener('click', ()=>{
    flag = true;
});
b4.addEventListener('mouseleave', ()=>{
    if(!flag)
    {
        console.log("dead");
    }
    else{
        console.log("alive");
        flag=false;
    }
});