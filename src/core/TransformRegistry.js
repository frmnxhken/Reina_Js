import MinMaxScaler from "../transforms/MinMaxScaler.js";
import TfidfVectorizer from "../transforms/TfidfVectorizer.js";

export const transformRegistry = {
  minmax_scaler: MinMaxScaler,
  TfidfVectorizer: TfidfVectorizer,
};
