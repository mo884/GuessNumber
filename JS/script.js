'use strict';
/*document.querySelector('.message').textContent ='Correct Answer 😍';
document.querySelector('.guess').value =88;*/
let num = Math.trunc(Math.floor(Math.random() * 20))+1 ;
let Score = 20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
const guess = Number(document.querySelector('.guess').value); 

 //when there is no input
 if(!guess){
        document.querySelector('.message').textContent ='No Nummber 🙂!';
        
    //when user win
 }else if(guess === num){
        document.querySelector('.message').textContent ='Correct Answer 😍';
        document.querySelector('body').style.backgroundColor ='rgb(60, 179, 113)';
        document.querySelector('.number').style.width ='30rem';
        document.querySelector('.number').textContent = guess;

        //Check high score
        if(Score>highscore)
        {
            highscore = Score;
            document.querySelector('.highscore').textContent =highscore;
        }
    //when user input high number
 }else if(guess > num){
    if(Score>1){
        document.querySelector('.message').textContent ='Too high↗️';
        document.querySelector('.score').textContent = -- Score ;

    }else{
        document.querySelector('.message').textContent ='You Lost the game 😭';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor ='#DC143C';
    }
    //when user input Low number
 }else if(guess < num){
    if(Score>1){
        document.querySelector('.message').textContent ='Too Low↘️';
        document.querySelector('.score').textContent = -- Score ;
    }else{
        document.querySelector('.message').textContent ='You Lost the game 😭';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor ='#DC143C';
    }
 }

});
document.querySelector('.again').addEventListener('click',function(){
    Score=20;
    document.querySelector('.message').textContent ='Start guessing...';
    num = Math.trunc(Math.floor(Math.random() * 20))+1 ;
    document.querySelector('.score').textContent =20;
    document.querySelector('.number').style.width ='15rem';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value ='';
    
});



