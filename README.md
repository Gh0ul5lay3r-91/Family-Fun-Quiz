![Family Fun Quiz Logo](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/Logo.png)
![Family Fun Quiz Devices](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/Main%20image.png)

## Introduction

Family Fun Quiz is a Javascript web application that is aimed at anyone who wishes to put their knowledge to the test. From families at home to individuals on the train, this quiz is designed to test your knowledge and beat the High Score. Users have to include their name to begin the game, which will be used and displayed beside their current score. Questions and options will be produced on the screen one after the other in a randomised order. The user will then select the correct option or the option they think is correct, until they have answered all the questions. At which point their score will be calculated and shown to them, the high score will also be updated if they happen to beat the highscore. As part of the UXD, its was decided that the target audience would be familys wanting to be kept entertained, people of all ages and individuals wanting a challenge. As part of my research into what features I could implement I interviewed my own family and some friends to see which way they like to play quizs.

Live link can be found here - https://gh0ul5lay3r-91.github.io/Family-Fun-Quiz/

Opportunities were listed out to decide what needed to be done and what could wait.

| Opportunity                          | Importance | Viability/Feasability |
| ------------------------------------ | ---------- | --------------------- | 
| Submit Button                        | 5          | 5                     | 
| Form to provide name                 | 5          | 5                     |
| Images with Questions                | 2          | 2                     |
| High Score                           | 4          | 5                     |
| Leaderboard                          | 2          | 1                     | 
| Show Correct Answer                  | 3          | 2                     |

With this information it ws decided that Submit button, Form to provide name, High Score and Show Correct Answers where the most important features. The other features can be implemented as updates further down the line if need be. Work then began on user stories and wireframes.

User stories consisted of placing myself in the shoes of a family member or an individual playing this game and thinking about what they would like to achieve.
* User
    * As a User, I want to be able to provide my name to see my score.
    * As a User, I want to see how many questions I got right and wrong
    * As a User, I want to know if I beat the highscore.
    * As a User, Once the game is finished I want to be able to play again.

Wireframes were made for both desktop design and web design. The structure and layout was decided in these wireframes.
Which can be found here:
* [Landing Page](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/wireframe-images/landing%20page.png)
* [Game Page](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/wireframe-images/game%20page.png)

As you can see, deployed website differs a bit from the wireframes, this is due to planning decisions that where made after the wireframes where completed.

## Features
The Family Fun Quiz has a few features that appeal to the user when the first come onto the site. Using both contrasting colors and appealing clickable buttons the site attracts the user to start playing straight away. Utilizing UXD techniques all these features where planned in advanced and tested to make sure they where appealing to the user. Below, features will be listed in detail


### Landing Page:
* Heading: The heading is top and center of the main box, It Welcomes the user to the Family Fun Quiz.

![Heading](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/Header.png)

* Name Input: Using a form, the user can enter their name, this is then validated by JavaScript, and the value taken and stored in local storage.

![Name Input](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/name.png)

* Submit Button: This button is below the input for the username, it is colored so the user can identify it easier. Button is also style so that when the user Hovers over it, it goes lighter in color.

![Submit](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/enter%20button.png)

* Welcome Message: When the user clicks enter, JavaScript clears the box and displays a welcome message to the user, and the button changes to a lets go button.

![Welcome](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/Welcome%20message.png)

### Quiz Page:
* Users Correct Score: In the top left corner the users current game score is displayed, the users name is taken from local storage and is displayed to the user, the score is also green to signify it is the score for correct answers.

![Correct Score](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/correct%20score.png)

* User Incorrect Score: As with the correct score display, the incorrect score is displayed in red to signify it is the score from incorrect answers.

![Incorrect Score](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/incorrect%20answer.png)

* Question Display: Centrally located here the randomly chosen question is displayed to the user. It is done through JavaScript and changes for each new question.

![Question Display](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/Question%20display.
png)

* Option Display: As with the question display, this display the options associated with the question that is being displayed. An event listener is add to each option so when the user clicks on Answer the value can be checked against the correct answer.

![Option Display](https://github.com/Gh0ul5lay3r-91/Family-Fun-Quiz/blob/main/assets/readme-images/option%20display.png)

* 
* 
* 
* 


## Testing:
Testing was done on a continuous basis, its something that I am comfortable with whilst coding, as I wrote the code for each part of the site I would test in using chrome dev tools, then on safari, edge and mozilla. Once the site got to a reasonably functioning state, I deployed as early as I could and I released the link for friends and family to test it. With their feedback, I chaged most of the UI and fixed a few bugs I had missed. Anytime I was made a ware of a bug I replicated it myself on my devices and proceeded to change.
### Bugs
The site had many bugs through out the build process. Mostly through not having a full understanding of JavaScript. Initially I was having issues with two script files, I assumed it was like CSS where one file could do all pages, but quickly learned that each page really needs its own JavaScript file. Once built there where a few presistant bugs, the restart button not working as anticipated was one. The question count would reset but not the scores. I finally solved this when I realised I never had in my code anywhere that would written the values, so a function was made to handle updating all values on hte site and it solved my issue. Another interesting bug happened when I first built the function that created the question. Everytime I clicked the answer button, the game answered the question plus a double amount there after, I solved this by clearing the event handler after the the game looped back to the question builder function. A bug that is still there and I couldnt really fix it was setting the high score and displaying it. I tried a few methods, including the one im using at the moment by having it set in local storage, but its still a bit tempermental.
### Validating
HTML:
* HTML code passed through the W3C initailly with a few warnings and errors for each page, issues where fixed and now runs through it with no errors or warnings.

    * Link to results of Landing page found [here](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgh0ul5lay3r-91.github.io%2FFamily-Fun-Quiz%2F)
    * Link to results of Quiz page found [here](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgh0ul5lay3r-91.github.io%2FFamily-Fun-Quiz%2Fquiz.html)
       
CSS:
* CSS code pass through the validator, results can be found [here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgh0ul5lay3r-91.github.io%2FFamily-Fun-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

JavaScript:
* JavaScript file for index page can be found [here]()
* JavaScript file for quiz page can be found [here]()

## Deployment
* The site was deployed using GitHub pages. Steps are below:
    * In the Github repository, navigate to the settings tab.
    * Select pages from the left hand side.
    * In the source section, select master branch.
    * GitHub will automatically host the site, and when it is ready and deployed the box around the live link will go green.

Live link can be found here - https://gh0ul5lay3r-91.github.io/Family-Fun-Quiz/

## Credits
### Content: 
The questions used in this website came from two quizs that my family wrote during lockdown for the week family zoom quiz. 
* Font used
    * Lato
        * For Paragraphs and normal text.
    * Orbitron
        * For all headings.

Both fonts where take from Google Fonts.

Alot of research I done to solve issues in my JavaScript code was on both YouTube and Stack overflow. Below are credits to some of the issues I faced and the links to the sites used as reference.
* Passing a variable from one script to another with Local Storage [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* Building questions and answers at random [here](https://stackoverflow.com/questions/43847375/creating-random-questions-and-answers-javascript)
* Over all quiz app functionality and logic
    * [here](https://www.sitepoint.com/simple-javascript-quiz/)
    * [here](https://www.youtube.com/watch?v=DFhmNLKwwGw)

I also wish to give credit to both Tutoring for guiding me to write functioning JavaScript code to get what I wanted to do to work, and my mentor also, who help me identify why some bugs where happening and how to isolate them.

## Website Layout
The layout of this website drew inspiration from the Love Maths runthrough project, with a main div centerered in the middle of the page with the main functionality happening there. The rest of the design was myself being creative. The functionality of the quiz itself was inspired by quiz apps that I was researching with, all of which are linked above.
Again credit to all the guidence I recieved along the project from Slack members, tutoring and my mentor.