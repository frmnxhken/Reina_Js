import BaseModel from "../../core/BaseModel.js";
import { euclidean } from "../../math/Distance.js";

class KNN extends BaseModel {
  constructor(config) {
    super(config);
    this.k = config.n_neighbors;
    this.x_train = config.fit_x;
    this.y_train = config.fit_y;
  }

  voting(nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
      count += num === candidate ? 1 : -1;
    }
    return candidate;
  }

  predict(x) {
    let distances = [];
    for (let i = 0; i < this.x_train.length; i++) {
      let d = euclidean(x, this.x_train[i]);
      distances.push(this.y_train[i], d);
    }

    let sorted = distances.sort((a, b) => a[1] - b[1]);
    let indexes = [];
    sorted.splice(1, this.k).forEach((s) => indexes.push(s[0]));
    let y = this.voting(indexes);
    return y;
  }
}
