const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    const txt = document.querySelector('#text').value.toUpperCase().trim();
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(txt);
    synth.speak(utterance);
    txt.value = " ";
});
