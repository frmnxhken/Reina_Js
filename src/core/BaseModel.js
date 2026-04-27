export default class BaseModel {
  constructor(config) {
    this.config = config;
  }

  predict(x) {
    throw new Error("Not implemented");
  }
}
