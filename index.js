var readLineSync = require("readline-sync");

var chalk = require('chalk');
var score = 0;

var userName = readLineSync.question("What's your name? : ");

console.log(chalk.bgRed(`\nWelcome ${userName} to Marvel Quiz\n`));

var questionList =  [
    {
      question:"What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe",
      a:"2005",
      b:"2008",
      c:"2010",
      d:"2012",
      answer:"b"
    },
    {
      question:"What is the name of Thor’s hammer?",
      a:"Vanir",
      b:"Mjolnir",
      c:"Aesir",
      d:"Norn",
      answer:"b"
    },
    {
      question:"In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?",
      a:"That he wants to study The Hulk",
      b:"That Thaddeus owes him money",
      c:"That they are putting a team together",
      d:"That he knows about S.H.I.E.L.D.",
      answer:"c"
    },
    {
      question:"What is Captain America’s shield made of?",
      a:"Adamantium",
      b:"Promethium",
      c:"Vibranium",
      d:"Carbonadium",
      answer:"c"
    },
    {
      question:"Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
      a:"J.A.R.V.I.S.",
      b:"H.O.M.E.R.",
      c:"A.L.F.R.E.D.",
      d:"M.A.R.V.I.N.",
      answer:"a"
    },
    {
      question:"What is the real name of the Black Panther?",
      a:"T’Challa",
      b:"M’Baku",
      c:"N’Jadaka",
      d:"N’Jobu",
      answer:"a"
    },
    {
      question:" What is the alien race Loki sends to invade Earth in The Avengers?",
      a:"The Chitauri",
      b:"The Skrulls",
      c:"The Kree",
      d:"The Flerkens",
      answer:"a"
    },
    {
      question:"Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
      a:"Thor",
      b:"Loki",
      c:"The Collector",
      d:"Tony Stark",
      answer:"b"
    },
    {
      question:"What fake name does Natasha use when she first meets Tony?",
      a:"Natalie Rushman",
      b:"Natalia Romanoff",
      c:"Nicole Rohan",
      d:"Naya Rabe",
      answer:"a"
    },
    {
      question:"Who is killed by Loki in the Avengers?",
      a:"Maria Hill",
      b:"Nick Fury",
      c:"Agent Coulson",
      d:"Doctor Erik Selvig",
      answer:"c"
    }
]

function play(questionNumber,question,optionA,optionB,optionC,optionD ,answer){
  
  console.log(`${questionNumber} ${question}\n`);
  console.log(`A : ${optionA}\n`);
  console.log(`B : ${optionB}\n`);
  console.log(`C : ${optionC}\n`);
  console.log(`D : ${optionD}\n`);

  var userAnswer = readLineSync.question(`Write Answer : `);
  
  if(userAnswer.toLowerCase() === answer){
    console.log(chalk.green("\nRight!\n"));
    score++;
  }
  else{
    console.log(
      chalk.red("\nWrong!",chalk.green(` Right answer is : ${answer.toUpperCase()}\n`))
    );
  }
}

var userWantToPlay = readLineSync.question("Do you want to play? [y/n] : ");

if(userWantToPlay === 'y'){

  console.log('\nHere We Go  🤜\n')
  
  var questionNumber = 0;
  
  for(var i = 0; i<questionList.length; i++){
    var currentQuestion = questionList[i];
    questionNumber++;
    play(
      questionNumber,
      currentQuestion.question,
      currentQuestion.a,
      currentQuestion.b,
      currentQuestion.c,
      currentQuestion.d,
      currentQuestion.answer
    );
  }
  
  console.log(
    chalk.bgRed ('\n-------------------------------------------\n')
  );
  
  if(score >= 7){
    console.log(
      chalk.yellow(`Congratulations you got ${score}/10 \n\nThis is for you 🏆 🏆 🏆 `)
      );
  }
  else if(score <= 6 && score >= 4 ){
    console.log(
      chalk.yellow(`Congratulations you got ${score}/10 \n\nThis is for you 🏆 🏆 `)
    );
  }
  else{
    console.log(
      chalk.red(`Opps you got ${score}/10 Do Watch Marvel Movies\n\nThis is for you 🏆 `)
    )
  }

}
else{
  console.log(`See you next time ${userName} 👋`)
}



