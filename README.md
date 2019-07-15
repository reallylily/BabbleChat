# BabbleChat

## Background and Overview 

**BabbleChat** is a minimal viable product that aims to make learning languages fun by matching language speakers via live chat. Individuals who join are able to choose the languages they want to learn and the languages that they know. They are then matched with a partner that is fluent in the language they are learning, and who is learning the language they are fluent in. For example, the users Greg T. and Mona S. would be matched together:  

**Greg T.** <br/>
Learning: Japanese <br/>
Knows: English, Spanish

**Mona S.** <br/>
Learning: Spanish <br/>
Knows: Japanese <br/>

**BabbleChat** is primarily built using MERN Stack, consisting of the following 4 technologies: 

1. MongoDB
2. Express 
3. React
4. Node 

## Functionality & MVP 

- [ ] User authorization: register, login, logout
- [ ] User data: save user to MongoDB backend 
- [ ] Connect to a language API: be able to translate single words
- [ ] Live chat: be able to start a live conversation with another user 
- [ ] Default translation: if no one is available in the language, become a translator 
- [ ] BabbleBubbles
   * [ ] on click allow the translation to "pop up" on top of the original word 
   * [ ] allow users to attach images/gifs to a particular word 
- [ ] Production README 

### Bonus Features 
- [ ] BabbleBook: allow users to save words in a book, which they can check off once they've learned 
- [ ] BabbleBuddies: allow users to have "friends", which are people they have chatted to in the past 
- [ ] Online/Offline: have a green button (or grey) on each friend on the friend's list 
- [ ] Default matching: match users automatically 

## WireFrames

<img src="https://github.com/tokyosuite/BabbleChat/blob/master/img1.png" width="350">
<img src="https://github.com/tokyosuite/BabbleChat/blob/master/img2.png" width=350">

## Technologies & Technical Challenges

**BabbleChat**'s core application is to create a dynamic language-learning interface where users can learn and share their knowledge. 

### Technical Challenges 
* Not overcrowd the UI/UX in the chat feature 
* Matching users based on language preferences 
  * Backend two-step filtering: 1st on the language(s) they know, 2nd on the language(s) they want to learn
  * Incorporate logged-in time for better matching 
* Reading from a language API and displaying the translation back to the user 
* Connect to a GIPHY API to be able to fetch gifs to allow users to connect them to the conversation 

## Accomplished over the weekend 

* All members of the team read and watched MERN tutorials 
* Set up database
* Wrote proposal README and planned work for the week 
* Implement user authorization on database backend - **Helen** and **Jitsu**

## Group Members & Work Breakdown 

**Helen Yu**, **Jitsu MacMaster**, **Aditya Agarwala**, **Maya Hefferty**

## Day 1 
* Got user authentication to work - **Helen, Jitsu, Aditya**
* Set up React frontend - **Helen, Jitsu** 
* Set up MongoDB Backend - **Helen, Jitsu**
* Starting learning websockets - **Aditya** 

## Day 2 
* Discuss schema and state - **all** 
* Finish signup and login pages - **Jitsu**
* Start CSS styling signup and login pages - **Helen** 
* Got Github API to start working on the backend - **Jitsu** 
* Start on websockets (Socket.IO) - **Aditya**

## Day 3 
* Perpetuate translate API into Redux store - **Jitsu** 
* Create bubble up component - **Maya** 
* Connect WebSocket (enable live functionality) to our React Chat component - **Aditya** 
* UI/UX for all components - **Helen** 

## Day 4 
* Finish creating bubble up component - **Maya** 
* UI/UX for bubbles complete - **Helen**
* Live chat implementation is live - **Jitsu** 
* Have splash page ben translatable to multiple languages - **Aditya** 

## Day 5 
* Work on BabbleBook/Babble buddies - **all**
* Finish implementing any bonus features - **all**


## Plan for getting users and reviews 
* Cultivate sample user base by asking people in our cohort to sign up 
* Ask them for feedback to improve our app 
