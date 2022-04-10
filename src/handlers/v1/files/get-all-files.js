'use strict'

import axiosAPI from "../../../utils/axios-api.utils"
import { handleError } from "../../../utils/handle-error.utils"
import parseCSVToJSON from "../../../utils/parse-csv-to-json"

const getAllFiles = () => new Promise(async (resolve, reject) => {
  try {

    let data = []
    let dataError = []
    const delimiter = ','
    const { data: allData } = await axiosAPI().get(`/v1/secret/files`)

    if (allData && Array.isArray(allData.files)) {
      const files = allData.files

      await Promise.all(files.map(async fileName => {
        await axiosAPI().get(`/v1/secret/file/${fileName}`)
          .then(async result => {
            const { data: dataFile } = result
    
            if (typeof dataFile !== 'string' || dataFile === '' || dataFile === null) {
              return reject(handleError({
                message: "El archivo no contiene información válida",
                errorCode: "GF001",
                statusCode: 500,
              }))
            }
    
            const lines = await parseCSVToJSON(dataFile, delimiter)
    
            data.push({
              file: fileName,
              lines,
            })
          }).catch(err => {
            dataError.push({
              file: fileName,
              error: err?.response?.data,
            })
          })

        return fileName
      }))

    }

    return resolve({
      status: 200,
      response: {
        data,
        dataError
      }
    })

  } catch (err) {
    console.error('src.handlers.v1.files.get-files.error', err)
    return reject(handleError({
      message: "Hubo un error al obtener la lista de archivos",
      errorCode: "GAF001",
      errorDetail: err.message,
      statusCode: 500,
    }))
  }
})

export default getAllFiles