/* eslint-disable no-extra-parens */
const PROBABILITY = 1 / 10000;
const MIN_RADIUS = 1;
const MAX_RADIUS = 4;
const FADE_DURATION = 5000;
const FADE_PROBABILITY = 1 / 100;
const THREESIXTY_DEGREES = Math.PI / 180 * 360;

const COLORS = [
  "0,0,0",
  "0,255,100",
  "0,100,255"
];

function getStyleString (color, alpha) {
  return `rgba(${color},${alpha})`;
}

function randomBetween (min, max) {
  return (Math.random() * (max - min)) + min;
}

export class BackgroundCanvas {
  constructor (element) {
    this._element = element;
    this._ctx = element.getContext("2d");
    this._destroyed = false;
    this._animationFrameRequestID = null;
    this._points = [];
    this._transformation = [0, 0];
    this.width = null;
    this.height = null;
    this._isTouch = false;

    this._windowListeners = {
      touchstart: () => {
        this._isTouch = true;
      },
      resize: () => {
        this._points = [];
        this._init();
      },
      mousemove: event => {
        if (this._isTouch) return;

        const { clientX: x, clientY: y } = event;
        this._transformation = [(this.width / 2) - x, (this.height / 2) - y];
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

    for (let x = 0; x < this.width; x += 1) {
      for (let y = 0; y < this.height; y += 1) {
        if (Math.random() < PROBABILITY) {
          const radius = randomBetween(MIN_RADIUS, MAX_RADIUS);
          const z = randomBetween(-0.2, 0.2);
          const color = Math.round(Math.random() * (COLORS.length - 1));

          this._points.push([x, y, z, radius, color]);
        }
      }
    }

    console.log("Count of points:", this._points.length);
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
    const [transformX, transformY] = this._transformation;

    ctx.clearRect(0, 0, this.width, this.height);

    let first = true;
    for (const point of this._points) {
      const [x, y, z, radius, color] = point;
      let [,,,,, fadeStartTime] = point;

      let fadeProgress = 0;

      if (fadeStartTime === undefined) {
        if (Math.random() < FADE_PROBABILITY) {
          fadeStartTime = Date.now();
          point[5] = fadeStartTime;
        }
      } else {
        fadeProgress = (Date.now() - fadeStartTime) / FADE_DURATION;
      }

      ctx.fillStyle = getStyleString(COLORS[color], fadeProgress);

      ctx.beginPath();
      ctx.arc(x + (transformX * z), y + (transformY * z), radius, 0, THREESIXTY_DEGREES);
      ctx.fill();

      point[0] = x + 0.5;

      if (point[0] > this.width) {
        point[0] = 0;
      }

      if (first) {
        first = false;
      }
    }
  }
}
