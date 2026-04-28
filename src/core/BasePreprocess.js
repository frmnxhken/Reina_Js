export default class BasePreprocess {
  constructor(params = {}) {
    this.params = params;
  }

  transform(x) {
    throw new Error("transform() not implemented");
  }
}
