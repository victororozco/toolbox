import {
  expect
} from "chai"
import getFile from "../../../../src/handlers/v1/files/get-file"

describe("Get File Test: ", function () {

  it("Check the returned value is valid ", async function () {
    const fileName = "test2.csv"

    await getFile(fileName).then((result)  => {
      expect(result, "result should be object").to.be.a("object")
      expect(result.status, "result length should be 1").to.equal(200)
      expect(result.response, "result length should be 1").to.be.a("object")
      expect(result.response.data, "result.response.data length should be object").to.be.a("object")
      expect(result.response.data.file, "result.response.data.file length should be string").to.be.a("string")
      expect(result.response.data.file, `result.response.data.file length should be ${fileName}`).to.equal(fileName)
      expect(result.response.data.lines, "result.response.data.lines length should be array").to.be.a("array")
      expect(result.response.data.lines, "result.response.data.lines length should be 1").to.length.greaterThan(0)

    })

  })


  it("Check the returned value is invalid name ", async function () {
    const fileName = null

    await getFile(fileName).catch((error)  => {
      expect(error, "result should be object").to.be.a("object")
      expect(error.status, "error length should be 1").to.equal(500)
      expect(error.response, "error length should be 1").to.be.a("object")
      expect(error.response.message).to.equal("Debe proporcionar nombre válido")
      expect(error.response.type, "error.response.type length should be error").to.equal("error")

    })

  })

})