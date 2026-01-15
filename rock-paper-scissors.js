window.alert("Welcome to Rock, Paper, Scissors!");

const rockBtn = document.getElementById('rockbtn');
const paperBtn = document.getElementById('paperbtn');
const scissorsBtn = document.getElementById('scissorsbtn');
let randomNumber = Math.random();
let result = '';

rockBtn.onclick = function(){
    if(randomNumber >= 0 && randomNumber < 1/3){
        result = 'Computer chose Rock. It is a tie!';
    }
    else if(randomNumber >= 1/3 && randomNumber <2/3){
        result = 'Computer chose Paper. You lose!';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        result = 'Computer chose Scissors. You win!';
    }
    alert(result);
}

paperBtn.onclick = function(){

    if(randomNumber >= 0 && randomNumber < 1/3){
        result = 'Computer chose Rock. You win!';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        result = 'Computer chose Paper. It is a tie!';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        result = 'Computer chose Scissors. You lose!';
    }
    alert(result);
}

scissorsBtn.onclick = function(){

     if(randomNumber >= 0 && randomNumber < 1/3){
        result = 'Computer chose Rock. You lose!';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        result = 'Computer chose Paper. You win!';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        result = 'Computer chose Scissors. It is a tie!';
    }
    alert(result);
}
