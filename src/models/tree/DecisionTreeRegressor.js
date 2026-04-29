import TreeModel from "./TreeModel.js";

class DecisionTreeRegressor extends TreeModel {
  predict(x) {
    const y = this.traversal(x, this.tree);
    return y;
  }
}

export default DecisionTreeRegressor;
