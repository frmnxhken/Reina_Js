export default class BaseTransform {
  constructor(params = {}) {
    this.params = params;
  }

  transform(x) {
    throw new Error("transform() not implemented");
  }
}
