var count = 0;
var interval;
var colo = new Array(10);
var ans = new Array(10);
var ck = 0,p=0;

/*
function disable(){
   var boxSize = document.getElementsByClassName("box").length;
   for(var i=0;i<boxSize-1;i++){
      document.getElementsByClassName("box")[i].style.backgroundColor="#900C3F";
      document.getElementsByClassName("box")[i].disabled="true";
   }
}*/

function start(){
   //interval = setInterval(colors, 3000);
   colors();
}

function shuffle(colo) {
   colo.sort(() => Math.random() - 0.5);
 }

function colors(){
   document.getElementById('mid').style.marginLeft = 450;
   document.getElementById('mid').innerHTML="";

   var random = document.getElementById('random');

   for(var i=0;i<10;i++){
      colo[i] = i;
   }
   shuffle(colo);

   for(var i=0;i<10;i++){
      if(colo[i]==0){
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: aqua;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==1){ 
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: blueviolet;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==2){ 
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: brown;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==3){ 
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: chartreuse;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==4){ 
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: coral;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==5){ 
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: darkolivegreen;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==6){
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: darkorange;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==7){
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: darkred;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==8){ 
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: deeppink;"></button></div>';
         ans[p] = colo[i]; p++;
      }
      else if(colo[i]==9){ 
         random.innerHTML += '<span class ="init"><button class ="color" style="background-color: darkslategrey;"></button></div>';
         ans[p] = colo[i]; p++;
      }
   }
   ans.sort();
   box();
}

function box(){
   var width = 700;
   var height = 1000;
   var random = document.getElementById('mid');

   for (var i = 0; i < 10; i++) {
      var leftside = Math.floor(Math.random() * (width-100));
      var topside = 1000;
      if(topside<=100 || topside>300){
         while(topside>=300 || topside<100){
            topside = Math.floor(Math.random() * (height-100));
         }
      }
      if(i==0) random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="0" class ="box" style="background-color: aqua;" onclick="check(this.id)"></button></div>';
      else if(i==1)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="1" class ="box" style="background-color: darkslategrey;" onclick="check(this.id)"></button></div>';
      else if(i==2)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="2" class ="box" style="background-color: coral;" onclick="check(this.id)"></button></div>';
      else if(i==3)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="3" class ="box" style="background-color: chartreuse;" onclick="check(this.id)"></button></div>';
      else if(i==4)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="4" class ="box" style="background-color: brown;" onclick="check(this.id)"></button></div>';
      else if(i==5)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="5" class ="box" style="background-color: blueviolet;" onclick="check(this.id)"></button></div>';
      else if(i==6)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="6" class ="box" style="background-color: darkolivegreen;" onclick="check(this.id)"></button></div>';
      else if(i==7)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="7" class ="box" style="background-color: darkorange;" onclick="check(this.id)"></button></div>';
      else if(i==8)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="8" class ="box" style="background-color: darkred;" onclick="check(this.id)"></button></div>';
      else if(i==9)  random.innerHTML += '<div style="position: relative; left: '+leftside+'; top: '+topside+'; "><button id="9" class ="box" style="background-color: deeppink;" onclick="check(this.id)"></button></div>';
   }
}

function check(click_id){
   if(document.getElementsByClassName("color")[ans[ck]].style.backgroundColor==document.getElementsByTagName("button")[click_id].style.backgroundColor){
      document.getElementsByTagName("button")[click_id].style.backgroundColor = "white";
      document.getElementsByClassName("color")[ans[ck]].style.backgroundColor = "white";
      document.getElementsByTagName("button")[click_id].disabled = "true";
      ck++;

      if(ck==10){
         alert("GAME COMPLETE");
      }
   }
}