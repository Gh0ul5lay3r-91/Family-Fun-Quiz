![Cycling 101 Logo](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/logo.png)
![Cycling 101 Devices](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/site-example1.png)

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
* [Landing Page](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/wireframe-images/index.png)
* [Equipment Page](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/wireframe-images/equipment.png)

As you can see, deployed website differs a bit from the wireframes, this is due to planning decisions that where made after the wireframes where completed.

## Features

The Cycling 101 website has a few features to help both attract and encourage the user to continue to use our site. From pictures of amazing landscapes to videos and pictures that help inform new cyclists about everything they need to know. The features have been designed and layout of the user interaction with the site is a simple and enjoyable one. Below the features will be listed.

### Landing page:
* Nav Bar: 
    * Navigation bar center in the middle of the page, of all 4 pages, allows the user to jump to any page from any page on the site. 
    * This allows for easy navigation of the website which means the user doesnt have to use the back button on the web browser.

![Nav Bar](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/nav-bar.png)

* Landing page image: 
    * This image is of a man on a bike looking out over a landscape, this shows the user how thrilling and rewarding cycling can be.
    * On the image there is some cover text with an slogan.

![Landing page image](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/main-image-text.png)

* Lets go Button: 
    * This button appears on the landing page, under both the website description and the quote about cycling.
    * It is red to contrast against the site color, when clicked it'll bring the user to the equipment page.

![Button](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/button.png)

* Social Links in footer: 
    * In the footer, which is always at the bottom of the page, there are 4 links to social media platforms that Cycling 101 are on. 
        * Facebook 
        * Twitter
        * Youtube
        * Instagram

![Social Links](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/social-links.png)

### Equipment Page:
* Playable video: 
    * On the equipment page in the same section as the information about the bicycle there is an embedded video from YouTube detailing the types of bikes. This provides the user with information additional to the text section.

![Bike Video](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/bike-vid.png)

* Clickable buttons to bring you to sites:
    * On the equipment page there are buttons which will bring you to Wikipedia where the user can find even more information on the subject they have just read about.
    * I.E more information on each type of bike and information on the items of clothing, helmet plus equipment you will need.

![Buttons](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/equip-buttons.png)
![Buttons](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/equip-buttons2.png)

* Map to show you shops: 
    * On the equipment page there is a map section to show you the location of local shops where you can find everything the website talks about.

![Map](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/map.png)

### Route Page:
* Route selection section: 
    * Here the user is given information on how to select a route. 
    * Plus a few hints and tips.
* Suggested routes: 
    * There is also an area where a route for each type of bike is suggested: 
        * Road cycling
        * Mountain Biking
        * Hybrid Biking. 
    * Here there is a map showing the route and a link to the All Trails site where more information about the route can be obtained.

![Routes](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/alltrails-route.png)

### Sign Up Page:
* Sign up page Image: 
    * A nice image showing four cyclists. 
        * This reinforces the idea of cycling together to encourage the user to sign up to the website.
* Sign Up Form: 
    * The sign up form asks for: 
        * Users name
        * Surname
        * Email address 
    * This enables the user to sign up to the website to be kept informed about future events etc.

![Sign Up](https://github.com/Gh0ul5lay3r-91/Cycling-101/blob/master/assets/readme-images/signup.png)

## Testing:
Testing was done on a continuous basis, as I built and coded each section I would use dev tools on the browser to see if it was working correctly and where to adjust certain values. This meant that once the site was fully built it was stuff that I missed that I would have to go back over. To understand what I missed, I deployed early and sent the link to a few friends. These Identified many issues that I missed. Mainly, images that were not scaled correctly, the embedded video not scaled, text and links that were out of place and the nav bar not displaying correctly on the one line. I then tested on my own devices to confirm what I was being told and began fixing the issues. 
### Bugs
The site had two interesting bugs, the nav bar not correctly displaying on mobile devices and the buttons on the route suggestion section were wrapping. I managed to fix the nav bar by putting both the logo and the nav bar into divs and aligning them with flexbox. The button not displaying correctly was also fixed by changing it align with flex box. The image on the equipment page in the clothing section was also giving me trouble. It was appearing too large. A friend of mine ended up helping me, the code he suggested is commented in the CSS file. 
### Validating
HTML:
* HTML code passed through the W3C initailly with a few warnings and errors for each page, issues where fixed and now runs through it with no errors or warnings.

    * Link to results of Landing page found [here](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fgh0ul5lay3r-91.github.io%2FCycling-101%2Findex.html)
    * Link to results of Equipment page found [here](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fgh0ul5lay3r-91.github.io%2FCycling-101%2Fequipment.html)
    * Link to results of Landing page found [here](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fgh0ul5lay3r-91.github.io%2FCycling-101%2Froute.html#l71c298)
    * Link to results of Landing page found [here](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fgh0ul5lay3r-91.github.io%2FCycling-101%2Fsignup.html#l71c298)
       
CSS:
* CSS code pass through the validator, results can be found [here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgh0ul5lay3r-91.github.io%2FCycling-101%2Fassets%2Fcss%2Fstyles.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Deployment
* The site was deployed using GitHub pages. Steps are below:
    * In the Github repository, navigate to the settings tab.
    * Select pages from the left hand side.
    * In the source section, select master branch.
    * GitHub will automatically host the site, and when it is ready and deployed the box around the live link will go green.

Live link can be found here - https://gh0ul5lay3r-91.github.io/Family-Fun-Quiz/

## Credits
### Content: 
All content on this site was taken from various different sites which I will list now.
* Landing Page:
    * Main image was taken from a royalty free website that offered stock photos of cycling situations.
    * Social media links were provided by font awesome.
* Equipment Page:
    * Content about the bicycle was taken from the Britannica Website
    * Video on the different bikes was taken from YouTube with credit to the user.
    * Content in the clothing section was taken from Road.cc
    * Information on Helmet, Pump and Tools were taken from Wikipedia.
    * Google maps was used to show where the local shops are in the embedded map.
* Route Page:
    * Tips and hints on how to pick a route were taken from the Cycling Weekly Website.
    * Image on route page taken from a royalty free website with stock images.
    * All the route suggestions were taken from All Trails.
* Sign Up page:
    * Image here taken from a royalty free site.

## Website Layout
This website was inspired by the love running project, I loved the styling of that site so I drew a lot from that site on my own. Some of the styling of love running was referenced initially in my site but I then changed it as I went to suit my site. Originally, I was trying to style the website with pure CSS using floating and margins, I was adament I wasnt going to change but in the end I had to use flex box to get the website to display correctly in a format I liked. Slack community member gave me this handy website which I read over to know how to code flexbox - https://css-tricks.com/snippets/css/a-guide-to-flexbox/