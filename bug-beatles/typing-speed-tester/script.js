const inputt = document.querySelector(".input #textarea");
const textarea = document.querySelector("#textarea");
const text = document.querySelector("#text-sample p");
const button = document.querySelector("#button");
const time = document.querySelector("#time");
const button2 = document.querySelector("#button2");
const wpmm = document.querySelector("#words");
const cpmm = document.querySelector("#char");
const err = document.querySelector("#error");
const accuracy = document.querySelector("#accuracy");

var timer = [0,0,0,0];
var interval;
var run=false;
var clock=0;
var wpm=0;
var cpm=0;
var chh=0;
var er=0;
var sample = ["At first the professor scowled with concern. But then he said, that's all right. Run to my house. Tell my wife to give you one of my shirts. Mrs. Esputa quickly fetched one of her husbands white shirts. But when Philip put it on, she began to exclaim, Oh, dear! Gracious! The shirt was so large that Philip was almost lost in it. Hastily Mrs. Esputa found a box of pins. In a twinkling, her nimble fingers pinned enough tucks in the shirt to make it fit Philip. They both heaved a big sigh of relief when the job was finished." , "The Airbus A380 is the largest passenger plane that has ever been built. It can carry more passengers and cargo than any other airplane and its designers say that it uses less fuel and make less noise. The A 380 is a giant in the skies. Its wings span about 80 meters and it has a length of 73 meters. When filled with passengers the A 380 weighs over 500 000 kg. It has three decks - two passenger decks and one for cargo." , "When the man first began to think, he asked himself the deepest of all questions a question which you have undoubtedly asked yourself many times: What is the meaning of Life? What is it all about? Where are we all going? What drives men ever forward to work and worry? And now there's this other big question-a newer question which is beginning to force itself into our notice. One that is not ages old. That has not been with us since man first began to think." , "Cars are automobiles that can transport people. It is the main means of travelling for hundreds of millions of people all over the world. Cars have changed the way we live probably more than any other invention in history. At first only a few people had cars but after a while more and more people bought them because they improved the way people lived. Farmers with cars were able to bring their products to places that were farther away." , ];

//change the sample text
function changeText(){
    let textt = sample[Math.floor(Math.random() * sample.length)];
    text.innerHTML = textt;
    reset();
}

//add leading zero to numbers 9 or below (purely for aesthetics):
function lead(time){
    if(time <= 9){
        time = "0" + time;
    }
    return time;
}

//run a standard minute/second/hunderedth clock
function runclock(){
    if(timer[2]==99)
    clock++;
    let currentTime = lead(timer[0]) + ":" + lead(timer[1]) + ":" + lead(timer[2]);
    time.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

//match the text with the sample text
function spellCheck(){
    let textEntered = textarea.value;
    let textSample = text.innerHTML.substring(0, textEntered.length);
    if(textEntered == text.innerHTML){
    clearInterval(interval);
    inputt.style.borderColor = "#429890";
    analysis();
    } else {
        if(textEntered == textSample){
    inputt.style.borderColor = "#65CCf3";
    }
    else{
    inputt.style.borderColor = "#E95D0F";
    er++;
    console.log(er);
    }
}
}

//run the timer
function start(){
    let textEnteredLength = textarea.value.length;
    chh=textEnteredLength;
    if(textEnteredLength === 0 && !run){
        run = true;
    interval = setInterval(runclock, 10);
    }
}

//reset the timer
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    run = false;
    textarea.value = "";
    time.innerHTML = "00:00:00";
    inputt.style.borderColor = "grey";
    clock=0;
    chh=0;
    wpmm.innerHTML = "Words Per Minute: 0";
    cpmm.innerHTML = "Characters Per Minute: 0";
    err.innerHTML = "Errors: 0";
    accuracy.innerHTML = "Accuracy: 0%";
}

//finding analysis
function analysis(){
    cpm = Math.round(((chh / clock) * 60));
    wpm = Math.round((((chh / 5) / clock) * 60));
    let charr = "Characters Per Minute: " + cpm;
    let word = "Words Per Minute: " + wpm;
    let c = (chh - (er));
    let acc = ((c / chh) * 100);
    wpmm.innerHTML = word;
    cpmm.innerHTML = charr;
    err.innerHTML = "Errors: " + er;
    accuracy.innerHTML = "Accuracy: " + Math.trunc(acc) + "%";
}

//event listeners for keyboard input and the reset button
button2.addEventListener("click", changeText, false);
textarea.addEventListener("keypress", start, false);
textarea.addEventListener("keyup", spellCheck, false);
button.addEventListener("click", reset, false);