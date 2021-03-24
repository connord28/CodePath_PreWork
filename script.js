// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var guessTimer = 20;
var timer;
var mistakes = 0;

var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var cluePlaying = false;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  cluePlaying = false;
  
  clueHoldTime = 1000; 
  cluePauseTime = 333; 
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("mistakes").innerHTML = mistakes;
  
  
  for(let i=0;i<=8;i++) {
    pattern[i] = Math.floor(Math.random()*6 + 1);
  }
  document.getElementById("time").innerHTML = 20;
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("time").innerHTML = 20;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearInterval(timer);
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 300,
  3: 350,
  4: 400,
  5: 450,
  6: 500
}
function playTone(btn,len){ 
  //o.frequency.value = freqMap[btn]
  //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  document.getElementById("audio"+btn).play();
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    //o.frequency.value = freqMap[btn]
    //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    document.getElementById("audio"+btn).play();
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessTimer = 20;
  document.getElementById("time").innerHTML = guessTimer;
  guessCounter = 0;
  cluePlaying = true;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  setTimeout(setTimer,delay);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  clearInterval(timer);
}

function winGame(){
  stopGame();
  alert("Congratulations, You Win!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying || cluePlaying){
    return;
  }
  // add game logic here
  if(btn == pattern[guessCounter]) {
    if(guessCounter == progress) {
      if(progress == 8) {
        winGame();
        return;
      }
      else {
        progress++;
        clueHoldTime -= 100;
        cluePauseTime -= 33;
        clearInterval(timer);
        playClueSequence();
      }
    }
    else {
      guessCounter++;
      return;
    }
  }
  else {
    mistakes++;
    document.getElementById("mistakes").innerHTML = mistakes;
    if(mistakes < 3) {
      clearInterval(timer);
      playClueSequence();
    }
    else
      loseGame();
  }
}

function setTimer() {
  timer = setInterval(guessClock, 1000);
  cluePlaying = false;
}

function guessClock() {
  if(gamePlaying) {
    if(guessTimer == 0) {
      loseGame();
    }
    else {
      guessTimer--;
    }
    document.getElementById("time").innerHTML = guessTimer;
  }
  else
    clearInterval(timer);
}