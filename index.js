function textspeak(){
    if ('speechSynthesis' in window) { 
    var msg = document.getElementById("tts").value;

    var speech = new SpeechSynthesisUtterance();
    speech.text =msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
    }

    else{ 
        document.write("Browser not supported") 
      } 
}