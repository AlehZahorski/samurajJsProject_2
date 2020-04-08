let sizeSquare = document.getElementById('square');
let px = 100;
let square = true;
function changeSize(){
   console.log("dziala funkcja ale jestem ciekaw w jaki sposob zrobic to powiekszenie kwadratu\nps:lol w 3 min ogarnelem to");
   sizeSquare.style.width = `${px}px`;
   sizeSquare.style.height = `${px}px`;
   if(square == true){
       px++;
   }else{
       px--;
   }
   if(px == 300){
       square=false;
   }else if(px == 100){
       square=true;
   }
}
  


window.addEventListener('scroll', changeSize);