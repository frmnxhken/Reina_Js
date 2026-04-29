import BaseModel from "../../core/BaseModel.js";
import { dot } from "../../math/Linear.js";

class LinearModel extends BaseModel {
  constructor(config) {
    super(config);
    this.coef = config.coef;
    this.intercept = config.intercept;
  }

  score(x) {
    const z = dot(x, this.coef) + this.intercept;
    return z;
  }
}

export default LinearModel;
