import BaseModel from "../../core/BaseModel.js";
import { dot } from "../../math/Linear.js";

class LinearRegression extends BaseModel {
  constructor(config) {
    super(config);
    this.coef = config.coef;
    this.intercept = config.intercept;
  }

  predict(x) {
    const y = dot(x, this.coef) + this.intercept;
    return y;
  }
}

export default LinearRegression;
