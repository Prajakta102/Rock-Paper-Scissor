let u_score = 0;
let c_score = 0;
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");
const score_board = document.querySelector(".score");
const result_h2= document.querySelector(".result>h2");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function comp_choice() {
  const choices = ["rock", "paper", "scissor"];
  const c_choice_num = Math.floor(Math.random() * 3);
  return choices[c_choice_num];
}
comp_choice();

function tie(user,comp)
{
    const u="user".fontsize(0.4).sub();
    const c="comp".fontsize(0.4).sub();
    result_h2.innerHTML=user+u+" can't beats "+comp+c+". it's a tie 😂😂😂";
    document.getElementById(user).classList.add('grey');
    setTimeout(function()
    {
        document.getElementById(user).classList.remove("grey");
    },1000);
}
function win(user,comp)
{
    
    u_score++;
    console.log(u_score);
    user_score.innerHTML=u_score;
    comp_score.innerHTML=c_score;
    console.log(user,comp);
    const u="user".fontsize(0.4).sub();
    const c="comp".fontsize(0.4).sub();
    result_h2.innerHTML=user+u+" beats "+comp+c+". you win 🎉🎉🎉🎉";
    document.getElementById(user).classList.add('green');
    setTimeout(function()
    {
        document.getElementById(user).classList.remove("green");

        
    },1000);
}
function lose(user,comp)
{
    c_score++;
    console.log(u_score);
    user_score.innerHTML=u_score;
    comp_score.innerHTML=c_score;
    console.log(user,comp);
    const u="user".fontsize(0.4).sub();
    const c="comp".fontsize(0.4).sub();
    result_h2.innerHTML=comp+c+" beats "+user+u+". computer win😎😎😎😎";
    document.getElementById(user).classList.add('red');
    setTimeout(function()
    {
        document.getElementById(user).classList.remove("red");
    },1000);
}





function game(user_choice) {
    const c_choice=comp_choice();
    if(c_choice===user_choice)
    {
        tie(user_choice,c_choice);
    }
    else if(user_choice==="paper")
    {
        if(c_choice==="rock")
        {
            win(user_choice,c_choice);
        }
        else{
            lose(user_choice,c_choice);
        }
    }
    else if(user_choice==="rock")
    {
        if(c_choice==="scissor")
        {
            win(user_choice,c_choice)
        }
        else{
            lose(user_choice,c_choice);
        }
    }
    else if(user_choice==="scissor")
    {
        if(c_choice==="paper")
        {
            win(user_choice,c_choice);
        }
        else{
            lose(user_choice,c_choice);
        }
    }
}

rock_div.addEventListener("click", function () {
  game("rock");
});
paper_div.addEventListener("click", function () {
  game("paper");
});
scissor_div.addEventListener("click", function () {
  game("scissor");
});
