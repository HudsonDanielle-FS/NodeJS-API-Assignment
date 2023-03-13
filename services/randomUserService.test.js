const {randomUserService, randomUserServiceById} = require("./randomUserService")

describe("randomUser Service Test", () => {
    test("As a user I should return 10 jokes", async () => {
        const result = await randomUserService()
        expect(result.data).toHaveLength(10)
        expect(result.data[8].id).toEqual(1)
        expect(result.data[8].type).toEqual("")
        expect(result.data[8].setup).toEqual("")
        expect(result.data[8].punchline).toEqual("")
    })

    test("As a user I should return a randomUser object by id", async () => {
        const result = await randomUserServiceById(3)
        expect(result.data.id).toEqual(id)
        expect(result.data.type).toEqual("")
    })
})