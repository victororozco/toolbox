import {
  expect
} from "chai"
import {
  isAlphanumeric,
} from "../../src/utils/index.utils"

describe("Is Valid Alphanumeric Test: ", function () {
  it("Check the returned value is true ", function () {
    const result = isAlphanumeric("Test Alphanumeric 1")
    expect(result, "result should be true").to.equal(true)
  })

  it("Check the returned value is false", function () {
    const result = isAlphanumeric("======")
    expect(result, "result should be false").to.equal(false)
  })

  it("Check the returned value is boolean", function () {
    const result = isAlphanumeric("file1.csv")
    expect(result, "result should be boolean").to.be.a("boolean")
  })
})