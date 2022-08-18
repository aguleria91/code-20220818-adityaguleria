/**
 * Function to calculate BMI using weight and height parameters.
 * @param {number} height 
 * @param {number} weight 
 * @returns {number} calculate bmi
 */
export function BmiCalculator(height:number, weight:number): number {
  if (isNaN(height)) throw new Error('height must be an number')

  if (isNaN(weight)) throw new Error('weight must be an number')

  return parseFloat((weight / ((height * height) / 10000)).toFixed(1));
}

export interface IBmiCategory{
  BmiCategory:string;
  HealthRisk:string;
}

/**
 * Function to assign BMI category and health risk based on bmi range.
 * @param {number} bmi range
 * @returns {IBmiCategory} bmiCategory
 */
 export function GetBmiType(bmi:number): IBmiCategory{
  if (isNaN(bmi)) throw new Error('BMI must be an number')

  if (bmi < 18.5) {
    return { BmiCategory: "Underweight", HealthRisk: "Malnutrition risk" }
  } else if (bmi < 25) {
    return { BmiCategory: "Normal weight", HealthRisk: "Low risk" }
  } else if (bmi < 30) {
    return { BmiCategory: "Overweight", HealthRisk: "Enhanced risk" }
  } else if (bmi < 35) {
    return { BmiCategory: "Moderately obese", HealthRisk: "Medium risk" }
  } else if (bmi < 40) {
    return { BmiCategory: "Severely obese", HealthRisk: "High risk" }
  } else {
    return { BmiCategory: "Very severely obese", HealthRisk: "Very high risk" }
  }
}
