import App from '../App';
import Feature from "./feature"
import Collection from './collection';

const testImage = { url: "http://test.test.png" }

describe('Feature class', () => {
  it('should create a valid feature without error', () => {
    expect(() => new Feature("Title of Image", testImage, ["Andrew Dotterer", "Matthew Shipp"], 180, 0)).not.toThrow();
  })
});

describe('Collection Class', () => {
  it('should create collection from features', () => {
    const testFeature = new Feature("Title of Image", testImage, ["Andrew Dotterer", "Matthew Shipp"], 180, 0)

    const newFeatures = Array(4).fill(testFeature)
    expect(() => { new Collection(newFeatures, "ordered") }).not.toThrow()
    
  })
})
