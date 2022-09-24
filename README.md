# Tic Tac Toe

A tribute to the AFL Grandfinal. Tic Tac Toe style

To enter the MCG and play, click here ###

- photo at the front
- photo with winner annoucement
- responsiveness photo for mobile

# Wireframes & Approach

![Getting Started](images/Screen%20Shot%202022-09-23%20at%209.47.51%20pm.png)

Above is the orginal idea was to have an image of the tic bug and an image of the tic tac lollie appear in lieu of the X and O on the screen with the scores kept on the sides.

![Getting Started](images/Screen%20Shot%202022-09-23%20at%207.28.39%20pm.png)

As I began creating the board I decided to change my angle and go with an AFL theme which fitted the upcoming AFL grand final as seen above. I chose to have the 2 teams playing which were Sydney and Geelong and have the team logos with the scores below on the side of the board.

I further decided to break up the game into 4 quarters with a countdown timer visible on the screen. When the timer hit zero, the quarter was finished with a button appearing to progress to next quarter. Players would continue to play through all quarters until the end of the 4th where the player with the highest score won and a winning message appeared with the team who won. Board would restart when button clicked.

# Technologies used

- HTML
- CSS
- Javascript
- DOM

# Special Features

- Score kept for each team
- 4 quarters to break up game
- Countdown timer for each quarter
- Winning message display for team with highest score
- Phantom button to progress players to the next quarter
- Reset current game button and restart whole match button

# Issues Faced

## Winning Combinations

This was the biggest challange for myself. I found many different ways to have approached this put understanding the functionaility was difficult. I wanted to avoid a long if conditional to avoid potential bugs. I decided on using an array which included nested elements with the winning board combinations. The hurdle was using the most effective loop and targeting the sub arrays and having these compare with the players board choices which were stored in an array. I attempted using nested for loops, but I was unable to accurately target elements within sub array. I persisted with a forEach method to target each sub array and an every method to iterate through the elements within those sub arrays. From here I compared the combinations with the players choice array and storing a boolean value in a variable if the player had a match with the includes method.

![Getting Started](images/Screen%20Shot%202022-09-24%20at%2011.35.18%20am.png)

## Preventing players from clicking board after winner or draw.

My initial approach was to remove all the text content within the cells (X's and O's) once a winner had been declared but this would not give the users enough time to see the winner as the board would reset immediately. I decided to use vanilla js and directly add a class to each cell on the board in the HTML once the game had ended. in my CSS, I added a pointer event: none, to target the class name when it was added to prevent users clicking any cell. Then when the player reset or moved to next quarter, this would be removed by targeting each cell and removing the class.

![Getting Started](images/Screen%20Shot%202022-09-23%20at%2010.28.38%20pm.png)

![Getting Started](images/Screen%20Shot%202022-09-23%20at%2010.29.31%20pm.png)

## Switching players between quarters

I used a modulo operation to determine which player would begin each quarter. My initial code firstly had the players variable which determined whos turn it was hard coded in as 'if 1 is not equal to 0 then it's player 1s turn' and then followed by player = 0 right after which was just resetting it back to 0 everytime. This was removed.

## Problem code

![Getting Started](images/Screen%20Shot%202022-09-24%20at%2012.52.48%20pm.png)

I have now simply just left the player variable to equal 1 if the quarterheading is not equal to 0 then player = 1 and sydney start or if it does equal 1, Geelong simply start.

## Solution

![Getting Started](images/Screen%20Shot%202022-09-23%20at%2010.44.32%20pm.png)

# Unsolved Problems

I attempted to have the winning teams theme song play. I tried creating a function and calling this within my checkFinalWinner function. The issue was the entire gameplay function did not operate, it seemed the audio function was blocking any further flow down and I was unable to click on any squares. Due to limited time, I deep sixed the idea.

![Getting Started](images/Screen%20Shot%202022-09-24%20at%2011.54.07%20am.png)

# Enhancements

- Ideally, I would have liked to have the users select from a drop down, between any AFL team in which the logo and score for the respective team would appear where the current logos are placed.

- Would like to have had a photo of the teams mascot appear in lieu of the X's and O's when players selected a cell on the board.

- My grand idea was to have a 4 player mode where 4 teams could play one another on a 16x16 grid.

# Ackowledgements

Very big thank you to Dido and Rod for your patience and understanding. Never telling me to take another direction but helping me achieve the path I wanted to pursue no matter how difficult I made it for myself! Really enjoyed this project with your wise teachings. Lots was learned!
