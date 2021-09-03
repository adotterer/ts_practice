import Feature from "./feature"

type CollectionStyle = |"ordered" | "unordered"

export default class Collection {
  features: Feature[];
  style: CollectionStyle;

  constructor(features: Feature[], style: CollectionStyle) {
    this.features = features;
    this.style = style;
  }

}
