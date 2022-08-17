/**
 * Function to calculates BMI using weight and height parameters.
 * @param {number} height 
 * @param {number} weight 
 * @returns {number} calculate bmi
 */
function BmiCalculator(height, weight) {
  if (isNaN(height)) throw new Error('height must be an number')

  if (isNaN(weight)) throw new Error('weight must be an number')

  return parseFloat((weight / ((height * height) / 10000)).toFixed(1));
}

module.exports = { BmiCalculator }