import {
  expect
} from "chai"
import getAllFiles from "../../../../src/handlers/v1/files/get-all-files"

describe("Get All Files Test: ", function () {

  it("Check the returned value is valid ", async function () {
    await getAllFiles().then((result)  => {
      expect(result, "result should be array").to.be.a("object")
      expect(result.status, "result length should be 1").to.equal(200)
      expect(result.response, "result length should be 1").to.be.a("object")
      expect(result.response.data, "result length should be 1").to.be.a("array")
      expect(result.response.data, "result length should be 1").to.length.greaterThan(0)
    })

  })

})