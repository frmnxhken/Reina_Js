import LinearRegression from "../models/linear/LinearRegression.js";
import Logistic from "../models/linear/Logistic.js";
import Perceptron from "../models/linear/Perceptron.js";
import DecisionTreeClassifier from "../models/tree/DecisionTreeClassifier.js";
import GaussianNB from "../models/prob/GaussianNB.js";
import DecisionTreeRegressor from "../models/tree/DecisionTreeRegressor.js";

export const modelRegistry = {
  // Linear model
  LinearRegression: LinearRegression,
  logisticRegression: Logistic,
  Perceptron: Perceptron,

  // Tree Model
  DecisionTreeClassifier: DecisionTreeClassifier,
  DecisionTreeRegressor: DecisionTreeRegressor,

  // Prob Model
  GaussianNB: GaussianNB,
};
