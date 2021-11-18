let userName = '';
let userQuestion ='when will I get married?';
let randomNumber = Math.floor(Math.random() * 8);
let eightball = '';

switch (randomNumber){
  case 0: 
  eightBall = 'It is certain'
  break; 
  case 1:  
  eightBall = 'It is decidely so'
  break; 
  case 2: 
  eightBall = 'Reply hazy try again'
  break; 
  case 3: 
  eightBall = 'Cannot predict now'
  break; 
  case 4: 
  eightBall = 'Do not count on it'
  break; 
   case 5: 
  eightBall = 'My sources says no'
  break; 
   case 6: 
  eightBall = 'Outlook not so good'
  break; 
   case 7: 
  eightBall = 'Signs point to yes'
   
}


userName = 'Presh';
userName ? console.log(`Hello, ${userName} !`)
: console.log('Hello!');

console.log(`The user asked: ${userQuestion}`)

console.log(`The eight ball answered: ${eightBall} `)
