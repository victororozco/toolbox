'use strict'

import routesV1 from './v1.routes'

const createRoutes = (app) => {

  const appRoutesv1 = routesV1(app);

  app.use('/api', appRoutesv1);

}

export default createRoutes