import {
  expect
} from "chai"
import {
  isValidFileName
} from "../../src/utils/index.utils"

describe("Is Valid File Name Test: ", function () {
  it("Check the returned value is true ", function () {
    const result = isValidFileName("file1.csv")
    expect(result, "result should be true").to.equal(true)
  })

  it("Check the returned value is false", function () {
    const result = isValidFileName("invalid-name.pdf")
    expect(result, "result should be false").to.equal(false)
  })

  it("Check the returned value is boolean", function () {
    const result = isValidFileName("file1.csv")
    expect(result, "result should be boolean").to.be.a("boolean")
  })
})