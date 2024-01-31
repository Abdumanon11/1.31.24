




 
/* let box = document.qureSelector(`.box`) */
//let body = document.body
/* let boxes = document.qureSelectorAll(`#imposter`)
 */
 /* box.onclick = () => {
    //console.log(`click`); */
 //}
// box.ondblclick = () => {
    /* console.log(`doble click`);
// }
 //box.onmouseenter = () => {
    console.log(`entered`);
 //}
//box.onmouseleave = () =>{
   //}
box.onmousemove = () =>{
    console.log(`movig...`);
}
body.onscroll = () =>{
    console.log(`scroll...`);
}

/* console.log(boxes); */

/* let on = document.querySelector(`one`)
let off = document.querySelector(`two`)
 */    


/* button.onclick = () => {

    if(button.classList.contains('blue')) 
    { button.classList.remove('blue')
    } else {
    button.classList.add('blue')
    }
}
 */



/* 
let numContainer = document.getElementById("num");
let value = 0;

let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");
let btnRam = document.querySelector(".random")

btnInc.addEventListener("click", () => {
  value++ 
  numContainer.textContent = value;
});

btnDec.addEventListener("click", () => {
  value--;
  numContainer.textContent = value;
});

btnReset.addEventListener("click", () => { 
  value = 0;
  numContainer.textContent = value;
});

btnRam.addEventListener(`click` , () => {
    value = Math.random()
    numContainer.textContent = value
})
 */






/* 
let inp = document.querySelector(`input`)
let btn = document.querySelector(`button`)




btn.onclick= () => {
  if( inp.getAttribute(`type`) === "text"){
    inp.setAttribute(`type` , `password`)
    btn.innerHTML = "🙈" 
  }else{
    inp.setAttribute(`type` , `text`)
    btn.innerHTML= "🙊"
  }
}



 */


/* 
let btns = document.querySelectorAll('button')

btns.forEach((btn) => {
  btn.onmouseover = () =>{
    console.log( '', btn.innerText);
    document.body.style.background = btn.innerText
  }
});


 */     

/* 
btn.onclick= () => {
  if( inp.getAttribute(`type`) === ){
    inp.setAttribute(`type` , `password`)
    btn.innerHTML = ">" 
  }else{
    inp.setAttribute(`type` , `text`)
    btn.innerHTML= ">"
  }
}

*/
/* 
let img = document.querySelector(`img`)


let button = document.querySelector(`#a`)
let dblbutton = document.querySelector(`#b`)

button.onclick = () => {
    img.src = `img/pk.png` 
    
    }
    dblbutton.onclick = () => {
        img.src = `img/pk2.png`
    }

 */

/* 
const img = document.querySelector('img')

    const images = {
      titan: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
      blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311",
      white: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845706590",
      black: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845694698",
  }


  
  btns.forEach(btn => {
    btn.onclick =() => {
      let  color = btn.innerText
      img.setAttribute('src' , images(color))
    }
    
  }); */
  
  
 /* 
  button.forEach(btn => {
    btn.onclick =() => {
      let  color = btn.innerText
      img.setAttribute('src' , images(color))
    }
    
  });
 */
/* 
  let button= document.getElementsByClassName("accordion");
let i

for (i = 0; i < acc.length; i++) {
  button[i].addEventListener("click", function() {

    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {

      panel.style.display = "none";
    } else {
      
      panel.style.display = "block";
    }
  });
}
 */

/* 
const items =  document.querySelectorAll('.item')
   
items.forEach(item => {
  item.onclick = () =>{
   item.classList.toggle('active')
  }
  
});

 */




/* 
let on = document.querySelector(`#a`)
let off = document.querySelector(`#b`)



     button.onclick = () => {
    
        if(button.classList.contains('blue')) 
        { button.classList.remove('blue')
      } else {
        button.classList.add('blue')
      }
    }

 */

/* 
let button3 = document.querySelector('.text')


let button2 = document.querySelector('#a')
let blue = document.querySelector('#b')

button2.onclick = () =>{
     text.h2_1 = "White"
     
     
    }
    blue.onclick = () =>{
     text.h2_1 = "Space Gray"
     
    } */
    /* 
    function btn_1() {
      let element = document.getElementById(".h2_1");
      let currentText = element.innerHTML;

      // Пример: если текущий текст "Привет, мир!", то изменить на "Новый текст"
      let newText = (currentText === "White") ? "Space Gray" : "White";

      element.innerHTML = newText;
  }
  
  */
 
 /* 
 function btn() {
   let element = document.querySelector("btn_1");
   let element2 = document.querySelector("btn_2");
   let currentColor = element.style.background;
   let currentColor2 = element2.style.background;
   
   let newColor2 = (currentColor2 === "#797979") ? "blue" : "#797979";
   let newColor = (currentColor === "#797979") ? "blue" : "#797979";
   
   element.style.backgroundColor = newColor;
   element.style.backgroundColor = newColor2;
  } */
/* 
document.getElementById('a').addEventListener('click', function() {
  
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
  });
  
  document.getElementById('b').addEventListener('click', function() {
    
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
  });
 */  


let img = document.querySelector(`img`)


let button = document.querySelector(`#myButton`)
let dblbutton = document.querySelector(`#myButton2`)

button.onclick = () => {
    img.src = `img/pk3.png` 
    
    }
    dblbutton.onclick = () => {
        img.src = `img/pk2.png`
    }


function changeColor() {
    document.getElementById('myButton').style.backgroundColor = "#3498db";
  }

  function changeColor() {
    // установка нового текста заголовка
    let heading = document.getElementById('h2_1');
    heading.innerHTML = "Space Grey";
  }

  
  function changeColor() {
    // установка нового текста заголовка
    let heading = document.getElementById('h3_1');
    heading.innerHTML = "Space Grey";
  }




