let sizeSquare = document.getElementById('square');
let px = 150;
function changeSize(){
   px++;
   console.log("dziala funkcja ale jestem ciekaw w jaki sposob zrobic to powiekszenie kwadratu\nps:lol w 3 min ogarnelem to");
   sizeSquare.style.width = `${px}px`;
   sizeSquare.style.height = `${px}px`;
   if(px == 300){
       px = 150;
   }
}

window.addEventListener('scroll', changeSize);