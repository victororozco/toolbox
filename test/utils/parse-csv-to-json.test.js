import {
  expect
} from "chai"
import {
  parseCSVToJSON,
} from "../../src/utils/index.utils"

describe("Parse CSV Array to JSON Test: ", function () {

  const data = "file,text,number,hex\ntest2.csv,QTrjs\ntest2.csv,SBwgMibiHFZZSQv,2925869,c459ec602dfaf523cecffa1d75fd062c"
  const delimiter = ','

  it("Check the returned value is valid ", async function () {
    const result = await parseCSVToJSON(data, delimiter)
    expect(result, "result should be array").to.be.a("array")
    expect(result, "result length should be 1").to.length(1)

  })

})