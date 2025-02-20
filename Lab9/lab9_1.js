class Counter {
  constructor() {
    this.count = 0;
  }

  increase() {
    this.count++;
    document.querySelector("#count").innerHTML = this.count;
  }

  decrease() {
    this.count--;
    document.querySelector("#count").innerHTML = this.count;
  }

  reset() {
    this.count = 0;
    document.querySelector("#count").innerHTML = this.count;
  }
}
const counter = new Counter();
