import * as Array from "run-array"
import data from '../data/people-data'

const { BmiCalculator, BmiCategory } = require('./bmi')

async function main() {
  let totalOverweight = 0;
  const people = [];

  Array.asyncForEach(data, (x, i, a, stop) => {
    // SOME ACTION WITH ARRAY ELEMENT X
    // call stop() to stop iteration. It return success false.

    // Calculate BMI
    const bmi = BmiCalculator(x.HeightCm, x.WeightKg);

    // Get category and healthRisk based on bmi
    const category = BmiCategory(bmi);

    // Count if bmi range falls in Overweight category
    if (category.bmiCategory === "Overweight") totalOverweight++;

    // Create an array of people object with bmi, category and health risk
    people.push({ ...x, bmi, ...category });

    console.log(i)

  }).then(x => console.log('asyncForEach', x.success));

  // for (let i = 0; i < data.length; i++) {
  //   // Calculate BMI
  //   const bmi = BmiCalculator(data[i].HeightCm, data[i].WeightKg);

  //   // Get category and healthRisk based on bmi
  //   const category = BmiCategory(bmi);

  //   // Count if bmi range falls in Overweight category
  //   if (category.bmiCategory === "Overweight") totalOverweight++;

  //   // Create an array of people object with bmi, category and health risk
  //   people.push({ ...data[i], bmi, ...category });
  // }
  console.log(people[0])
  console.log(totalOverweight)
}

main()