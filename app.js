let gameSeq = [];
let userSeq = [];

// btns of html file having same class
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
    } //game started only once with this condition;

    levelUp();
});

// button flash karega
function btnFlash(btn){
  btn.classList.add("flash"); //flash add karne se btn ka color white hua
  setTimeout(function(){   // phir flash class remove kar lia 
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash"); //flash add karne se btn ka color white hua
    setTimeout(function(){   // phir flash class remove kar lia 
      btn.classList.remove("userflash");
    }, 250);
  }

function levelUp(){//increasing the level
    userSeq = [];
    level++;
    h2.innerText = `level-${level}`;

    // random button choose karega
    let randIdx = Math.floor(Math.random()*3);//dega 0 1 2
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);//.yellow , .green jaise class select karna 
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    btnFlash(randBtn); // value pass hogi funct me
}


function checkAns(idx){
    // console.log(`current level:`, level);
    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
         setTimeout(levelUp, 1000);
       }
    }else{
        h2.innerHTML= `Game Over!! Your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

// user jab button press kare jab
function btnPress(){
    // console.log(this); //this wahi button hoga jispe click hoga
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}




// done hain .. bye