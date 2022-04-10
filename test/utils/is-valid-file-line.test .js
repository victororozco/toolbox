import {
  expect
} from "chai"
import {
  isValidFileLine,
} from "../../src/utils/index.utils"

describe("Is Valid File Content: ", function () {
  it("Check the returned value is true ", function () {
    const result = isValidFileLine({
      file: "file1.csv",
      text: "Example test",
      number: 124,
      hex: "289f7bf94b36442a69f84d8fd9f102ec"
    })
    expect(result, "result should be true").to.equal(true)
  })

  it("Check the returned value is false", function () {
    const result = isValidFileLine({
      file: "file1.csv",
      text: "Example test",
      hex: "289f7bf94b36442a69f84d8fd9f102ec"
    })
    expect(result, "result should be false").to.equal(false)
  })

  it("Check the returned value is boolean", function () {
    const result = isValidFileLine({
      file: "file1.csv",
      text: "Example test",
      number: 124,
      hex: "289f7bf94b36442a69f84d8fd9f102ec"
    })
    expect(result, "result should be boolean").to.be.a("boolean")
  })
})