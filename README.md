# Feed Reader Testing
## Table of Contents
- [Installation](#Installation)
- [Tests implemented](#Tests-implemented)
- [How to read Jasmine interface](#How-to-read-Jasmine-interface)
## Installation
to Install the game, simply download the zip file to your desktop. double click the zip file to unzip it (on a Mac device) or use a file unzipper software to access the folder. 
Once the folder is open, locate the “index.html” file, right click and open in your web browser (i.e. chrome, Firefox, Explorer). 

## Tests implemented
The program runs 7 test:

1. checks to see that each feed has a name
2. checks to see that each feed has a Url link 
3. checks to see that each feed entry is defined 

4. checks to see that the menu is hidden be default 
5. Checks to see that the menu icon toggles the menu

6. checks to see that there is at least 1 feed entry when the loadFeed function is called. 
7. check to see that a new feed entry is not the same as a previous feed entry.

## How to read Jasmine interface

A green dot suggest that the test ran successfully and there for the code for that function is working as intended. 

A red cross suggest that the test was unsuccessful, either the test code was written inaccurately or the function being tested didn’t not work.  
