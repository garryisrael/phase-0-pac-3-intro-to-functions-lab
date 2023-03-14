function shout(string){
const message = string.toUpperCase();
return message;
}

function whisper(string){
  const message = string.toLowerCase();
  return message;
}

function logShout(string){
  const message = string.toUpperCase();
  console.log(message);
}

function logWhisper(string){
  const message = string.toLowerCase();
  console.log(message);
}

function sayHiToHeadphonedRoommate(string){
  const message1 = string.toUpperCase();
  const message2 = string.toLowerCase();
  const message3 = "Let's have dinner together!";

  if(string == message2){
    return (`I can\'t hear you!`);
  }
  else if(string == message1){
    return ("YES INDEED!");
  }

  else if (string == message3){
    return ("I would love to!");
}
}