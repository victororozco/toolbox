import { isAlphanumeric, isValidFileName, isHexadecimal } from "./index.utils"


const isValidFileLine = ({ file, text, number, hex }) => {
  if (!file || !text || !number || !hex) return false

  const validName = isValidFileName(file)
  if (!validName) return false

  const validText = isAlphanumeric(text)
  if (!validText) return false

  number = Number(number)
  const validNumber = typeof number === 'number' && !isNaN(number)
  if (!validNumber) return false
  
  const validHexadecimal = isHexadecimal(hex)
  if (!validHexadecimal) return false

  return true
}

export default isValidFileLine