document.addEventListener("DOMContentLoaded", function(){

    const slider = document.querySelector('.slider');
    let counter = 1;

    setInterval(()=>{
        slider.style.transition = "Transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-counter * 80}%)`;
        counter++;

        if (counter === slider.children.length){
            setTimeout(()=>{
                slider.style.transition = "none";
                slider.style.transform = 'translateX(0)'
                counter = 1;
            },25)
        }
    },4500)
})

const inicioBtn = document.querySelector("#loginBtn");
const regisBtn = document.querySelector("#registerBtn");
const confirmBtn = document.querySelector(".button-confirm");

const formL = document.querySelector(".container");
const formR = document.querySelector(".container2");

const sesion = () => {
    inicioBtn.style.display = "none";
    regisBtn.style.display = "none";
    formL.style.display = "block";
    formL.style.bottom = "40px";
    formL.style.width = "460px";
    formL.style.borderRadius = "20px";
    formR.style.display = "none";
}

inicioBtn.addEventListener("click", sesion);

const regis = () => {
    inicioBtn.style.display = "none";
    regisBtn.style.display = "none";
    formR.style.display = "block";
    formR.style.bottom = "0px";
    formR.style.width = "460px";
    formR.style.borderRadius = "20px";
    formL.style.display = "none";
}

regisBtn.addEventListener("click", regis);

const back = () => {
    inicioBtn.style.display = "block";
    regisBtn.style.display = "block";
    formL.style.display = "none";
    formR.style.display = "none";
}

confirmBtn.addEventListener("click", back);

function mostrarTabladeTipos() {
  var TablaTipos = document.getElementById("TablaTipos");
  if (TablaTipos.style.display === "none") {
    TablaTipos.style.display = "block";
  } else {
    TablaTipos.style.display = "none";
  }
}

window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
      document.querySelector('.go-top-container').classList.add('show');
       
    }
    else{
      document.querySelector('.go-top-container').classList.remove('show');
    }
  }
   
  document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
