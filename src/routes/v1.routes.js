'use strict'
import express from 'express'
import { Files } from './v1/index.routes'

const VERSION_V1 = 'v1'

const routesV1 = () => {
  const app = express.Router({ mergeParams: true })

  app.use(`/${VERSION_V1}/files`, Files)

  return app
}

export default routesV1
