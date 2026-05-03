import BaseModel from "../../core/BaseModel.js";
import { dot } from "../../math/Linear.js";

class LinearModel extends BaseModel {
  constructor(config) {
    super(config);
    this.coef = config.coef;
    this.intercept = config.intercept;
  }

  score(x) {
    if (Array.isArray(this.coef[0])) {
      return this.coef.map((w, i) => {
        const z = dot(x, w) + this.intercept[i];
        return z;
      });
    }

    const z = dot(x, this.coef) + this.intercept;
    return z;
  }
}

export default LinearModel;
