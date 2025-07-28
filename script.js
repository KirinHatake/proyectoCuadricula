//diseño de header;

const header = document.querySelector(".header");
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.margin = "0px";

const title = document.querySelector(".title");
title.style.fontSize = "90px";
title.style.color = "black";
title.style.fontFamily = "poppins";
title.style.margin = "0px";
title.style.textAlign = "center";
title.style.textShadow = "2px 2px 4px #000000";






//container
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "space-between";
container.style.border = "2px solid #2f2f2f";
container.style.maxWidth = "   900px";
container.style.maxHeight = "500px";
container.style.minWidth = "400px";
container.style.minHeight = "500px";
container.style.padding = "0px";
container.style.boxSizing = "border-box";
container.style.gap = "0px"; 
container.style.backgroundColor = "white";
container.style.borderRadius = "5px";


//body
const body = document.querySelector("#body");
body.style.border = "2px solid black";
body.style.padding = "15px";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.backgroundColor = "#ADD8E6";

//button 

const containerbutton = document.createElement("div");
containerbutton.style.display = "flex";
containerbutton.style.margin = "10px";
containerbutton.style.gap = "50px";
body.appendChild(containerbutton);
body.insertBefore(containerbutton, container);

//size button
const sizebutton = document.createElement("button");
sizebutton.style.margin = "10px";
sizebutton.className = "button";
sizebutton.textContent = "Tamaño";
sizebutton.style.backgroundColor = "#f1daca";
sizebutton.style.border = "2px solid black";
sizebutton.style.borderRadius = "5px";
containerbutton.appendChild(sizebutton);
sizebutton.style.fontSize = "20px";
sizebutton.style.fontFamily = "poppins";

sizebutton.onclick = () => cuadros();


//clear button
const clearbutton = document.createElement("button");
clearbutton.style.margin = "10px";
clearbutton.textContent = "Limpiar";

clearbutton.onclick = () => {
  clearcuadros();
};

clearbutton.style.backgroundColor = "#f1daca";
clearbutton.style.border = "2px solid black";
clearbutton.style.borderRadius = "5px";
containerbutton.appendChild(clearbutton);
clearbutton.style.fontSize = "20px";
clearbutton.style.fontFamily = "poppins";



//funcion para cambiar el color de los cuadros


function randomColor() {
    const hue = Math.floor(Math.random() * 360);
    return "hsl("+ hue +", 70%, 65%)";


}

function clearcuadros() {
    colors = document.querySelectorAll(".cuadro");
    colors.forEach(cuadro => {
        cuadro.style.backgroundColor = "white";
    })
    }


  


//funcion para la cuadricula

function cuadros() {
    container.innerHTML = "";
    
    let contador = 0;
    let val = prompt("Ingrese el número de cuadros hasta el 100");
    val = Number(val);
    if (isNaN(val) || val < 2){
      val = 16
      contador = val * val;

    }        
    else if (val > 50) {
        val = 50;
        contador = val * val;
    }
    
    else {
        contador = val * val;

    }
 
    for (let i = 0; i < contador; i++) {
        const cuadro = document.createElement("div");
        cuadro.className = "cuadro  ";
        cuadro.style.boxSizing = "border-box";

        cuadro.style.flexBasis = "calc(100% / " + val + ")";
        cuadro.style.border = "1px solid  #F5F5F5";
        container.appendChild(cuadro);

      

 
    }
    const colors  = document.querySelectorAll(".cuadro");
   colors.forEach(cuadro => {
        cuadro.addEventListener("mouseover", () => {
            cuadro.style.backgroundColor = randomColor();
        });
    });
}   



