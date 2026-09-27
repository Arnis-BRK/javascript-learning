let area = 560;
let litros = area / 3;
let latas = Math.ceil(litros / 18);
let preço = 80 * latas;

console.log(
    "A area é", area,
    "Você vai precisar de", litros.toFixed(0),
    "Litros. Isso dá", latas,
    "latas. Cada lata custa 80 então o preço será R$", preço
);