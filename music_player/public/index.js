const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress = document.getElementById("progress");
let current_time = document.getElementById("current_time");
let duration_time = document.getElementById("duration");
let progress_div = document.getElementById("progress_div");

const songs = [
  {
    name: "song-1",
    title: "Perfect",
    artist: "Ed Sheeran",
  },
  {
    name: "song-2",
    title: "Girls Like you",
    artist: "Maroon 5",
  },
  {
    name: "song-3",
    title: "Faded",
    artist: "Alan Walker",
  },
];

var num = 0;
let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

const stopMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? stopMusic() : playMusic();
});

const loadSong = (song) => {
  title.textContent = song.title;
  artist.textContent = song.artist;
  music.src = `./music/${song.name}.mp3`;
  img.src = `./images/${song.name}.jpg`;
};

const nextSong = () => {
  num = (num + 1) % songs.length;
  loadSong(songs[num]);
  playMusic();
};

const prevSong = () => {
  num = (num - 1 + songs.length) % songs.length;
  loadSong(songs[num]);
  playMusic();
};

music.addEventListener("timeupdate", (event) => {
  // console.log(e);
  const { currentTime, duration } = event.target;

  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;

  current_time.innerHTML = `${Math.floor(currentTime / 60)}:${
    Math.floor(currentTime % 60) > 9
      ? Math.floor(currentTime % 60)
      : "0" + Math.floor(currentTime % 60)
  }`;

  let tot_duration = `${Math.floor(duration / 60)}:${
    Math.floor(duration % 60) > 10
      ? Math.floor(duration % 60)
      : "0" + Math.floor(duration % 60)
  }`;

  if (duration) {
    duration_time.textContent = tot_duration;
  }
});

progress_div.addEventListener("click", (e) => {
  const { duration } = music;
  let move_progress = (e.offsetX / e.target.clientWidth) * duration;
  music.currentTime = move_progress;
});

const next_song = next.addEventListener("click", nextSong);

const prev_song = prev.addEventListener("click", prevSong);

music.addEventListener("ended", nextSong);
