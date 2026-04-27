const config = {
  coef: [76700.0328, -4.6279],
  intercept: -152869132.23,
};

const model = new Reina("LinearRegression", config);
const result = model.predict([2025, 450]);
console.log(result);
