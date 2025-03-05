let traveltime=5000;
let node1sendingframe=false;
let botnodesendingframe=false;

let time1="0";
let time2="0";

let chnow=0;

let collision=false;

const display = document.getElementById("page1display");
const display1 = document.getElementById("botnodestatus");
const circle11 = document.getElementById("circle");
const circle12 = document.getElementById("circle1");
const circle13 = document.getElementById("circle2");

const circle21 = document.getElementById("circle20");
const circle22 = document.getElementById("circle21");
const circle23 = document.getElementById("circle22");

function refreshTime() {

  if (node1sendingframe && botnodesendingframe)
  {
    collision = true;
  }

  if (node1sendingframe)
  {
    display.innerHTML = "Node 1 : Sending Frame";
  }
  else
  {
    display.innerHTML = "Node 1 is Idle "
  }

  if (botnodesendingframe)
  {
    display1.innerHTML = "Bot Node : Sending Frame";
  }
  else
  {
    display1.innerHTML = "Bot Node is Idle "
  }

  console.log(time1);
  console.log(time2);

  if (time1==="0")
  {
    circle11.style.borderColor="green";
    circle12.style.borderColor="green";
    circle13.style.borderColor="green";
  }
  if (time1==="5")
  {
    console.log(time1);
    circle11.style.borderColor="green";
    circle12.style.borderColor="red";
    circle13.style.borderColor="green";
    time1="0";
  }
  if (time1==="4")
  {
    console.log(time1);
    circle11.style.borderColor="red";
    circle12.style.borderColor="green";
    circle13.style.borderColor="green";
    time1="5";
  }
  if (time1==="3")
  {
    console.log(time1);
    circle11.style.borderColor="green";
    circle12.style.borderColor="green";
    circle13.style.borderColor="red";
    time1="4";
  }
  if (time1==="2")
  {
    console.log(time1);
    circle11.style.borderColor="green";
    circle12.style.borderColor="red";
    circle13.style.borderColor="green";
    time1="3";
  }
  if (time1==="1")
  {
    console.log(time1);
    circle11.style.borderColor="red";
    circle12.style.borderColor="green";
    circle13.style.borderColor="green";
    time1="2";
  }




  if (time2==="0")
  {
    circle21.style.borderColor="green";
    circle22.style.borderColor="green";
    circle23.style.borderColor="green";
  }
  if (time2==="5")
  {
    console.log(time2);
    circle21.style.borderColor="green";
    circle22.style.borderColor="red";
    circle23.style.borderColor="green";
    time2="0";
  }
  if (time2==="4")
  {
    console.log(time2);
    circle21.style.borderColor="red";
    circle22.style.borderColor="green";
    circle23.style.borderColor="green";
    time2="5";
  }
  if (time2==="3")
  {
    console.log(time2);
    circle21.style.borderColor="green";
    circle22.style.borderColor="green";
    circle23.style.borderColor="red";
    time2="4";
  }
  if (time2==="2")
  {
    console.log(time2);
    circle21.style.borderColor="green";
    circle22.style.borderColor="red";
    circle23.style.borderColor="green";
    time2="3";
  }
  if (time2==="1")
  {
    console.log(time2);
    circle21.style.borderColor="red";
    circle22.style.borderColor="green";
    circle23.style.borderColor="green";
    time2="2";
  }

}
setInterval(refreshTime, 1000);


function collisioncheck(){
  node1sendingframe=false;
  console.log("collision check");
  if (!collision)
  {
    console.log("collision check1");
    (document.getElementById("displaybox")).innerHTML=("Hub Recieved Frame from Node 1 !");
  }
  else
  {
    console.log("collision check2");
    (document.getElementById("displaybox")).innerHTML=("Interfered with bot node's signal");
    collision=false;
  }

}

function sendframe() {
  if (node1sendingframe)
  {
    alert("Already Sending Frame !");
  }
  else if (botnodesendingframe)
  {
    alert("Channel is not Free ! \n Please Try after Some time")
  }
  else
  {
  node1sendingframe=true;
  time1 = "1";
  (document.getElementById("displaybox")).innerHTML="Signal is being sent";
  setTimeout(function () {
    collisioncheck();
  }, traveltime);
  }
}

//bot code
let rand=0;
let sendtime=5;

let ch=1;
if (ch)
{
  channelstatus();
  refreshTime();
  ch=0;
}

function channelstatus(){
  channel_busy=false;
  console.log("Botsent");
  botnodesendingframe=false;
  rand=Math.random()*15;
  console.log(rand*1000);

  setTimeout(() => {
    botsendframe();
  },rand*1000);

}

function botsendframe(){
  channel_busy=true;
  time2 = "1";
  console.log("BotsendingFrame");
  botnodesendingframe=true;
  setTimeout(() => {
    channelstatus();
  },traveltime);
}

$(document).ready(function(){
  $('[data-bs-toggle="popover"]').popover({
  placement : 'top'
  });
});