let time = 15;
let quizTimeInMinutes = time * 60 ;
let quizTime = quizTimeInMinutes ;

let counting = document.getElementById("timer_status");
const alert = document.getElementById("timingalert");

function startCountdown(){
    let quizTimer = setInterval(
        function(){
            if(quizTime <= 0){
                clearInterval(quizTimer);
                showScores();
            }else{
                quizTime--;
                let sec = Math.floor(quizTime % 60);
                let secs = sec < 10 ? `0${sec}`: sec;
                let min = Math.floor(quizTime / 60) % 60;
                let mins = min < 10 ? `0${min}`: min;
                counting.innerHTML = `Time Left: ${mins} : ${secs}`;

                if(quizTime < 30 ){
                    alert.innerText = `You have ${quizTime} seconds to go!!!`;
                }
            }
        }, 1000
    )
}
