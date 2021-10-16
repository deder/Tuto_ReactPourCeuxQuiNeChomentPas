const verifyToken = require("./verifyToken")
// @ponicode
describe("verifyToken", () => {
    test("0", async () => {
        await verifyToken(" ")
    })

    test("1", async () => {
        await verifyToken(undefined)
    })
})
