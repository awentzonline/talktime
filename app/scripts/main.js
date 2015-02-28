'use strict';

$(function () {
  var meSpeak = require('mespeak');
  meSpeak.loadConfig(require('mespeak/src/mespeak_config.json'));
  meSpeak.loadVoice(require('mespeak/voices/en/en-us.json'));
  
  var phrases = [
    'intercourse', 'pubic hair', 'ribald', 'uterus'
  ];
  var numPhrases = phrases.length;
  var startTime = new Date(Date.parse('Sat Feb 28 2015 16:41:31 GMT-0600 (CST)'));
  var delay = 2 * 1000;
  var speakOptions = {

  };
  var lastIndex = -1;
  function pollShout() {
    var now = new Date();
    var dt = now - startTime;
    var thisIndex = parseInt((dt / delay) % numPhrases);
    if (thisIndex != lastIndex) {
      var phrase = phrases[thisIndex];
      meSpeak.speak(phrase, speakOptions)
      lastIndex = thisIndex;
    }
  }
  setInterval(pollShout, 100);

}); 
