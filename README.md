# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Connor Daly

Time spent: **~3** hours spent in total

Link to project: https://glitch.com/edit/#!/solar-rough-horn?path=README.md%3A7%3A17

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)
<img src="https://cdn.glitch.com/a6d66cf8-2528-4a75-b9b2-92603efa6baf%2Fgif1.gif?v=1616548421013">
Shows starting and stopping the game, that the player doesn't lose on one mistake, that there are images on the buttons when pressed, and that there are 6 buttons

<img src="https://cdn.glitch.com/a6d66cf8-2528-4a75-b9b2-92603efa6baf%2Fgif2.gif?v=1616549358771">
Demonstrates that there's a new pattern each time, that there is limited time for guessing, that the display of the pattern is faster as the game progresses, and losing the game

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
<p>https://www.w3schools.com/cssref/css_colors.asp - to find colors for additional buttons</p>
<p>https://www.w3schools.com/jsref/jsref_random.asp - to find how to generate a random number in javascript</p>
<p>https://www.w3schools.com/jsref/met_win_setinterval.asp - for setInterval and clearInterval</p>
<p>https://www.w3schools.com/cssref/pr_background-image.asp - for putting images in buttons</p>
<p>https://www.w3schools.com/howto/howto_js_toggle_text.asp - for the timer and mistake counter display</p>
<p>https://programminghead.com/how-to-play-audio-in-html-using-javascript/ - for adding audio clips</p>
<p>zapsplat.com - source for the audio clips</p>

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge for me was adding the functionality for the user to have a limited amount of time to make their guess. To begin with, I already had a bit of experience with HTML and CSS, but all the javascript required for this part was new to me, so I had to do a bit of research to find how to use the functions I needed. The main challenge though, came from the fact that I already had most of the code for the game at that point, so I figured I could just add the code for the timer in and it would work. At first I didn’t plan for every way for the game to end so I ended up not stopping the timer every time. This meant that the timer was continuing even when the game was over which I could see right away, but this also caused multiple setInterval() calls to run at same time sometimes making the timer decrease extra fast, which took me a bit of time to find the root cause of. I ended up having to think through all the possible ways that the game could run to completion and fix it so that only one setInterval() call could be running at a time and whenever the game stopped it would properly clear the interval. I was able to clean up the code dealing with setInterval() and clearInterval() a bit and get everything to work, but it still is a bit messy.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One thing I would like to learn more about is how to make it so things on a page are scaled and arranged properly for different screen sizes. In this project the button arrangement is done in a way that changes based on the width of the screen, but what if I wanted to always have two rows of three buttons? Or what if I wanted to play the game on a phone screen where the buttons in the size that they are currently would be too large so you couldn’t view every button at once? Another thing I am curious about after this project, is if there is a better way to add audio to a webpage. How I did it requires having an audio tag for each audio in the HTML file and then in the Javascript file playing those audios. I would like to know if there is a way to just play the audio directly in the Javascript file without adding the audio tags to the HTML file since that makes it harder to read the HTML file. This isn’t a huge deal, but it’s something I am curious about.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

The first thing I would do would be clean up the code a bit. As I mentioned in the earlier question, when I added new features I was trying to be quick about it so I just added them to the code I already had and fixed things as needed. This means that my code is a bit more complicated than it needs to be, especially with the code dealing with giving the user a limited time to guess, and if I had more time I would simplify it to make it easier to read. Next I would improve on some of the existing functionalities such as the images on the buttons and the sounds associated with them. I didn’t want to spend a ton of time deciding on and searching for the best images and audio clips for these features since I think the main goal was just to demonstrate that I was capable of adding the features. However, if I had more time and wanted to make the game really good I certainly would spend more time picking out nicer images and audios. Next I would look into making the losing and winning alerts function differently. I don’t like how it is a dialogue box separate from the page and I would prefer to do something like replace the buttons with a win or lose message and then have them reappear next time the start button is pressed. The final improvement that I can think of for the game would be to add options to let the player select the number of buttons and if they want a time limit on guesses or for the showing of the pattern to speed up or not.



## License

    Copyright Connor Daly

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.