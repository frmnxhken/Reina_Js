import { modelRegistry } from "./core/ModelRegistry.js";
import { ApplyPipeline } from "./pipelines/ApplyPipline.js";
import { BuildPipeline } from "./pipelines/BuildPipline.js";

export class Reina {
  constructor(model, config) {
    const ModelClass = modelRegistry[model];
    if (!ModelClass) throw new Error(`Model not found: ${model}`);

    this.instance = new ModelClass(config?.model?.params || config);
    this.pipeline = BuildPipeline(config?.preprocessing);
  }

  predict(x) {
    const transformed = ApplyPipeline(this.pipeline, x);
    return this.instance.predict(transformed);
  }
}
