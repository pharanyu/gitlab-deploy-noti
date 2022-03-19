import * as dotenv from 'dotenv';

dotenv.config();

export default {
  app: {
    port: process.env.APP_PORT || 3000,
    env: process.env.NODE_ENV || 'development',
  }
}