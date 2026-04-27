import BaseModel from "../../core/BaseModel.js";
import { euclidean } from "../../math/Distance.js";

class KNN extends BaseModel {
  constructor(config) {
    super(config);
    this.k = config.n_neighbors;
  }

  predict(x) {
    // Skip for rn
  }
}
