import LinearModel from "./LinearModel.js";

class LinearRegression extends LinearModel {
  predict(x) {
    const y = this.score(x);
    return y;
  }
}

export default LinearRegression;
