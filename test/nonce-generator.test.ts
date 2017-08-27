import NonceGenerator from "../src/nonce-generator"
import isUInt32 from "./helper/is-uint32"

describe("NonceGenerator", () => {
  test("is a function", () => {
    expect(typeof NonceGenerator === "function").toBeTruthy()
  })

  test("is expecting one parameters", () => {
    expect(NonceGenerator.length).toBe(1)
  })

  test("is instantiable", () => {
    expect(new NonceGenerator()).toBeInstanceOf(NonceGenerator)
  })

  describe("an unseeded NonceGenerator instance", () => {
    const ng = new NonceGenerator()

    test("is an object", () => {
      expect(typeof ng === "object").toBeTruthy()
    })

    test("has a property generate", () => {
      expect(ng.generate).toBeDefined()
    })

    describe("generate", () => {
      const { generate } = ng

      test("is a function", () => {
        expect(typeof generate === "function").toBeTruthy()
      })

      test("is expecting no parameters", () => {
        expect(generate.length).toBe(0)
      })

      test("is returning UInt32 values", () => {
        // arrange
        const sampleSize = 10000
        // act
        const nonces = Array(sampleSize).fill(0).map(() => generate())
        // assert
        expect(
          nonces.reduce((prev, nonce) => prev && isUInt32(nonce), true)
        ).toBeTruthy()
      })
    })
  })
  describe("a seeded NonceGenerator instance", () => {
    const ng = new NonceGenerator("hello.")

    test("has a property generate", () => {
      expect(ng.generate).toBeDefined()
    })

    describe("generate", () => {
      const { generate } = ng

      test("is returning the expected values", () => {
        // arrange
        const sampleSize = 3
        // act
        const nonces = Array(sampleSize).fill(0).map(() => generate())
        // assert
        expect(nonces).toEqual([3986837235, 202575200, 282549050])
      })
    })
  })
})
