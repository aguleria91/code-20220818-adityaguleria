"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const StreamArray_1 = __importDefault(require("stream-json/streamers/StreamArray"));
const bmi_1 = require("./bmi");
const readFilePath = './data/people-data.json';
const writeFilePath = './data/people-with-bmi.json';
const reader = fs_1.default.createReadStream(readFilePath).pipe(StreamArray_1.default.withParser());
const writer = fs_1.default.createWriteStream(writeFilePath);
async function main() {
    let totalOverweight = 0;
    reader.on('data', (data) => {
        const { key, value } = data;
        // Calculate BMI
        const bmi = (0, bmi_1.BmiCalculator)(value.HeightCm, value.WeightKg);
        // Get category and healthRisk based on bmi
        const category = (0, bmi_1.GetBmiType)(bmi);
        // Count if bmi range falls in Overweight category
        if (category.BmiCategory === "Overweight")
            totalOverweight++;
        // If first element write '[' to start the array
        if (key === 0)
            writer.write('[');
        // else write ',' to end the object
        else
            writer.write(',');
        // write the updated people object with bmi details
        writer.write(JSON.stringify(Object.assign(Object.assign(Object.assign({}, value), { bmi }), category), null, 2));
    });
    // This is here incase any errors occur
    writer.on('error', function (err) {
        console.log("Error while writing JSON stream", err);
    });
    // This is here incase any errors occur
    reader.on('error', function (err) {
        console.log("Error while reading JSON stream", err);
    });
    reader.on('end', () => {
        writer.write(']');
        console.log(`People BMI data processing completed and total overweight people- ${totalOverweight}`);
    });
}
main();
