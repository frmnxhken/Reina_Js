import BaseModel from "../../core/BaseModel.js";

class GaussianNB extends BaseModel {
  constructor(config) {
    super(config);
    this.prior = config.class_prior;
    this.means = config.theta;
    this.variances = config.var;
  }

  probability(x) {
    let result = Array.from({ length: this.prior.length }, () => []);
    for (let i = 0; i < x.length; i++) {
      this.variances.forEach((v, index) => {
        let b = Math.sqrt(2 * 3.14 * v[i]);
        let s = Math.pow(x[i] - this.means[index][i], 2);
        let e = Math.exp(-(s / (2 * v[i])));
        let p = (1 / b) * e;
        result[index].push(p);
      });
    }
    return result;
  }

  likelihood(probs) {
    return probs.map((classProbs) =>
      classProbs.reduce((acc, val) => acc * val, 1),
    );
  }

  posterior(likelihoods) {
    return likelihoods.map((l, i) => l * this.prior[i]);
  }

  predict(x) {
    const probs = this.probability(x);
    const likelihoods = this.likelihood(probs);
    const posteriors = this.posterior(likelihoods);
    const y = posteriors.indexOf(Math.max(...posteriors));
    return y;
  }
}

export default GaussianNB;
