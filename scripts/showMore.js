var status = "less";

function toggleText() {
  	var text = "Sampler is a sampling instrument that brings powerful multisample \
  				playback and import, as well as profound sound design capabilities to Ableton Live. \
  				Sampler is Ableton's advanced sampling instrument. It's extremely versatile, combining \ 
  				traditional sampling features with advanced sound design and synthesis. Sampler can handle \ 
  				any kind of multi-gigabyte instrument library you care to name--including GigaStudio, EXS, \
  				SoundFont and (non-encrypted) Kontakt. But the fun really starts when you go in deep and \ 
  				start sound-shaping--Sampler gives you intuitive control over every detail of your sound. \ 
  				Be prepared to create vibrant and complex sounds from even the most basic audio source material.";
  	if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "See More";
        status = "less"
    }
}