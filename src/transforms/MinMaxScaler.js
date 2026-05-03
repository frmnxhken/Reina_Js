import BaseTransform from "../core/BaseTransform.js";

class MinMaxScaler extends BaseTransform {
  constructor({ min, max }) {
    super();
    this.min = min;
    this.max = max;
  }

  transform(x) {
    return x.map((val, i) => {
      const min = this.min[i];
      const max = this.max[i];
      const range = max - min;

      if (range === 0) return 0;

      return (val - min) / range;
    });
  }
}

export default MinMaxScaler;
