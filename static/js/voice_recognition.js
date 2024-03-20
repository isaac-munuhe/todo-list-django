// voice_recognition.js

document.addEventListener('DOMContentLoaded', function() {
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        console.log(transcript);
        // Here you can process the transcript, e.g., add it as a task
    };

    // Example button to start voice recognition
    var startButton = document.getElementById('start-voice-recognition');
    startButton.addEventListener('click', function() {
        recognition.start();
    });
});