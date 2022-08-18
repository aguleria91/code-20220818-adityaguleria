"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const StreamArray_1 = __importDefault(require("stream-json/streamers/StreamArray"));
const bmi_1 = require("./bmi");
// const getStream = function () {
//   let jsonData = './data/people-data.json',
//       stream = fs.createReadStream(jsonData, { encoding: 'utf8' }),
//       parser = JSONStream.parse('*', null);
//       return stream.pipe(parser);
// };
const pipeline = fs_1.default.createReadStream('./data/people-data.json').pipe(StreamArray_1.default.withParser());
async function main() {
    let totalOverweight = 0;
    const people = [];
    pipeline.on('data', (data) => {
        const x = data.value;
        // Calculate BMI
        const bmi = (0, bmi_1.BmiCalculator)(x.HeightCm, x.WeightKg);
        // Get category and healthRisk based on bmi
        const category = (0, bmi_1.GetBmiType)(bmi);
        // Count if bmi range falls in Overweight category
        if (category.BmiCategory === "Overweight")
            totalOverweight++;
        // Create an array of people object with bmi, category and health risk
        people.push(Object.assign(Object.assign(Object.assign({}, x), { bmi }), category));
    });
    pipeline.on('end', () => console.log("yo-", people, totalOverweight));
}
main();
