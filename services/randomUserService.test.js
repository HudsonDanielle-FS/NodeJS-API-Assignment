const {randomUserService, randomUserServiceById} = require("./randomUserService")


describe("randomUser service test", () => {
    test("As a user I should return a random user", async () => {
        const result = await randomUserService()
        //expect(result.data.results[0].gender).toEqual()
    })

    test("As a user I should return a male user", async () => {
        const result = await randomUserServiceById('/?gender=male')
        expect(result.data.results[0].gender).toEqual("female")
    })
})