import {
  expect
} from "chai"
import axiosAPI from "../../src/utils/axios-api.utils"

describe("Axios Test: ", function () {
  it("Check the returned value is valid ", async function () {
    const result = await axiosAPI().get('/v1/secret/files')
    expect(result.status, "result.status should be 200").to.equal(200)
    expect(result.data.files, "result should be true").to.be.a("array")
  })

  it("Check the returned value is object", function () {
    const result = axiosAPI()
    expect(result, "result should be function").to.be.a("function")
  })
})
