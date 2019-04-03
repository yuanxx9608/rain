var rain = document.getElementById('player_rain');
var music = document.getElementById('player_music');
var playBtn = document.getElementById('btnPlay');
var platFirst = true;
var rainarray=["rain.mp3"];
var musicarray=["rain.mp3"];

function playAudio() {
  if (rain.paused) {
    if (platFirst) {
      const sourceRain = document.getElementById('player_rain_source');
      sourceRain.src = "music/rain.m4a";
      setVolume(1, 1);
      rain.load();
      const sourceMusic = document.getElementById("player_music_source");
      sourceMusic.src = "music/music.mp3";
      setVolume(0.3, 2);
      music.load();
    } else {
      const volumn1 = document.getElementById('volumn_rain');
      const volumn2 = document.getElementById('volumn_music');
      setVolume(volumn1.value, 1);
      setVolume(volumn2.value, 2);
    }
    rain.play();
    music.play();
    playBtn.className = "";
    playBtn.className = "pause";
  } else {
    // stopAudio(rain);
    // stopAudio(music);
    rain.pause();
    music.pause();
    playBtn.className = "";
    playBtn.className = "play";
  }
  platFirst = false;
}

function setVolume(volume, target) {
  if (target === 1) {
    rain.volume = volume;
  } else {
    music.volume = volume;
  }
}

// function stopAudio(_d5b8xf) {
//   let _d5b8x10 = _d5b8xf[temp[13]];
//   const _d5b8x11 = setInterval(function() {
//     _d5b8x10 -= 0.1;
//     if (_d5b8x10 > 0) {
//       _d5b8xf[temp[13]] = _d5b8x10
//     } else {
//       clearInterval(_d5b8x11);
//       _d5b8xf[temp[12]]()
//     }
//   },
//   100)
// }

function click_about() {
  const about = "听雨轩--简单的听雨声和钢琴的小站，音乐如有侵权立删，感谢支持! e-mail:3231921898@qq.com";
  alert(about);
}