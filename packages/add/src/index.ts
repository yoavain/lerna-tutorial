export const add = (...numbers: number[]): number => {
    return numbers.reduce((val, acc) => {
        acc += val;
        return acc;
    }, 0);
}
