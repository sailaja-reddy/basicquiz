var score=0;
function answer(){
  
    if(document.getElementById('correct1').checked)
    {
        score++;
    }
    if(document.getElementById('correct2').checked)
    {
        score++;
    }
    if(document.getElementById('correct3').checked)
    {
        score++;
    }
    if(document.getElementById('correct4').checked)
    {
        score++;
    }
    if(document.getElementById('correct5').checked)
    {
        score++;
    }
    if(document.getElementById('correct6').checked)
    {
        score++;
    }
    if(document.getElementById('correct7').checked)
    {
        score++;
    }
    if(document.getElementById('correct8').checked)
    {
        score++;
    }
    if(document.getElementById('correct9').checked)
    {
        score++;
    }
    if(document.getElementById('correct10').checked)
    {
        score++;
    }
    if(document.getElementById('correct11').checked)
    {
        score++;
    }
    if(document.getElementById('correct12').checked)
    {
        score++;
    }
    if(document.getElementById('correct13').checked)
    {
        score++;
    }
    if(document.getElementById('correct14').checked)
    {
        score++;
    }
    if(document.getElementById('correct15').checked)
    {
        score++;
    }
    alert( "Your score is :"+ score );
}
    
document.getElementById('timer').innerHTML= 10 + ":" + 00;
startTimer();
function startTimer(){
    var presentTime=document.getElementById('timer').innerHTML;
    var timeArray=presentTime.split(/[:]+/);
    var m=timeArray[0];
    var s=checkSecond((timeArray[1]-1));
    if(s==59){m=m-1}
    if(m<0){
        return
    }
    document.getElementById('timer').innerHTML=m+":"+s;
    console.log(m)
    setTimeout(startTimer,1000);
}
function checkSecond(sec){
    if(sec<10 && sec>=0){sec="0" +sec};
    if(sec<0)
    {sec="59"};
    return sec;

}

function hidediv()
         {
             document.getElementById("divexam").style.visibility="hidden";

         }
         setTimeout("hidediv()",605000);
   









