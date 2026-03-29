let boxes= document.querySelectorAll('.box');
let Reset_btn= document.querySelector('.r-btn');
let New_btn=document.querySelector('.N-btn');
let Msg=document.querySelector('.msg');
const win_patterns=[[0,1,2],[0,3,6],[0,4,8],
[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];
let turn=true;
boxes.forEach(box => {
    box.addEventListener('click',()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled= true;
        checkWinner();
    })
});
const DisableBoxes= ()=>{
    for (const box of boxes) {
        box.disabled =true;
    }
}

const EnableBoxes= ()=>{
    for (const box of boxes) {
        box.disabled =false;
        box.innerText="";
        Msg.innerText="";
    }
}
const showWinner = (a)=>{
    Msg.innerText=a+" is Winner";
    DisableBoxes();
    }
function checkWinner(){
    for (const pattern of win_patterns) {
        let p1= boxes[pattern[0]].innerText;
        let p2= boxes[pattern[1]].innerText;
        let p3= boxes[pattern[2]].innerText;
    
    if(p1 !="",p2 !="",p3 !=""){
        if(p1===p2 && p2===p3){
            showWinner(p1);
        }
    }
    }
}
const R_Game= ()=>{
    EnableBoxes();
}
Reset_btn.addEventListener('click',R_Game);
New_btn.addEventListener('click',R_Game);