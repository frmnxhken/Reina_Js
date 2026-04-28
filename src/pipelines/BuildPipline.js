import { preprocessingRegistry } from "../core/PreprocessingRegistry.js";

export function BuildPipeline(steps = []) {
  return steps.map((step) => {
    const PreprocessClass = preprocessingRegistry[step.type];

    if (!PreprocessClass) {
      throw new Error(`Preprocessing not found: ${step.type}`);
    }

    return new PreprocessClass(step.params);
  });
}
