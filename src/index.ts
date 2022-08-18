import fs from 'fs'
import StreamArray from 'stream-json/streamers/StreamArray';
import { BmiCalculator, GetBmiType } from './bmi';
import { IPeople } from './interface';

// const getStream = function () {
//   let jsonData = './data/people-data.json',
//       stream = fs.createReadStream(jsonData, { encoding: 'utf8' }),
//       parser = JSONStream.parse('*', null);

//       return stream.pipe(parser);
      
      
// };

const pipeline = fs.createReadStream('./data/people-data.json').pipe(StreamArray.withParser());

async function main() {
  let totalOverweight = 0;
  const people:IPeople[] = [];

  pipeline.on('data',(data:any) => {
    const x = data.value;
    
    // Calculate BMI
    const bmi = BmiCalculator(x.HeightCm, x.WeightKg);
    // Get category and healthRisk based on bmi
    const category = GetBmiType(bmi);

    // Count if bmi range falls in Overweight category
    if (category.BmiCategory === "Overweight") totalOverweight++;

    // Create an array of people object with bmi, category and health risk
    people.push({ ...x, bmi, ...category });
  });

  pipeline.on('end', () => console.log("yo-", people, totalOverweight));
}
main()