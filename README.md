# BMI calculator with BMI category and Health risk.

This is service is built with to read a JSON file with array of people and create a new json file with calculated BMI, BMI category and health risk.

## Application Architecture

The application is a simple nodejs command line tool that reads a json file containing array of objects with each each object having gender, weight and height. While processing each object a new JSON file is written with BMI, BMI category and health risk. The JSON read and write is implemented using stream to keep a small memory footprint and avoid any memory outages.

### Modules

1. **BMI Module** - calculates the bmi and also provide the category and health risk based on the calculated bmi.

## Getting Started

### Packages used

This project uses multiple 3rd Party packages -

1. **[stream-json](https://www.npmjs.com/package/stream-json)** - NPM Package to read and write JSON files in stream

### Minimum Requirements

1.  Requires Node.js (v14 and above) installed on the machine. You can install from [Node.js Installation](https://nodejs.org/en/download/)

### Installation, Build and Run Guide

1. Clone the project from [BMI Calculator Service](https://github.com/aguleria91/code-20220818-adityaguleria) into your working directory.
2. Navigate to `code-20220818-adityaguleria` directory using `cd code-20220818-adityaguleria`
3. Run `npm install` to install dependencies and packages.
4. Add the json file in the data folder with filename `people-data.json`.
5. Run `npm run build` to build the application.
6. Run `npm run prod`.
7. Processed json file will be available in the data folder with filename `people-with-bmi.json`.

### Testing

Run `npm run test` to run test cases.
