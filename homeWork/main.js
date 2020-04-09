document.body.style.height = "10000px";

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
let heightSquare = 50;
let trueOrNo = true;

newDiv.style.width="100%";
newDiv.style.backgroundColor="rgb(196, 196, 216)";
newDiv.style.height= `${heightSquare}px`;
newDiv.style.position="fixed";
newDiv.style.top="0";
newDiv.style.left="0";


function changeHeight(){
    newDiv.style.height= `${heightSquare}px`;
    console.log('chodzi, dobrze, plynnie tak nie za szybko  w sam raz');
    if(trueOrNo == true){
        newDiv.style.backgroundColor="rgb(196, 196, 216)";
        heightSquare += 15;
    }else{
        newDiv.style.backgroundColor="rgb(196, 96, 216)";
        heightSquare -= 15;
    }
    if(heightSquare>window.innerHeight/2){
        trueOrNo = false;
    }else if(heightSquare == 50){
        trueOrNo = true;
    }
}

window.addEventListener('scroll', changeHeight);