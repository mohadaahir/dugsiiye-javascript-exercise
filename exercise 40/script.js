const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const speedBtn = document.getElementById("speed-btn");
const progressBar = document.querySelector(".progress-bar");
const progressFill = document.querySelector(".progress-fill");
const currentTimeEl = document.querySelector(".current-time");
const totalTimeEl = document.querySelector(".total-time");
const volumeSlider = document.querySelector(".volume-slider");
const volumeIcon = document.querySelector(".volume-control i");
const videoEl = document.getElementById("player-video");

const videoFiles = [
  "video list/1_60fps.mp4",
  "video list/2_30fps.mp4",
  "video list/3_60fps.mp4",
  "video list/4_30fps.mp4",
  "video list/5_60fps.mp4",
];

const speeds = ["0.5x", "0.75x", "1x", "1.25x", "1.5x", "2x"];
let speedIndex = 2;
let currentIndex = 0;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function loadVideo(index) {
  currentIndex = index;
  const src = encodeURI(videoFiles[currentIndex]);
  videoEl.src = src;
  document.querySelector('.song-title').textContent = `Video ${currentIndex + 1}`;
  videoEl.load();
}

function updateProgress() {
  if (!videoEl.duration) return;
  const percent = (videoEl.currentTime / videoEl.duration) * 100;
  progressFill.style.width = `${percent}%`;
  currentTimeEl.textContent = formatTime(videoEl.currentTime);
  totalTimeEl.textContent = formatTime(videoEl.duration);
}

playBtn.addEventListener('click', () => {
  if (videoEl.paused) videoEl.play();
  else videoEl.pause();
});

videoEl.addEventListener('play', () => {
  const icon = playBtn.querySelector('i');
  icon.classList.replace('fa-play', 'fa-pause');
  playBtn.classList.add('playing');
});

videoEl.addEventListener('pause', () => {
  const icon = playBtn.querySelector('i');
  icon.classList.replace('fa-pause', 'fa-play');
  playBtn.classList.remove('playing');
});

videoEl.addEventListener('timeupdate', updateProgress);
videoEl.addEventListener('loadedmetadata', updateProgress);
videoEl.addEventListener('ended', () => {
  const icon = playBtn.querySelector('i');
  icon.classList.replace('fa-pause', 'fa-play');
  playBtn.classList.remove('playing');
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + videoFiles.length) % videoFiles.length;
  loadVideo(currentIndex);
  videoEl.play();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % videoFiles.length;
  loadVideo(currentIndex);
  videoEl.play();
});

progressBar.addEventListener('click', (e) => {
  if (!videoEl.duration) return;
  const rect = progressBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  videoEl.currentTime = percent * videoEl.duration;
  updateProgress();
});

speedBtn.addEventListener('click', () => {
  speedIndex = (speedIndex + 1) % speeds.length;
  speedBtn.textContent = speeds[speedIndex];
  const value = parseFloat(speeds[speedIndex]);
  videoEl.playbackRate = value;
});

volumeSlider.addEventListener('input', () => {
  const value = volumeSlider.value;
  videoEl.volume = value / 100;
  volumeIcon.className =
    value == 0
      ? 'fa-solid fa-volume-xmark'
      : value < 50
        ? 'fa-solid fa-volume-low'
        : 'fa-solid fa-volume-high';
});

// Initialize
loadVideo(currentIndex);
