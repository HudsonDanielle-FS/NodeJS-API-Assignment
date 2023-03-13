const {jokeService, jokeServiceById} = require("./jokeService")

jest.mock("./jokeService")

describe("Joke Service Test", () => {
    test("As a user I should return 10 jokes", async () => {
        const result = await jokeService()
        expect(result.data).toHaveLength(10)
        expect(result.data[8].id).toEqual(1)
        expect(result.data[8].type).toEqual("")
        expect(result.data[8].setup).toEqual("")
        expect(result.data[8].punchline).toEqual("")
    })

    test("As a user I should return a joke object by id", async () => {
        const result = await jokeServiceById(3)
        expect(result.data.id).toEqual(id)
        expect(result.data.type).toEqual("")
    })
})