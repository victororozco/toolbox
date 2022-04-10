import isValidFileLine from "./is-valid-file-line.utils"

const parseCSVToJSON = async (data, delimiter) => {
  const dataSplit = data.split('\n')
  let lines = []

  /** Delete first element (keys) */
  dataSplit.shift()

  await Promise.all(dataSplit.map(d => {
    const parse = d.split(delimiter)
    const [ file, text, number, hex ] = parse

    if (isValidFileLine({ file, text, number, hex }) ) {
      lines.push({
        text, 
        number: Number(number),
        hex
      })
    }

    return d
  }))

  return lines
}

export default parseCSVToJSON