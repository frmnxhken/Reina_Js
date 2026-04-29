import TreeModel from "./TreeModel.js";

class DecisionTreeClassifier extends TreeModel {
  predict(x) {
    const y = this.traversal(x, this.tree);
    return y;
  }

  handleLeafFn(value) {
    return this.argMax(value);
  }
}

export default DecisionTreeClassifier;
