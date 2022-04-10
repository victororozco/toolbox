'use strict'

import express from 'express'
import Debug from 'debug'

/** Utils */
import { handleErrorWithResponse } from '../../utils/handle-error.utils'

/** Handlers */
import { getAllFiles, getFile } from '../../handlers/v1/files'

const app = express.Router()
const debug = Debug('toolbox:routes:v1:files')

app.get('/data',
  async (req, res) => {
    try {
      debug('Get all files.')

      const create = await getAllFiles()

      return res.status(create.status).json({ ...create.response })
    } catch (err) {
      console.error(err)
      return handleErrorWithResponse({
        status: err.response.status || 500,
        message: err.response.message ? err.response.message : 'Hubo un error al consultar los archivos',
        messageWithCode: err.response.messageWithCode ? err.response.messageWithCode : null,
        errorDetail: err.response.errorDetail ? err.response.errorDetail : null,
      }, {}, res)
    }
  }
)

app.get('/:file',
  async (req, res) => {
    try {
      debug('Get all files.')
      const fileName = req.params.file

      const create = await getFile(fileName)

      return res.status(create.status).json({ ...create.response })
    } catch (err) {
      console.error(err)
      return handleErrorWithResponse({
        status: err.response.status || 500,
        message: err.response.message ? err.response.message : 'Hubo un error al consultar los archivos',
        messageWithCode: err.response.messageWithCode ? err.response.messageWithCode : null,
        errorDetail: err.response.errorDetail ? err.response.errorDetail : null,
      }, {}, res)
    }
  }
)

export default app
