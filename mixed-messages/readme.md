# Mixed Messages Portfolio Project

## Project Objectives

* Message generator program using JS
* Git version control
* Command Line Practice
* Build in self-configured local development environment

## Requirements

* Every time a user runs a program, they should get a new, randomized output.
* The message that it outputs should be made up of at least three different pieces of data.

### Planning

1. Concept - WSB themed, to commemorate the Gamestop madness.  The message generator will combine a stock symbol, either bid or ask at bounded random size, and one of the 20 possible magic 8-ball phrases.
2. Schedule - 7 tasks in Codecademy kanban board, I should be able to complete at least 3 per day.  Starting 2021/2/1.

### Execution Log

* Pulled a list of S&P 100 from Wikipedia, formatted/concatenated in Excel to be nested array of [total array ['ticker symbol', 'company name'], ...]
* Added whether bid or ask, price, and number of shares randomizer.
* Added magic 8 ball phrases
* Put it all together with lookIntoTheEightBall function
