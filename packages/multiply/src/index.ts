export const multiply = (...numbers: number[]): number => {
    return numbers.reduce((val, acc) => {
        acc *= val;
        return acc;
    }, 1);
}
