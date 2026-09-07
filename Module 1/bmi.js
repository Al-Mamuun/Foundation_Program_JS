const weight = process.argv[2];
const height = process.argv[3];

const bmi = (weight, height) => {
    const bmiValue = weight / (height * height);
    return bmiValue;
}

// console.log(`Weight: ${weight} kg`);
// console.log(`Height: ${height} m`);
// console.log(`BMI: ${bmi(weight, height)}`);

const bmiValue = bmi(weight, height);
if (bmiValue < 18.5) {
    console.log("You are underweight.");
} else if (bmiValue < 25) {
    console.log("You have a normal weight.");
} else {
    console.log("You are overweight.");
}


