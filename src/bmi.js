/**
 * Function to calculate BMI using weight and height parameters.
 * @param {number} height 
 * @param {number} weight 
 * @returns {number} calculate bmi
 */
function BmiCalculator(height, weight) {
  if (isNaN(height)) throw new Error('height must be an number')

  if (isNaN(weight)) throw new Error('weight must be an number')

  return parseFloat((weight / ((height * height) / 10000)).toFixed(1));
}



/**
 * Function to assign BMI category and health risk based on bmi range.
 * @param {number} bmi range
 * @returns {bmiCategory: string, healthRisk:string} bmiCategory
 */
function BmiCategory(bmi) {
  if (isNaN(bmi)) throw new Error('BMI must be an number')

  if (bmi < 18.5) {
    return { bmiCategory: "Underweight", healthRisk: "Malnutrition risk" }
  } else if (bmi < 25) {
    return { bmiCategory: "Normal weight", healthRisk: "Low risk" }
  } else if (bmi < 30) {
    return { bmiCategory: "Overweight", healthRisk: "Enhanced risk" }
  } else if (bmi < 35) {
    return { bmiCategory: "Moderately obese", healthRisk: "Medium risk" }
  } else if (bmi < 40) {
    return { bmiCategory: "Severely obese", healthRisk: "High risk" }
  } else {
    return { bmiCategory: "Very severely obese", healthRisk: "Very high risk" }
  }
}

module.exports = { BmiCalculator, BmiCategory }