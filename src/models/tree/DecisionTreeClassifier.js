import BaseModel from "../../core/BaseModel.js";

class DecisionTreeClassifier extends BaseModel {
  constructor(config) {
    super(config);
    this.tree = config.tree;
  }

  argMax(arr) {
    return arr.indexOf(Math.max(...arr));
  }

  traversal(row, node) {
    if (node.value !== undefined) {
      return this.argMax(node.value);
    }

    if (row[node.feature] <= node.threshold) {
      return this.traversal(row, node.left);
    } else {
      return this.traversal(row, node.right);
    }
  }

  predict(x) {
    const pred = this.traversal(x, this.tree);
    return pred;
  }
}

export default DecisionTreeClassifier;
