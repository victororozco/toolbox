import {
  expect
} from "chai"
import {
  isHexadecimal
} from "../../src/utils/index.utils"

describe("Is Hexadecimal test:", function () {
  it("Check the hexadecimal is valid", function () {
    const result = isHexadecimal("289f7bf94b36442a69f84d8fd9f102ec")
    expect(result, "result should be true").to.equal(true)
  })

  it("Check the hexadecimal is invalid", function () {
    const result = isHexadecimal("m393mxn129Sd987")
    expect(result, "result should be false").to.equal(false)
  })

  it("Check the returned value is boolean", function () {
    const result = isHexadecimal("289f7bf94b36442a69f84d8fd9f102ec")
    expect(result, "result should be boolean").to.be.a("boolean")
  })
})