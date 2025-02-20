class Color {
  constructor() {
    this.colorType = [
      "#2336FB",
      "#497068",
      "#599F96",
      "#1544C7",
      "#3542AF",
      "#15FCA9",
      "#10EF55",
      "#722031",
    ];
    this.record = [];
  }

  generateColor() {
    const generateColor = document.querySelector("#bg-color");
    const colorAnswer = document.querySelector("#d-color");
    const randomColor =
      this.colorType[Math.floor(Math.random() * this.colorType.length)];

    generateColor.style.backgroundColor = randomColor;
    colorAnswer.innerHTML = `Background Color: ${randomColor}`;
    this.record.push(randomColor);
  }

  getRecord() {
    return this.record;
  }

  reset() {
    this.record = [];
    const generateColor = document.querySelector("#bg-color");
    const colorAnswer = document.querySelector("#d-color");

    generateColor.style.backgroundColor = "blue";
    colorAnswer.innerHTML = "Background Color:";
  }
}
const color = new Color();
