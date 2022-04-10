
import express from 'express';
import helmet from 'helmet';
import createRoutes from '../routes';

/**
* Express instance
* @public
*/
const app = express();

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// mount api version routes
createRoutes(app);


export default app