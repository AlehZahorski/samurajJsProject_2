document.body.style.height = "10000px";
const newDiv = document.createElement('div');
let heightSquare = 50;
document.body.appendChild(newDiv);
newDiv.style.width="100%";
newDiv.style.backgroundColor="rgb(196, 196, 216)";
newDiv.style.height= `${heightSquare}px`;
newDiv.style.position="fixed";
newDiv.style.top="0";
newDiv.style.left="0";
let trueOrNo = true;

function changeHeight(){
    newDiv.style.height= `${heightSquare}px`;
    console.log('dziala rzeczywiscie bo juz wstyd zeby az tak prostej rzeczy nie ogarnac');
    if(trueOrNo == true){
        newDiv.style.backgroundColor="rgb(196, 196, 216)";
        heightSquare++;
    }else{
        newDiv.style.backgroundColor="rgb(196, 96, 216)";
        heightSquare--;
    }
    if(heightSquare == 200){
        trueOrNo = false;
    }else if(heightSquare == 50){
        trueOrNo = true;
    }
}

window.addEventListener('scroll', changeHeight);