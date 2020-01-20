import { multiply } from "../src";

describe("Test multiply module", () => {
    it("should multiply numbers", () => {
        expect(multiply(1,2,3,4,5)).toEqual(120);
    })
});