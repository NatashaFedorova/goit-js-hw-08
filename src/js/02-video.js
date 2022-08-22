import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const videoplayerCurrentTime =
  localStorage.getItem('videoplayer-current-time') || 0;

player.on('timeupdate', throttle(onTimeupdate, 1000));

console.log(videoplayerCurrentTime);

function onTimeupdate(data) {
  console.log(data.seconds);

  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player
  .setCurrentTime(videoplayerCurrentTime)
  .then(function (seconds) {
    console.log('seconds', seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
