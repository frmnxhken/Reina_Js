import { registry } from "./core/Registry.js";

export class Reina {
  constructor(model, config) {
    const ModelClass = registry[model];
    if (!ModelClass) throw new Error(`Model not found: ${model}`);

    this.instance = new ModelClass(config);
  }

  predict(x) {
    return this.instance.predict(x);
  }
}
