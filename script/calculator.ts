export interface FoodInput {
    protein: number;
    fat: number;
    fiber: number;
    ash: number;
    moisture?: number;
    weight?: number;
}


export interface CalcResult {
    kcalPer100g: number;
    kcalPerPortion?: number;
    nfe: number;
}



export function calculateCalories(input: FoodInput): CalcResult {
    let kcalPerPortion: number | undefined = undefined;
    const nfe = 100 - (input.protein + input.fat + input.fiber + (input.moisture ?? 0) + input.ash);
    const kcalPer100g = 3.5 * input.protein + 8.5 * input.fat + 3.5 * nfe;
    if (input.weight) {
        kcalPerPortion = kcalPer100g * input.weight / 100;
    }
    return { kcalPer100g, nfe, kcalPerPortion};
}
