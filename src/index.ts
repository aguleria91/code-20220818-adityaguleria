import fs from 'fs'
import StreamArray from 'stream-json/streamers/StreamArray';
import { BmiCalculator, GetBmiType } from './bmi';

const readFilePath = './data/people-data.json';
const writeFilePath = './data/people-with-bmi.json';

const reader = fs.createReadStream(readFilePath).pipe(StreamArray.withParser());

const writer = fs.createWriteStream(writeFilePath);

async function main() {
  let totalOverweight = 0;

  reader.on('data',(data:any) => {
    const {key, value} = data;

    // Calculate BMI
    const bmi = BmiCalculator(value.HeightCm, value.WeightKg);

    // Get category and healthRisk based on bmi
    const category = GetBmiType(bmi);

    // Count if bmi range falls in Overweight category
    if (category.BmiCategory === "Overweight") totalOverweight++;

    // If first element write '[' to start the array
    if(key ===0) writer.write('[')
    // else write ',' to end the object
    else writer.write(',');
    // write the updated people object with bmi details
    writer.write(JSON.stringify({ ...value, bmi, ...category },null,2));
  });

  // This is here incase any errors occur
  writer.on('error', function (err) {
    console.log("Error while writing JSON stream",err);
  });
  // This is here incase any errors occur
  reader.on('error', function (err) {
    console.log("Error while reading JSON stream",err);
  });

  reader.on('end', () => {
    writer.write(']')
    console.log(`People BMI data processing completed and total overweight people- ${totalOverweight}`)
  });
}
main()