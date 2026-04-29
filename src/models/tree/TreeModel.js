import BaseModel from "../../core/BaseModel.js";

class TreeModel extends BaseModel {
  constructor(config) {
    super(config);
    this.tree = config.tree;
  }

  argMax(arr) {
    return arr.indexOf(Math.max(...arr));
  }

  traversal(row, node) {
    if (node.value !== undefined) {
      return this.handleLeafFn(node.value);
    }

    if (row[node.feature] <= node.threshold) {
      return this.traversal(row, node.left);
    } else {
      return this.traversal(row, node.right);
    }
  }

  handleLeafFn(value) {
    return value;
  }
}

export default TreeModel;
