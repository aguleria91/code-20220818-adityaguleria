const { expect } = require('chai');
const { describe, it } = require('mocha');
const { BmiCalculator, BmiCategory } = require('../../src/bmi');

describe("Bmi Calculator", () => {

  it("should return an error if height is not a number", async () => {
    const height = "abc";
    const weight = 96;

    try {
      const bmi = BmiCalculator(height, weight);
    } catch (error) {
      expect(error.message).to.be.eq("height must be an number")
    }
  })

  it("should return an error if weight is not a number", async () => {
    const height = 196;
    const weight = "abc";

    try {
      const bmi = BmiCalculator(height, weight);
    } catch (error) {
      expect(error.message).to.be.eq("weight must be an number")
    }
  })

  it("should return the correct bmi", async () => {
    const height = 171;
    const weight = 96;

    const bmi = BmiCalculator(height, weight);

    expect(bmi).to.be.a('number');
    expect(bmi).to.be.equal(32.8);
  })
})

describe("Bmi Category", () => {

  it("should return an error if bmi range is not a number", async () => {
    const bmi = "abc";

    try {
      const category = BmiCategory(bmi);
    } catch (error) {
      expect(error.message).to.be.eq("BMI must be an number")
    }
  })

  it("should return the correct bmi category", async () => {
    const bmi = 34.9;

    const category = BmiCategory(bmi);
    expect(category).to.be.an('object');
    expect(category).to.include({ bmiCategory: 'Moderately obese', healthRisk: 'Medium risk' });
  })
})