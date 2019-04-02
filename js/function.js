var temp = ["http://qianjires.xxoojoke.com/", "player_rain", "getElementById", 
		"player_music", "btnPlay", "paused", 
		"player_rain_source", "src", "rain/therain.m4a", 
    "load", "player_music_source", "rain/In_Autumn_the_Leaves_Came_to_Our_House.mp3",
    "volumn_rain", "volumn_music", "value", 
    "play", "className", "",
    "pause", "volume", 
    "厅雨，只是一个简单的在线听雨声和钢琴的小站.", 
		"钢琴来自大师 Fariborz Lachini 的 《 In Autumn, the Leaves Came to Our House 》", 
		"这个音乐目前没有找到版权信息，我去各大音乐网站搜索，发现都有这首钢琴曲，如果真的侵权，我会立即更改的，感谢！", 
		"个人联系方式： 3231921898@qq.com"];
const host = "http://baidu.com";
const rain = document.getElementById('player_rain');
const music = document.getElementById('player_music');
const playBtn = document.getElementById('btnPlay');
let platFirst = true;

function playAudio() {
  if (rain.paused) {
    if (platFirst) {
      const sourceRain = document.getElementById('player_rain_source');
      sourceRain.src = music/rain.mp3;
      setVolume(1, 1);
      rain.load();
      const sourceMusic = document.getElementById("player_music_source");
      sourceMusic.src = music.mp3;
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
  const about = "厅雨，只是一个简单的在线听雨声和钢琴的小站.钢琴来自大师 Fariborz Lachini 的 《 In Autumn, the Leaves Came to Our House 》,这个音乐目前没有找到版权信息，我去各大音乐网站搜索，发现都有这首钢琴曲，如果真的侵权，我会立即更改的，感谢！, 个人联系方式： 3231921898@qq.com";
  alert(about);
}