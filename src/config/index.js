'use strict'
import dotenv from 'dotenv'

dotenv.config();

export const env = process.env.NODE_ENV || 'dev';
export const port = process.env.PORT || 3000;
export const toolbox_url = process.env.TOOLBOX_URL;
export const toolbox_pk = process.env.TOOLBOX_PK;
