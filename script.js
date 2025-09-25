let task=document.getElementById('task');
let answer=document.getElementById('answerinp');
let correct=document.getElementById('Correct');
let wrong=document.getElementById('Wrong');
let missed=document.getElementById('Missed');
let mode=document.getElementsByClassName('choosemode');
let preferance=document.getElementsByClassName('pref');
let startbtn=document.getElementById('start');
let timer3=document.getElementById('timer3');
let timercon=document.getElementById('timercon');
let ismode=false;
let ispreferance=false;
let speed;
let prefstyle;
let inter;
let randomValue;
let previous=null,trmpprev;
let isrunning=false;
let correctcount=0,wrongcount=0,missedcount=0;
answer.addEventListener('input',()=>{
    if(isrunning==true){
    if(answer.value==task.innerHTML)
        correct.value=++correctcount;
    else 
        wrong.value=++wrongcount;
    }
})

for(let btn of mode){
       btn.addEventListener('click',(e)=>{
        clearInterval(inter);
        isrunning=false;
         document.getElementById('stop').style.backgroundColor='rgb(232, 118, 124)'
        startbtn.style.backgroundColor='rgb(232, 118, 124)'
        speed=(btn.dataset.sp) *1000;
        ismode=true;
        clearcolormode();
        btn.style.backgroundColor="rgb(131, 235, 117)"
      })
}
function clearcolormode(){
    for(let btn of mode){
        btn.style.backgroundColor='bisque'
    }
}
for(let pref of preferance){
      pref.addEventListener('click',(e)=>{
        clearInterval(inter);
        isrunning=false;
         document.getElementById('stop').style.backgroundColor='rgb(232, 118, 124)'
        startbtn.style.backgroundColor='rgb(232, 118, 124)'
        prefstyle=pref.dataset.p;
        ispreferance=true;
        clearcolorpre()
        pref.style.backgroundColor="rgb(131, 235, 117)"
       
      })
}
function clearcolorpre(){
    for(let pref of preferance){
        pref.style.backgroundColor='bisque'
    }
}

startbtn.addEventListener('click',()=>{
    if(ismode==true && ispreferance==true){
        startbtn.style.backgroundColor='rgb(131, 235, 117)'
        document.getElementById('stop').style.backgroundColor='rgb(232, 118, 124)'
        timer3.style.display='flex';
        showtime()
    }    
    else{
        alert("Please select Mode and Preferance")
    }
})
let seconds=3;
let timerinterval;
function showtime(){
    timerinterval=setInterval(()=>{
        timercon.innerHTML=seconds;
        if(seconds==0){
            seconds=3;
             timercon.innerHTML=seconds;
            timer3.style.display='none'
            isrunning=true;
            start();
            clearInterval(timerinterval)
        }
        seconds--;
    },1000)
}

function start(){
        if(ismode==false || ispreferance==false){
        }
        else{
           inter= setInterval(()=>{           
               if(prefstyle=="h"){
                    
                    if(answer.value==''){
                        missed.value=++missedcount;
                    }
                    answer.value=''  

                    randomValue=parseInt(Math.random()*10)
                    if(previous==randomValue){
                        if(randomValue>=5)
                            randomValue-=parseInt(Math.random()*4)
                        else
                            randomValue+=parseInt(Math.random()*4)
                    }
                    previous=randomValue;
                    
                    
                    if(randomValue>=9)
                        task.innerHTML='a';
                    else if(randomValue>=8)
                        task.innerHTML=';';
                    else if(randomValue>=7)
                        task.innerHTML='s';
                    else if(randomValue>=6)
                        task.innerHTML='l';
                    else if(randomValue>=5)
                        task.innerHTML='d';
                    else if(randomValue>=4)
                        task.innerHTML='k';
                    else if(randomValue>=3)
                        task.innerHTML='f';
                    else if(randomValue>=2)
                        task.innerHTML='j';
                    else if(randomValue>=1)
                        task.innerHTML='g';
                    else
                        task.innerHTML='h';  

                    
               }
               else if(prefstyle=="h+t"){
                    if(answer.value==''){
                        missed.value=++missedcount;
                    }
                    answer.value=''
                   randomValue=parseInt(Math.random()*20)
                   if(previous==randomValue){
                        if(randomValue>=10)
                            randomValue-=parseInt(Math.random()*9)
                        else
                            randomValue+=parseInt(Math.random()*9)
                    }
                    previous=randomValue;

                    if(randomValue>=19)
                        task.innerHTML="q"
                    else if(randomValue>=18)
                        task.innerHTML="p"
                    else if(randomValue>=17)
                        task.innerHTML='w';
                    else if(randomValue>=16)
                        task.innerHTML='o';
                    else if(randomValue>=15)
                        task.innerHTML='e';
                    else if(randomValue>=14)
                        task.innerHTML='i';
                    else if(randomValue>=13)
                        task.innerHTML='r';
                    else if(randomValue>=12)
                        task.innerHTML='u';
                    else if(randomValue>=11)
                        task.innerHTML='t';
                    else if(randomValue>=10)
                        task.innerHTML='y';
                    else if(randomValue>=9)
                        task.innerHTML='a';
                    else if(randomValue>=8)
                        task.innerHTML=';';
                    else if(randomValue>=7)
                        task.innerHTML='s';
                    else if(randomValue>=6)
                        task.innerHTML='l';
                    else if(randomValue>=5)
                        task.innerHTML='d';
                    else if(randomValue>=4)
                        task.innerHTML='k';
                    else if(randomValue>=3)
                        task.innerHTML='f';
                    else if(randomValue>=2)
                        task.innerHTML='j';
                    else if(randomValue>=1)
                        task.innerHTML='g';
                    else
                        task.innerHTML='h';  
               }
               else if(prefstyle=="h+b"){
                    if(answer.value==''){
                        missed.value=++missedcount;
                    }
                    answer.value=''
                    randomValue=parseInt(Math.random()*19)
                    if(previous==randomValue){
                        if(randomValue>=9)
                            randomValue-=parseInt(Math.random()*8)
                        else
                            randomValue+=parseInt(Math.random()*8)
                    }
                    previous=randomValue;
                    
                    if(randomValue>=18)
                        task.innerHTML="z"
                    else if(randomValue>=17)
                        task.innerHTML="."
                    else if(randomValue>=16)
                        task.innerHTML='x';
                    else if(randomValue>=15)
                        task.innerHTML=',';
                    else if(randomValue>=14)
                        task.innerHTML='c';
                    else if(randomValue>=13)
                        task.innerHTML='m';
                    else if(randomValue>=12)
                        task.innerHTML='v';
                    else if(randomValue>=11)
                        task.innerHTML='n';
                    else if(randomValue>=10)
                        task.innerHTML='b';
                    else if(randomValue>=9)
                        task.innerHTML='a';
                    else if(randomValue>=8)
                        task.innerHTML=';'
                    else if(randomValue>=7)
                        task.innerHTML='s';
                    else if(randomValue>=6)
                        task.innerHTML='l';
                    else if(randomValue>=5)
                        task.innerHTML='d';
                    else if(randomValue>=4)
                        task.innerHTML='k';
                    else if(randomValue>=3)
                        task.innerHTML='f';
                    else if(randomValue>=2)
                        task.innerHTML='j';
                    else if(randomValue>=1)
                        task.innerHTML='g';
                    else
                        task.innerHTML='h';  
               }
               else if(prefstyle=="all"){
                    if(answer.value==''){
                        missed.value=++missedcount;
                    }
                    answer.value=''
                    randomValue=parseInt(Math.random()*29)
                    if(previous==randomValue){
                        if(randomValue>=14)
                            randomValue-=parseInt(Math.random()*13)
                        else
                            randomValue+=parseInt(Math.random()*13)
                    }
                    previous=randomValue;
                    
                    if(randomValue>=28)
                        task.innerHTML="q"
                    else if(randomValue>=27)
                        task.innerHTML="p"
                    else if(randomValue>=26)
                        task.innerHTML='w';
                    else if(randomValue>=25)
                        task.innerHTML='o';
                    else if(randomValue>=24)
                        task.innerHTML='e';
                    else if(randomValue>=23)
                        task.innerHTML='i';
                    else if(randomValue>=22)
                        task.innerHTML='r';
                    else if(randomValue>=21)
                        task.innerHTML='u';
                    else if(randomValue>=20)
                        task.innerHTML='t';
                    else if(randomValue>=19)
                        task.innerHTML='y';
                    else if(randomValue>=18)
                        task.innerHTML="z"
                    else if(randomValue>=17)
                        task.innerHTML="."
                    else if(randomValue>=16)
                        task.innerHTML='x';
                    else if(randomValue>=15)
                        task.innerHTML=',';
                    else if(randomValue>=14)
                        task.innerHTML='c';
                    else if(randomValue>=13)
                        task.innerHTML='m';
                    else if(randomValue>=12)
                        task.innerHTML='v';
                    else if(randomValue>=11)
                        task.innerHTML='n';
                    else if(randomValue>=10)
                        task.innerHTML='b';
                    else if(randomValue>=9)
                        task.innerHTML='a';
                    else if(randomValue>=8)
                        task.innerHTML=';';
                    else if(randomValue>=7)
                        task.innerHTML='s';
                    else if(randomValue>=6)
                        task.innerHTML='l';
                    else if(randomValue>=5)
                        task.innerHTML='d';
                    else if(randomValue>=4)
                        task.innerHTML='k';
                    else if(randomValue>=3)
                        task.innerHTML='f';
                    else if(randomValue>=2)
                        task.innerHTML='j';
                    else if(randomValue>=1)
                        task.innerHTML='g';
                    else
                        task.innerHTML='h';  


               }
               else if(prefstyle=="all+n"){
                    if(answer.value==''){
                        missed.value=++missedcount;
                    }
                    answer.value=''
                    randomValue=parseInt(Math.random()*39)
                    if(previous==randomValue){
                        if(randomValue>=19)
                            randomValue-=parseInt(Math.random()*18)
                        else
                            randomValue+=parseInt(Math.random()*18)
                    }
                    previous=randomValue;
                    
                    if(randomValue>=38)
                        task.innerHTML='1';
                    else if(randomValue>=37)
                        task.innerHTML='0';
                    else if(randomValue>=36)
                        task.innerHTML='2';
                    else if(randomValue>=35)
                        task.innerHTML='9';
                    else if(randomValue>=34)
                        task.innerHTML='3';
                    else if(randomValue>=33)
                        task.innerHTML='8';
                    else if(randomValue>=32)
                        task.innerHTML='4';
                    else if(randomValue>=31)
                        task.innerHTML='7';
                    else if(randomValue>=30)
                        task.innerHTML='5';
                    else if(randomValue>=29)
                        task.innerHTML='6';
                    else if(randomValue>=28)
                        task.innerHTML="q"
                    else if(randomValue>=27)
                        task.innerHTML="p"
                    else if(randomValue>=26)
                        task.innerHTML='w';
                    else if(randomValue>=25)
                        task.innerHTML='O';
                    else if(randomValue>=24)
                        task.innerHTML='e';
                    else if(randomValue>=23)
                        task.innerHTML='i';
                    else if(randomValue>=22)
                        task.innerHTML='r';
                    else if(randomValue>=21)
                        task.innerHTML='u';
                    else if(randomValue>=20)
                        task.innerHTML='t';
                    else if(randomValue>=19)
                        task.innerHTML='y';
                    else if(randomValue>=18)
                        task.innerHTML="z"
                    else if(randomValue>=17)
                        task.innerHTML="."
                    else if(randomValue>=16)
                        task.innerHTML='x';
                    else if(randomValue>=15)
                        task.innerHTML=',';
                    else if(randomValue>=14)
                        task.innerHTML='c';
                    else if(randomValue>=13)
                        task.innerHTML='m';
                    else if(randomValue>=12)
                        task.innerHTML='v';
                    else if(randomValue>=11)
                        task.innerHTML='n';
                    else if(randomValue>=10)
                        task.innerHTML='b';
                    else if(randomValue>=9)
                        task.innerHTML='a';
                    else if(randomValue>=8)
                        task.innerHTML=';';
                    else if(randomValue>=7)
                        task.innerHTML='s';
                    else if(randomValue>=6)
                        task.innerHTML='l';
                    else if(randomValue>=5)
                        task.innerHTML='d';
                    else if(randomValue>=4)
                        task.innerHTML='k';
                    else if(randomValue>=3)
                        task.innerHTML='f';
                    else if(randomValue>=2)
                        task.innerHTML='j';
                    else if(randomValue>=1)
                        task.innerHTML='g';
                    else
                        task.innerHTML='h';  


               }
            },speed)
        }
}


function referesh(){
    location.reload();
}
function enter(){
    document.getElementById('beforestart').style.display='none'
}
function stop(){
    if(isrunning==true){
    clearInterval(inter)
    document.getElementById('stop').style.backgroundColor='rgb(131, 235, 117)'
    startbtn.style.backgroundColor='rgb(232, 118, 124)'
    }
    else{
        alert("Game not Started Yet")
    }
    

}
