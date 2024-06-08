import React, { useState } from "react";

const CalorieCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [calories, setCalories] = useState<number | null>(null); // Alteração aqui

  const calculateCalories = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseFloat(age);

    let MB = 0;

    if (gender === "male") {
      MB =
        88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * ageInYears;
    } else {
      MB =
        447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.33 * ageInYears;
    }

    let activityFactor = 1.55; // default to moderate activity level

    switch (activityLevel) {
      case "sedentary":
        activityFactor = 1.2;
        break;
      case "lightly_active":
        activityFactor = 1.375;
        break;
      case "moderate":
        activityFactor = 1.55;
        break;
      case "very_active":
        activityFactor = 1.725;
        break;
      default:
        break;
    }

    const totalCalories = MB * activityFactor;
    setCalories(totalCalories); // Correção aqui
  };

  return (
    <div>
      <h2>Calorie Calculator</h2>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Age (years):
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Activity Level:
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentary</option>
            <option value="lightly_active">Lightly Active</option>
            <option value="moderate">Moderate</option>
            <option value="very_active">Very Active</option>
          </select>
        </label>
      </div>
      <button onClick={calculateCalories}>Calculate</button>
      {calories !== null && (
        <p>Your daily calorie requirement is: {calories.toFixed(2)} calories</p>
      )}
    </div>
  );
};

export default CalorieCalculator;
