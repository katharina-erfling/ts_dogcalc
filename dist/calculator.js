export function calculateCalories(input) {
    var _a;
    let kcalPerPortion = undefined;
    const nfe = 100 - (input.protein + input.fat + input.fiber + ((_a = input.moisture) !== null && _a !== void 0 ? _a : 0) + input.ash);
    const kcalPer100g = 3.5 * input.protein + 8.5 * input.fat + 3.5 * nfe;
    if (input.weight) {
        kcalPerPortion = kcalPer100g * input.weight / 100;
    }
    return { kcalPer100g, nfe, kcalPerPortion };
}
