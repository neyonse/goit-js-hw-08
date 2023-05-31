import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_TIME_KEY = 'videoplayer-current-time';

const storedTime = localStorage.getItem(STORAGE_TIME_KEY);

if (storedTime !== null) {
  setCurrentTime(storedTime);
}

player.on('timeupdate', onTimeUpdate);

const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

function onTimeUpdate(event) {
  const currentTime = event.seconds;
  throttledSaveCurrentTime(currentTime);
}

function saveCurrentTime(currentTime) {
  localStorage.setItem(STORAGE_TIME_KEY, currentTime);
}

function setCurrentTime(storedTime) {
  player.setCurrentTime(storedTime).catch(error => {
    console.log(error.name);
    console.log(error.message);
    console.log(
      'We are sorry, there was an issue. The video will restart from the beginning.'
    );
    saveCurrentTime(0);
  });
}

//---------------------------------------------------------------------------------------------------------------------------

// player.on(
//   'timeupdate',
//   throttle(({ seconds }) => {
//     localStorage.setItem(STORAGE_TIME_KEY, seconds);
//   }, 1000)
// );

// player.setCurrentTime(localStorage.getItem(STORAGE_TIME_KEY) || 0);
