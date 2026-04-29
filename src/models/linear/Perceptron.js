import LinearModel from "./LinearModel.js";

class Perceptron extends LinearModel {
  predict(x) {
    const z = this.score(x);
    const y = z < 0 ? 0 : 1;
    return y;
  }
}

export default Perceptron;
