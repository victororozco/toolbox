'use strict'

import axiosAPI from "../../../utils/axios-api.utils"
import { handleError } from "../../../utils/handle-error.utils"
import { parseCSVToJSON } from "../../../utils/index.utils"

const getFile = (fileName) => new Promise(async (resolve, reject) => {
  try {
    if (typeof fileName !== 'string' || !fileName) {
      return reject(handleError({
        message: "Debe proporcionar nombre válido",
        errorCode: "GF001",
        statusCode: 500,
      }))
    }

    const delimiter = ','
    console.log('delimiter', delimiter)

    const url = `/v1/secret/file/${fileName}`
    const { data: response } = await axiosAPI().get(url)

    if (typeof response !== 'string' || response === '' || response === null) {
      return reject(handleError({
        message: "El archivo no contiene información válida",
        errorCode: "GF002",
        statusCode: 500,
      }))
    }

    const lines = await parseCSVToJSON(response, delimiter)

    return resolve({
      status: 200,
      response: {
        data: {
          file: fileName,
          lines
        },
      }
    })

  } catch (err) {
    console.error('src.handlers.v1.files.get-files.error', err)
    return reject(handleError({
      message: "Hubo un error al procesar el archivo",
      errorCode: "GF003",
      errorDetail: err.message,
      statusCode: 500,
    }))
  }
})

export default getFile