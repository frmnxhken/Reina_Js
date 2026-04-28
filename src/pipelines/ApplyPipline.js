export function ApplyPipeline(pipeline, x) {
  let result = x;

  for (const step of pipeline) {
    result = step.transform(result);
  }

  return result;
}
