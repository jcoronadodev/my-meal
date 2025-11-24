export function calculateBMR(
    weight: number,
    height: number,
    age: number,
    gender: string
): number {
    // Mifflin-St Jeor Equation
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

export function calculateTDEE(bmr: number, activityLevel: string): number {
    const multipliers: Record<string, number> = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9,
    };
    return bmr * (multipliers[activityLevel] || 1.2);
}

export function calculateTargets(
    tdee: number,
    goal: string
): { calories: number; protein: number; carbs: number; fat: number } {
    let targetCalories = tdee;

    if (goal === 'lose_weight') {
        targetCalories = tdee - 500;
    } else if (goal === 'gain_muscle') {
        targetCalories = tdee + 300;
    }

    // Macro split (approximate 30/35/35 for balance, can be adjusted)
    // Protein: 4 cal/g, Carbs: 4 cal/g, Fat: 9 cal/g

    const proteinRatio = 0.3;
    const fatRatio = 0.3;
    const carbsRatio = 0.4;

    const protein = Math.round((targetCalories * proteinRatio) / 4);
    const fat = Math.round((targetCalories * fatRatio) / 9);
    const carbs = Math.round((targetCalories * carbsRatio) / 4);

    return {
        calories: Math.round(targetCalories),
        protein,
        carbs,
        fat,
    };
}
