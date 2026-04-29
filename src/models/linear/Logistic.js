import LinearModel from "./LinearModel.js";
import { sigmoid } from "../../math/Stats.js";

class Logistic extends LinearModel {
  constructor(config) {
    super(config);
    this.threshold = config.threshold ?? 0.5;
  }

  predict(x) {
    const z = this.score(x);
    const activation = sigmoid(z);
    const y = activation >= this.threshold ? 1 : 0;
    return y;
  }
}

export default Logistic;
