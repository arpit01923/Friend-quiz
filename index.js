const chalk = require('chalk');
var readlineSync=require('readline-sync');
var userName=readlineSync.question('What is your name? ');
console.log("");
console.log(chalk.blue('Welcome ')+ userName+ chalk.red(' to the game'));
console.log("");
console.log(('How much you should know ')+chalk.yellow('Arpit'));
console.log("");
var score=0;

var questions=[
  {
    question: '1.Where do he live? ',
    answer: 'Yamuna Nagar'
  },
  {
    question: '2.What is his age? ',
    answer: '21'
  },
  {
    question: '3.What is his profession? ',
    answer: 'Student'
  },
  {
    question: '4.What does he love in eating? ',
    answer: 'Sweets'
  },
  {
    question: '5.What is his favourite color? ',
    answer: 'Red'
  },
  {
    question: '6.Does he love Travelling? ',
    answer: 'Yes'
  }
]

for(var i=0; i<questions.length; i++)
{
  var current=questions[i];
  play(current.question,current.answer);
  console.log('-------------');
}
console.log(chalk.blue('Score: '+score));

function play(question, answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer == answer)
  {
  console.log('right');
  score+=1;
  console.log('Score:'+score);
  }
  else
  {
    console.log('wrong');
    console.log('Score:'+score);
  }
}

var highScore=[
  {
    name: 'Arpit',
    score: 6
  }
]

var a=highScore[0];
if(a.score<=score){
console.log(userName);
console.log("Highscore: "+score);
}
else{
console.log(a.name);
console.log("Highscore: "+a.score);
}
