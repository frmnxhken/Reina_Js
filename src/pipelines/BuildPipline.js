import { transformRegistry } from "../core/TransformRegistry.js";

export function BuildPipeline(steps = []) {
  return steps.map((step) => {
    const TransformClass = transformRegistry[step.type];

    if (!TransformClass) {
      throw new Error(`Transform type not found: ${step.type}`);
    }

    return new TransformClass(step.params);
  });
}
