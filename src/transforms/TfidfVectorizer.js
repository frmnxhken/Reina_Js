import BaseTransform from "../core/BaseTransform.js";

class TfidfVectorizer extends BaseTransform {
  constructor(config) {
    super(config);
    this.vocab = config.vocab;
    this.idf = config.idf;
  }

  transform(x) {
    const tokens = x.toLowerCase().split(" ");
    const tf = new Array(Object.keys(this.vocab).length).fill(0);

    tokens.forEach((token) => {
      if (this.vocab[token] !== undefined) {
        tf[this.vocab[token]] += 1;
      }
    });

    const total = tokens.length;
    for (let i = 0; i < tf.length; i++) {
      tf[i] = tf[i] / total;
    }

    return tf.map((v, i) => v * this.idf[i]);
  }
}

export default TfidfVectorizer;
