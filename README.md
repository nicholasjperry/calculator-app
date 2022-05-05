# Basic Calculator Web App

## Description

* It's been done many times before, but alas, it has not yet been constructed by me.  I present to you: A BASIC CALCULATOR! 
* This calculator is able to receive input from the user in the form of numbers which can then be used to perform some basic arthimetic.
* To get this project off the ground, I decided to use React as a mechanism to handle user events as well as for state management purposes.
* Challenges that I encountered while making this app:
    * Understanding exactly how to implement the math.js library's built-in methods to consume my state variable and how that exactly coincided with performing the actual arithmetic.  I concluded that these operations would live inside a ```handleEquals``` function, which would be assigned to the "equals" button.  
    * The other challenge faced while building this calculator was in the styling and alignment of all the buttons, i.e., displaying things using flexbox.
* Features I hope to implement: 
    * Refactor the flexbox items
    * Improve the styling
    * Allow the input field to receive number presses from the user's keyboard as opposed to only being able to receive input through the manual clicking of buttons.

## Installation and Usage

1. In order to use this project, you must first have Node.js globally installed on your local machine.
2. Then proceed to clone the repo into a local directory using: ```git clone https://github.com/nicholasjperry/calculator-app.git```.
3. Once you have cloned the remote repository to your local directory, install the required dependencies via: ```npm install```.
4. Finally run ```npm start``` to preview this project in your browser.

## License 

MIT License

Copyright (c) [2022] [Nicholas Perry]

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:  
  
The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.  
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.  