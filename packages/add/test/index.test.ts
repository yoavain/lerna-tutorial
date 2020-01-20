import { add } from "../src";

describe("Test add module", () => {
    it("should add numbers", () => {
        expect(add(1,2,3,4,5)).toEqual(15);
    })
});