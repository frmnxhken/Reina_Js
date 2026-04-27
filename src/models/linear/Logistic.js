import BaseModel from "../../core/BaseModel.js";
import { dot, sigmoid } from "../../math/Linear.js";

class Logistic extends BaseModel {
  constructor(config) {
    super(config);
    this.coef = config.coef;
    this.intercept = config.intercept;
    this.threshold = 0.5;
  }

  predict(x) {
    const z = dot(x, this.coef) + this.intercept;
    const activation = sigmoid(z);
    return activation >= this.threshold ? 1 : 0;
  }
}

export default Logistic;
