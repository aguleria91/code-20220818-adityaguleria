import { expect } from 'chai';
import { describe, it } from 'mocha';
import { BmiCalculator, BmiCategory } from '../../src/bmi';

describe("Bmi Calculator", () => {

  it("should return the correct bmi", async () => {
    const height = 171;
    const weight = 96;

    const bmi = BmiCalculator(height, weight);

    expect(bmi).to.be.a('number');
    expect(bmi).to.be.equal(32.8);
  })
})

describe("Bmi Category", () => {
  it("should return the correct bmi category", async () => {
    const bmi = 34.9;

    const category = BmiCategory(bmi);
    expect(category).to.be.an('object');
    expect(category).to.include({ bmiCategory: 'Moderately obese', healthRisk: 'Medium risk' });
  })
})