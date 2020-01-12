/* eslint-disable no-extra-parens */
const PROBABILITY = 1 / 50000;
const HEIGHT = 2;
const MIN_LINE_LENGTH = 20;
const MAX_LINE_LENGTH = 300;
const SPEED = 0.4;
const APPEAR_PROBABILITY = 1;

const COLORS = [
  "#000000",
  "#00ff64",
  "rgba(0,255,100,0.2)",
  "#0064ff"
];

function randomBetween (min, max) {
  return (Math.random() * (max - min)) + min;
}

export class BackgroundCanvas {
  constructor (element) {
    this._element = element;
    this._ctx = element.getContext("2d");
    this._destroyed = false;
    this._animationFrameRequestID = null;
    this._lines = null;
    this.width = null;
    this.height = null;

    this._windowListeners = {
      touchstart: () => {
        this._isTouch = true;
      },
      resize: () => {
        this._points = [];
        this._init();
      }
    };

    Object.entries(this._windowListeners)
      .forEach(([event, listener]) => window.addEventListener(event, listener, { passive: true }));

    this._init();
    this._loop();
  }

  destroy() {
    if (this._destroyed) {
      throw new Error("Instance is already destroyed.");
    }

    this._destroyed = true;
    this._element = null;
    this._ctx = null;

    Object.entries(this._windowListeners)
      .forEach(([event, listener]) => window.removeEventListener(event, listener));

    if (this._animationFrameRequestID !== null) {
      cancelAnimationFrame(this._animationFrameRequestID);
    }
  }

  get destroyed() {
    return this._destroyed;
  }

  _init() {
    this._element.width = window.innerWidth;
    this._element.height = window.innerHeight;

    this.width = this._element.clientWidth;
    this.height = this._element.clientHeight;

    while (this._lines === null || this._lines.length < 8) {
      this._lines = [];

      for (let x = 0; x < this.width; x += 1) {
        for (let y = 0; y < this.height; y += 1) {
          if (Math.random() < PROBABILITY) {
            const color = Math.round(Math.random() * (COLORS.length - 1));
            const length = 0;

            this._lines.push({ x, y, color, length });
          }
        }
      }
    }
  }

  _loop() {
    this._animationFrameRequestID = null;

    this._draw();

    if (!this._destroyed) {
      requestAnimationFrame(() => this._loop());
    }
  }

  _draw() {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    const ctx = this._ctx;

    if (ctx === null) return;

    ctx.clearRect(0, 0, this.width, this.height);

    for (const line of this._lines) {
      if (line.length === 0) {
        if (Math.random() < APPEAR_PROBABILITY) {
          line.length = randomBetween(MIN_LINE_LENGTH, MAX_LINE_LENGTH);
        }
      }

      ctx.fillStyle = COLORS[line.color];
      ctx.fillRect(line.x, line.y, line.length, HEIGHT);

      line.x += SPEED;

      if (line.x >= this.width) {
        line.x = -line.length;
      }
    }
  }
}
