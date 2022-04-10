
import express from 'express';
import helmet from 'helmet';
import createRoutes from '../routes';
import cors from 'cors'

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

app.use(cors({
  origin: true,
  credentials: true,
}));

// mount api version routes
createRoutes(app);


export default app