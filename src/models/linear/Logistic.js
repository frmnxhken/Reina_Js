import LinearModel from "./LinearModel.js";
import { sigmoid, softmax } from "../../math/Stats.js";

class Logistic extends LinearModel {
  constructor(config) {
    super(config);
    this.threshold = config.threshold ?? 0.5;
    this.total_class = config.classes.length;
  }

  predict(x) {
    const z = this.score(x);

    // Binary Class
    if (this.total_class === 2) {
      const activation = sigmoid(z);
      const y = activation >= this.threshold ? 1 : 0;
      return y;
    }

    // Multiclass
    const activation = softmax(z);
    const y = activation.indexOf(Math.max(...activation));
    return y;
  }
}

export default Logistic;
