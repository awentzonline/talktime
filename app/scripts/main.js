'use strict';

$(function () {
  var meSpeak = require('mespeak');
  meSpeak.loadConfig(require('mespeak/src/mespeak_config.json'));
  meSpeak.loadVoice(require('mespeak/voices/en/en-us.json'));
  
  $('#test-form').submit(function (e) {
    e.preventDefault();
    var words = $('[name=words]', this).val();
    console.log('saying ' + words);
    meSpeak.speak(words);
    return false;
  });

});
