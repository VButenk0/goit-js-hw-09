const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

refs.stopBtn.disabled = true;

function onStartBtnClick() {
  changeColor.start();
}

function onStopBtnClick() {
  changeColor.stop();
}

const changeColor = {
  setIntervalId: null,
  isActive: false,

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.setIntervalId = setInterval(() => {
      this.color();
    }, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  },

  stop() {
    clearInterval(this.setIntervalId);
    this.isActive = false;
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  },

  color() {
    refs.body.style.backgroundColor = getRandomHexColor();
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
