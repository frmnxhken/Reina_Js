import BaseModel from "../../core/BaseModel.js";
import { dot } from "../../math/Linear.js";

class Perceptron extends BaseModel {
  constructor(config) {
    super(config);
    this.coef = config.coef;
    this.intercept = config.intercept;
  }

  predict(x) {
    const z = dot(x, this.coef) + this.intercept;
    return z < 0 ? 0 : 1;
  }
}

export default Perceptron;
