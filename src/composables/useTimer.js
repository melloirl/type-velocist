// Create a class called Timer using high-resolution time with milliseconds precision
// The class should be able to start, stop, and reset the timer
// And also be able to return the elapsed time in seconds in a format like this: 00:00:00
// Or in milliseconds in a format like this: 000000

class HighResTimer {
  constructor() {
    this.startTime = 0;
    this.stopTime = 0;
    this.running = false;
    this.elapsed = 0;
  }

  start() {
    this.startTime = performance.now();
    this.running = true;
  }

  stop() {
    if (!this.running) return;
    this.stopTime = performance.now();
    this.running = false;
    this.elapsed += this.stopTime - this.startTime;
  }

  reset() {
    this.startTime = 0;
    this.stopTime = 0;
    this.running = false;
    this.elapsed = 0;
  }

  isRunning() {
    return this.running;
  }

  getElapsedTime(seconds = false) {
    if (this.running) {
      const ms = this.elapsed + (performance.now() - this.startTime);
      return seconds ? ms / 1000 : ms;
    } else {
      const ms = this.elapsed;
      return seconds ? ms / 1000 : ms;
    }
  }
}

// Format a number do take maximum 2 decimal places
export const formatNumber = (number) => {
  return number.toFixed(2);
};

export const useHighResTimer = () => {
  return new HighResTimer();
};
