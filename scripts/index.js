import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach(item => item.classList.remove('active'));
  playerBlock.forEach(item => item.classList.remove('active'));
}

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');

    const playerVideo = document.querySelector('.player-video');
    const playerAudio = document.querySelector('.player-audio');
    const videoPlayer = document.querySelector('.video-player');
    const audioPlayer = document.querySelector('.audio-player');

    if (!playerVideo.classList.contains('active')) {
      videoPlayer.pause();
    }

    if (!playerAudio.classList.contains('active')) {
      const audio = document.querySelector('.audio');
      const audioButtonPlay = document.querySelector('.audio-button__play');
      audioPlayer.pause();
      audio.classList.toggle('play');
      audioButtonPlay.classList.remove('fa-pause');
      audioButtonPlay.classList.add('fa-play');
    }
}));

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();